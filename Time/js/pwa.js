const INSTALL_DISMISS_KEY = "timeMachineInstallDismissed";
const UPDATE_DISMISS_KEY = "timeMachineUpdateDismissed";

let deferredInstallPrompt = null;

export function initPwa() {
  registerServiceWorker();
  setupInstallBanner();
  setupUpdateBanner();
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;

  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./sw.js", { scope: "./" })
      .then((reg) => {
        reg.addEventListener("updatefound", () => {
          const worker = reg.installing;
          if (!worker) return;
          worker.addEventListener("statechange", () => {
            if (worker.state === "installed" && navigator.serviceWorker.controller) {
              showUpdateBanner();
            }
          });
        });
      })
      .catch(() => {});
  });
}

function setupInstallBanner() {
  const banner = document.getElementById("install-banner");
  const btnInstall = document.getElementById("btn-install");
  const btnDismiss = document.getElementById("btn-install-dismiss");

  if (!banner || !btnInstall) return;

  if (localStorage.getItem(INSTALL_DISMISS_KEY) === "1") return;
  if (window.matchMedia("(display-mode: standalone)").matches) return;

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    banner.hidden = false;
  });

  btnInstall.addEventListener("click", async () => {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    banner.hidden = true;
  });

  btnDismiss?.addEventListener("click", () => {
    localStorage.setItem(INSTALL_DISMISS_KEY, "1");
    banner.hidden = true;
  });

  window.addEventListener("appinstalled", () => {
    banner.hidden = true;
    deferredInstallPrompt = null;
  });
}

function setupUpdateBanner() {
  const banner = document.getElementById("update-banner");
  const btnReload = document.getElementById("btn-reload");
  const btnLater = document.getElementById("btn-update-later");

  btnReload?.addEventListener("click", () => {
    navigator.serviceWorker.getRegistration().then((reg) => {
      reg?.waiting?.postMessage({ type: "SKIP_WAITING" });
      window.location.reload();
    });
  });

  btnLater?.addEventListener("click", () => {
    localStorage.setItem(UPDATE_DISMISS_KEY, "1");
    if (banner) banner.hidden = true;
  });
}

function showUpdateBanner() {
  if (localStorage.getItem(UPDATE_DISMISS_KEY) === "1") return;
  const banner = document.getElementById("update-banner");
  if (banner) banner.hidden = false;
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.addEventListener("message", (event) => {
    if (event.data?.type === "RELOAD") window.location.reload();
  });
}
