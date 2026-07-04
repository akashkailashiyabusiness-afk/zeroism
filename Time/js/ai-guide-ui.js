import { buildSystemPrompt, SUGGESTED_QUESTIONS } from "./ai-context.js";
import { computeUltimateScore } from "./ultimate-value.js";
import { LIVES_CATALOG, PROJECT_GAPS, filterLives } from "./lives-catalog.js";
import { fetchWikiSummary } from "./wiki.js";
import {
  loadApiKey,
  saveApiKey,
  loadProxyUrl,
  saveProxyUrl,
  loadChatHistory,
  saveChatHistory,
  clearChatHistory,
  sendChat,
} from "./ai-client.js";

let chatMessages = [];
let getLifeContext = () => ({ life: null });

export function initAiGuide(getLife) {
  getLifeContext = getLife;
}

export function renderAiGuide(root) {
  if (!root) return;
  chatMessages = loadChatHistory();

  root.innerHTML = `
    <h2>AI Life Guide</h2>
    <p class="ai-intro">
      Poora Time Machine context ke saath — life, ultimate value, research. NVIDIA NIM powered.
    </p>

    <details class="ai-settings">
      <summary>API Settings (key sirf aapke device par)</summary>
      <label class="field">
        <span>NVIDIA API Key (nvapi-…)</span>
        <input type="password" id="ai-api-key" placeholder="build.nvidia.com se key" autocomplete="off" />
      </label>
      <label class="field">
        <span>Proxy URL (CORS ke liye)</span>
        <input type="text" id="ai-proxy-url" placeholder="http://localhost:8787/api/chat" />
      </label>
      <p class="hint">Terminal: <code>npm run proxy</code> phir app kholo. Key kabhi GitHub par mat daalo.</p>
      <button type="button" id="btn-save-ai-settings" class="btn-primary btn-sm">Settings save</button>
    </details>

    <div class="ai-suggestions" id="ai-suggestions"></div>

    <div class="ai-chat" id="ai-chat" role="log" aria-live="polite"></div>

    <form class="ai-form" id="ai-form">
      <textarea id="ai-input" rows="2" placeholder="Life, value, focus, rishte — kuch bhi poochho…" required></textarea>
      <div class="ai-form-actions">
        <button type="submit" class="btn-primary btn-sm" id="btn-ai-send">पूछें</button>
        <button type="button" class="btn-ghost btn-sm" id="btn-ai-clear">Chat clear</button>
      </div>
    </form>

    <section class="lives-section">
      <h3>किन लोगों की life पढ़ें — fullest life</h3>
      <p class="section-hint">Wikipedia + official sources — status nahi, meaning.</p>
      <input type="search" id="lives-search" class="lives-search" placeholder="Search: SRK, Kalam, Dhoni…" />
      <div class="lives-grid" id="lives-grid"></div>
      <div class="wiki-preview hidden" id="wiki-preview"></div>
    </section>

    <section class="gaps-section">
      <h3>Project ab kya miss kar raha hai</h3>
      <ul class="gaps-list" id="gaps-list"></ul>
    </section>
  `;

  document.getElementById("ai-api-key").value = loadApiKey();
  document.getElementById("ai-proxy-url").value = loadProxyUrl();

  renderSuggestions();
  renderChat();
  renderLives(LIVES_CATALOG);
  renderGaps();

  document.getElementById("btn-save-ai-settings").addEventListener("click", () => {
    saveApiKey(document.getElementById("ai-api-key").value);
    saveProxyUrl(document.getElementById("ai-proxy-url").value);
    appendSystemNote("Settings saved. Ab npm run proxy check karo agar error aaye.");
  });

  document.getElementById("ai-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    await handleUserSend();
  });

  document.getElementById("btn-ai-clear").addEventListener("click", () => {
    chatMessages = [];
    clearChatHistory();
    renderChat();
  });

  document.getElementById("lives-search").addEventListener("input", (e) => {
    renderLives(filterLives(e.target.value));
  });
}

function renderSuggestions() {
  const el = document.getElementById("ai-suggestions");
  el.innerHTML = SUGGESTED_QUESTIONS.map(
    (q) => `<button type="button" class="chip" data-q="${escapeAttr(q)}">${q}</button>`
  ).join("");
  el.querySelectorAll(".chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.getElementById("ai-input").value = btn.dataset.q;
      document.getElementById("ai-input").focus();
    });
  });
}

