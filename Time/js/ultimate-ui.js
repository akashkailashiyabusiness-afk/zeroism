import {
  CORE_THESIS,
  FORMULA,
  PILLARS,
  FORGOTTEN_TRUTHS,
  FAKE_VS_REAL,
  FREEDOM_AUDIT,
  WEEKLY_CHECKS,
  evaluateValueGap,
  buildUltimateInsights,
  loadWeeklyAudit,
  saveWeeklyAudit,
  loadFreedomAnswers,
  saveFreedomAnswers,
  scoreFreedom,
  loadValueGap,
  saveValueGap,
  computeUltimateScore,
} from "./ultimate-value.js";
import { PARADOX_INTRO, LIFE_PARADOXES, getDailyParadox } from "./life-paradoxes.js";

let refreshUltimateScore = () => {};

export function renderUltimateValue(root, life) {
  if (!root) return;

  root.innerHTML = `
    <section class="ultimate-hero">
      <p class="ultimate-eyebrow">Ultimate Value</p>
      <h2>${CORE_THESIS.headline}</h2>
      <p class="ultimate-formula">${CORE_THESIS.formula}</p>
      <p class="ultimate-rule">${CORE_THESIS.rule}</p>
      <p class="ultimate-formula-final"><strong>→</strong> ${FORMULA}</p>
    </section>

    <section class="ultimate-score-panel" id="ultimate-score-panel" aria-live="polite">
      <div class="ultimate-score-ring">
        <svg viewBox="0 0 120 120" class="ultimate-score-svg" aria-hidden="true">
          <circle class="ultimate-score-bg" cx="60" cy="60" r="52" />
          <circle class="ultimate-score-fill" id="ultimate-score-arc" cx="60" cy="60" r="52" />
        </svg>
        <div class="ultimate-score-center">
          <span class="ultimate-score-num" id="ultimate-score-num">—</span>
          <span class="ultimate-score-label">Ultimate Score</span>
        </div>
      </div>
      <p class="ultimate-score-headline" id="ultimate-score-headline"></p>
      <p class="ultimate-score-action" id="ultimate-score-action"></p>
      <ul class="ultimate-breakdown" id="ultimate-breakdown"></ul>
    </section>

    <section class="value-gap-tool" id="value-gap-tool">
      <h3>Value Gap — Real ya Fake?</h3>
      <p class="section-hint">Koi bhi badi kharid / decision test karo (bike, EMI, job, rishta…)</p>
      <label class="gap-field">
        <span>Production — yeh kya deta hai? (time, peace, skill, trust, freedom)</span>
        <input type="range" id="gap-production" min="1" max="10" value="5" />
        <output id="gap-production-out">5</output>
      </label>
      <label class="gap-field">
        <span>Cost — yeh kya leta hai? (paisa, time, stress, options band)</span>
        <input type="range" id="gap-cost" min="1" max="10" value="5" />
        <output id="gap-cost-out">5</output>
      </label>
      <div class="gap-result" id="gap-result"></div>
    </section>

    <section class="paradox-section" id="paradox-section">
      <h3>${PARADOX_INTRO.title}</h3>
      <p class="section-hint">${PARADOX_INTRO.subtitle}</p>
      <article class="paradox-daily" id="paradox-daily"></article>
      <details class="paradox-all">
        <summary>Saare ${LIFE_PARADOXES.length} paradox dekho</summary>
        <div class="paradox-grid" id="paradox-grid"></div>
      </details>
    </section>

    <section class="pillars-section">
      <h3>6 Ultimate Value Pillars</h3>
      <div class="pillars-grid" id="pillars-grid"></div>
    </section>

    <section class="forgotten-section">
      <h3>Jo hum bhool jaate hain</h3>
      <ul class="forgotten-list" id="forgotten-list"></ul>
    </section>

    <section class="fake-real-section">
      <h3>Fake vs Real — side by side</h3>
      <div class="fake-real-table" id="fake-real-table"></div>
    </section>

    <section class="freedom-audit" id="freedom-audit">
      <h3>Freedom Audit — kitne options khule hain?</h3>
      <p class="section-hint">Honest answers — sirf aapke liye, local save.</p>
      <form id="freedom-form" class="freedom-form"></form>
      <p class="freedom-score" id="freedom-score" hidden></p>
    </section>

    <section class="weekly-audit">
      <h3>Is hafte ka Ultimate check</h3>
      <form id="weekly-form" class="weekly-form"></form>
    </section>

    <section class="life-bridge">
      <h3>Aapke time ke saath</h3>
      <p id="life-bridge-text"></p>
    </section>
  `;

  refreshUltimateScore = renderUltimateScorePanel;

  bindValueGap();
  renderParadoxes();
  renderPillars();
  renderForgotten();
  renderFakeReal();
  bindFreedomAudit();
  bindWeeklyAudit();
  renderLifeBridge(life);
  renderUltimateScorePanel();
}

