const API_KEY_STORAGE = "timeMachineNvidiaKey";
const PROXY_URL_STORAGE = "timeMachineProxyUrl";
const CHAT_HISTORY_KEY = "timeMachineChatHistory";
const NVIDIA_URL = "https://integrate.api.nvidia.com/v1/chat/completions";
const DEFAULT_MODEL = "meta/llama-3.1-8b-instruct";
const DEFAULT_PROXY = "http://localhost:8787/api/chat";

export function loadApiKey() {
  return localStorage.getItem(API_KEY_STORAGE) || "";
}

export function saveApiKey(key) {
  const trimmed = key.trim();
  if (trimmed) localStorage.setItem(API_KEY_STORAGE, trimmed);
  else localStorage.removeItem(API_KEY_STORAGE);
  return trimmed;
}

export function loadProxyUrl() {
  return localStorage.getItem(PROXY_URL_STORAGE) || DEFAULT_PROXY;
}

export function saveProxyUrl(url) {
  const trimmed = url.trim() || DEFAULT_PROXY;
  localStorage.setItem(PROXY_URL_STORAGE, trimmed);
  return trimmed;
}

export function loadChatHistory() {
  try {
    const raw = localStorage.getItem(CHAT_HISTORY_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveChatHistory(messages) {
  const trimmed = messages.slice(-20);
  localStorage.setItem(CHAT_HISTORY_KEY, JSON.stringify(trimmed));
  return trimmed;
}

export function clearChatHistory() {
  localStorage.removeItem(CHAT_HISTORY_KEY);
}

/**
 * Chat via local proxy (recommended) or direct NVIDIA (may fail CORS).
 */
export async function sendChat({ messages, apiKey, proxyUrl, model = DEFAULT_MODEL }) {
  const key = apiKey || loadApiKey();
  if (!key) {
    throw new Error("API key missing — Settings mein NVIDIA key daalo (build.nvidia.com).");
  }

  const payload = {
    model,
    messages,
    temperature: 0.45,
    max_tokens: 900,
  };

  const proxy = proxyUrl || loadProxyUrl();

  try {
    const viaProxy = await fetch(proxy, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, apiKey: key }),
    });
    if (viaProxy.ok) {
      const data = await viaProxy.json();
      return extractReply(data);
    }
    const errText = await viaProxy.text();
    throw new Error(parseApiError(errText) || `Proxy error ${viaProxy.status}`);
  } catch (proxyErr) {
    try {
      const direct = await fetch(NVIDIA_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${key}`,
        },
        body: JSON.stringify(payload),
      });
      if (!direct.ok) {
        const t = await direct.text();
        throw new Error(parseApiError(t) || `NVIDIA API ${direct.status}`);
      }
      return extractReply(await direct.json());
    } catch {
      throw new Error(
        `${proxyErr.message}. Local proxy chalao: npm run proxy (port 8787)`
      );
    }
  }
}

function extractReply(data) {
  const content = data?.choices?.[0]?.message?.content;
  if (!content) throw new Error(data?.error?.message || "Empty AI response");
  return content.trim();
}

function parseApiError(text) {
  try {
    const j = JSON.parse(text);
    return j.error?.message || j.error || j.detail;
  } catch {
    return text?.slice(0, 200);
  }
}