function renderChat() {
  const box = document.getElementById("ai-chat");
  if (!chatMessages.length) {
    box.innerHTML = `<p class="ai-empty">Pehli question poochho — AI aapke life data + Ultimate Score use karega.</p>`;
    return;
  }
  box.innerHTML = chatMessages
    .map(
      (m) => `
    <div class="ai-msg ai-msg--${m.role}">
      <span class="ai-msg-role">${m.role === "user" ? "आप" : "Guide"}</span>
      <div class="ai-msg-body">${formatMarkdownLite(m.content)}</div>
    </div>`
    )
    .join("");
  box.scrollTop = box.scrollHeight;
}

function renderLives(list) {
  const grid = document.getElementById("lives-grid");
  grid.innerHTML = list
    .map(
      (p) => `
    <article class="life-card" data-id="${p.id}">
      <span class="life-card__tag">${p.tag}</span>
      <h4>${p.nameHi} <small>${p.name}</small></h4>
      <p class="life-card__quote">"${p.quote}"</p>
      <p>${p.lesson}</p>
      <p class="life-card__why"><strong>Kyun padhein:</strong> ${p.whyRead}</p>
      <div class="life-card__links">
        <button type="button" class="btn-ghost btn-sm btn-wiki" data-wiki="${escapeAttr(p.wikiTitle)}">Wikipedia</button>
        <a href="${p.officialUrl}" target="_blank" rel="noopener noreferrer" class="btn-ghost btn-sm">Official ↗</a>
      </div>
    </article>`
    )
    .join("");

  grid.querySelectorAll(".btn-wiki").forEach((btn) => {
    btn.addEventListener("click", () => loadWikiPreview(btn.dataset.wiki));
  });
}

async function loadWikiPreview(title) {
  const preview = document.getElementById("wiki-preview");
  preview.classList.remove("hidden");
  preview.innerHTML = `<p class="wiki-loading">Wikipedia load ho raha hai…</p>`;
  try {
    const w = await fetchWikiSummary(title);
    preview.innerHTML = `
      <h4>${w.title}</h4>
      ${w.thumbnail ? `<img src="${w.thumbnail}" alt="" class="wiki-thumb" loading="lazy" />` : ""}
      <p>${w.extract}</p>
      <a href="${w.url}" target="_blank" rel="noopener noreferrer">Full article on Wikipedia ↗</a>`;
  } catch (err) {
    preview.innerHTML = `<p class="wiki-error">Load fail: ${err.message}</p>`;
  }
}

function renderGaps() {
  document.getElementById("gaps-list").innerHTML = PROJECT_GAPS.map(
    (g) => `<li><strong>${g.gap}</strong> — ${g.why}</li>`
  ).join("");
}

async function handleUserSend() {
  const input = document.getElementById("ai-input");
  const text = input.value.trim();
  if (!text) return;

  const btn = document.getElementById("btn-ai-send");
  btn.disabled = true;

  chatMessages.push({ role: "user", content: text });
  saveChatHistory(chatMessages);
  input.value = "";
  renderChat();

  const typing = { role: "assistant", content: "…soch raha hoon" };
  chatMessages.push(typing);
  renderChat();

  try {
    const { life } = getLifeContext();
    const ultimateScore = life ? computeUltimateScore() : null;
    const system = buildSystemPrompt(life, ultimateScore);

    const apiMessages = [
      { role: "system", content: system },
      ...chatMessages
        .filter((m) => m.content !== "…soch raha hoon")
        .slice(-12)
        .map((m) => ({ role: m.role, content: m.content })),
    ];

    const reply = await sendChat({
      messages: apiMessages,
      apiKey: loadApiKey(),
      proxyUrl: loadProxyUrl(),
    });

    chatMessages = chatMessages.filter((m) => m.content !== "…soch raha hoon");
    chatMessages.push({ role: "assistant", content: reply });
    saveChatHistory(chatMessages);
  } catch (err) {
    chatMessages = chatMessages.filter((m) => m.content !== "…soch raha hoon");
    chatMessages.push({
      role: "assistant",
      content: `Error: ${err.message}\n\n1) build.nvidia.com se API key\n2) Terminal: npm run proxy\n3) Settings mein key save karo`,
    });
    saveChatHistory(chatMessages);
  }

  btn.disabled = false;
  renderChat();
}

function appendSystemNote(text) {
  chatMessages.push({ role: "assistant", content: text });
  saveChatHistory(chatMessages);
  renderChat();
}

function escapeAttr(s) {
  return s.replace(/"/g, "&quot;");
}

function formatMarkdownLite(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n/g, "<br>");
}