const SCORE_CIRC = 2 * Math.PI * 52;

function renderUltimateScorePanel() {
  const panel = document.getElementById("ultimate-score-panel");
  if (!panel) return;

  const prodEl = document.getElementById("gap-production");
  const costEl = document.getElementById("gap-cost");
  const saved = loadValueGap();
  const production = prodEl ? Number(prodEl.value) : saved.production;
  const cost = costEl ? Number(costEl.value) : saved.cost;

  const result = computeUltimateScore({ production, cost });

  const numEl = document.getElementById("ultimate-score-num");
  const headlineEl = document.getElementById("ultimate-score-headline");
  const actionEl = document.getElementById("ultimate-score-action");
  const breakdownEl = document.getElementById("ultimate-breakdown");
  const arcEl = document.getElementById("ultimate-score-arc");

  if (numEl) numEl.textContent = String(result.total);
  if (headlineEl) {
    headlineEl.textContent = result.headline;
    headlineEl.className = `ultimate-score-headline ultimate-score-headline--${result.band}`;
  }
  if (actionEl) actionEl.textContent = result.action;

  if (arcEl) {
    const offset = SCORE_CIRC * (1 - result.total / 100);
    arcEl.style.strokeDasharray = `${SCORE_CIRC}`;
    arcEl.style.strokeDashoffset = String(offset);
    arcEl.setAttribute("class", `ultimate-score-fill ultimate-score-fill--${result.band}`);
  }
  panel.className = `ultimate-score-panel ultimate-score-panel--${result.band}`;

  if (breakdownEl) {
    breakdownEl.innerHTML = result.breakdown
      .map(
        (b) => `
      <li class="ultimate-breakdown__item">
        <div class="ultimate-breakdown__row">
          <span>${b.label}</span>
          <strong>${b.score}</strong>
        </div>
        <div class="ultimate-breakdown__track" role="presentation">
          <div class="ultimate-breakdown__bar" style="width:${b.score}%"></div>
        </div>
        <span class="ultimate-breakdown__detail">${b.detail} · weight ${Math.round(b.weight * 100)}%</span>
      </li>`
      )
      .join("");
  }
}

function bindValueGap() {
  const prod = document.getElementById("gap-production");
  const cost = document.getElementById("gap-cost");
  const prodOut = document.getElementById("gap-production-out");
  const costOut = document.getElementById("gap-cost-out");
  const result = document.getElementById("gap-result");
  const saved = loadValueGap();
  prod.value = String(saved.production);
  cost.value = String(saved.cost);

  function update() {
    const p = Number(prod.value);
    const c = Number(cost.value);
    prodOut.textContent = p;
    costOut.textContent = c;
    saveValueGap(p, c);
    const ev = evaluateValueGap(p, c);
    result.className = `gap-result gap-result--${ev.verdict}`;
    result.innerHTML = `
      <p class="gap-result__title">${ev.title} <span>(gap: ${ev.gap > 0 ? "+" : ""}${ev.gap})</span></p>
      <p>${ev.message}</p>`;
    refreshUltimateScore();
  }

  prod.addEventListener("input", update);
  cost.addEventListener("input", update);
  update();
}

function renderParadoxes() {
  const daily = getDailyParadox();
  const dailyEl = document.getElementById("paradox-daily");
  if (dailyEl) {
    dailyEl.innerHTML = paradoxCardHtml(daily, true);
  }

  const grid = document.getElementById("paradox-grid");
  if (grid) {
    grid.innerHTML = LIFE_PARADOXES.map((p) => paradoxCardHtml(p, false)).join("");
  }
}

function paradoxCardHtml(p, isDaily) {
  return `
    <div class="paradox-card ${isDaily ? "paradox-card--daily" : ""}" data-id="${p.id}">
      ${isDaily ? '<span class="paradox-badge">आज का paradox</span>' : ""}
      <header>
        <span class="paradox-icon">${p.icon}</span>
        <div>
          <h4>${p.nameHi}</h4>
          <p class="paradox-en">${p.name}</p>
        </div>
      </header>
      <p class="paradox-line"><strong>Paradox:</strong> ${p.paradox}</p>
      <p class="paradox-line"><strong>Sach:</strong> ${p.truth}</p>
      <p class="paradox-question">💭 ${p.question}</p>
      <p class="paradox-action"><strong>Aaj:</strong> ${p.action}</p>
      <span class="paradox-tie">→ ${p.tie}</span>
    </div>`;
}

function renderPillars() {
  const grid = document.getElementById("pillars-grid");
  grid.innerHTML = PILLARS.map(
    (p) => `
    <article class="pillar-card" data-pillar="${p.id}">
      <header>
        <span class="pillar-icon">${p.icon}</span>
        <div>
          <h4>${p.title}</h4>
          <p class="pillar-sub">${p.subtitle}</p>
        </div>
      </header>
      <p>${p.insight}</p>
      <p class="pillar-forgot"><strong>Bhoolte hain:</strong> ${p.forgotten}</p>
      <p class="pillar-action"><strong>Aaj:</strong> ${p.action}</p>
      <p class="pillar-research"><strong>Research:</strong> ${p.research}</p>
      <a href="${p.sourceUrl}" target="_blank" rel="noopener noreferrer">${p.sourceLabel} ↗</a>
    </article>`
  ).join("");
}

function renderForgotten() {
  const list = document.getElementById("forgotten-list");
  list.innerHTML = FORGOTTEN_TRUTHS.map(
    (t) => `<li><span class="forgotten-anchor">${t.anchor}</span> ${t.truth}</li>`
  ).join("");
}

function renderFakeReal() {
  const table = document.getElementById("fake-real-table");
  table.innerHTML = FAKE_VS_REAL.map(
    (row) => `
    <div class="fake-real-row">
      <span class="fake">✗ ${row.fake}</span>
      <span class="real">✓ ${row.real}</span>
    </div>`
  ).join("");
}

function bindFreedomAudit() {
  const form = document.getElementById("freedom-form");
  const scoreEl = document.getElementById("freedom-score");
  let answers = loadFreedomAnswers();

  form.innerHTML = FREEDOM_AUDIT.map(
    (item) => `
    <label class="audit-check">
      <input type="checkbox" name="${item.id}" ${answers[item.id] ? "checked" : ""} />
      <span>${item.q}</span>
    </label>`
  ).join("");

  function refresh() {
    answers = {};
    form.querySelectorAll("input[type=checkbox]").forEach((cb) => {
      answers[cb.name] = cb.checked;
    });
    saveFreedomAnswers(answers);
    const s = scoreFreedom(answers);
    scoreEl.hidden = false;
    scoreEl.className = `freedom-score freedom-score--${s.band}`;
    scoreEl.innerHTML = `<strong>${s.yes}/${s.total}</strong> options open (${s.pct}%) — ${s.message}`;
    refreshUltimateScore();
  }

  form.addEventListener("change", refresh);
  refresh();
}

function bindWeeklyAudit() {
  const form = document.getElementById("weekly-form");
  let data = loadWeeklyAudit();

  form.innerHTML = WEEKLY_CHECKS.map(
    (c) => `
    <label class="audit-check">
      <input type="checkbox" name="${c.id}" ${data[c.id] ? "checked" : ""} />
      <span>${c.label}</span>
    </label>`
  ).join("");

  form.addEventListener("change", () => {
    const next = {};
    form.querySelectorAll("input[type=checkbox]").forEach((cb) => {
      next[cb.name] = cb.checked;
    });
    saveWeeklyAudit(next);
    refreshUltimateScore();
  });
}

function renderLifeBridge(life) {
  const el = document.getElementById("life-bridge-text");
  if (!el || !life) return;
  const weekends = life.weekendsLeft.toLocaleString("hi-IN");
  el.textContent = `Aapke paas lagbhag ${weekends} weekends bache ho sakte hain. Har weekend ek choice hai: status chase karo ya trust/skill/relationship compound karo. Ultimate value = un weekends ko freedom banane mein invest karna.`;
}

export function mergeInsightsWithUltimate(baseInsights) {
  return [...buildUltimateInsights(), ...baseInsights];
}

/** Update score ring only (no full DOM rebuild). */
export { renderUltimateScorePanel };
