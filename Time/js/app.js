import {
  loadProfile,
  saveProfile,
  clearProfile,
  computeLife,
  buildStats,
  pickWisdom,
  introText,
  buildResearchInsights,
  buildFocusPlan,
} from "./life.js";
import { drawClockFaces, startWheelAnimation } from "./wheel.js";
import { initPwa } from "./pwa.js";
import {
  renderUltimateValue,
  mergeInsightsWithUltimate,
  renderUltimateScorePanel,
} from "./ultimate-ui.js";
import { renderAiGuide, initAiGuide } from "./ai-guide-ui.js";

const $ = (sel) => document.querySelector(sel);

const dobInput = $("#dob");
const lifespanInput = $("#lifespan");
const lifespanOut = $("#lifespan-out");
const btnStart = $("#btn-start");
const btnEdit = $("#btn-edit");
const setupPanel = $(".setup");
const machine = $("#machine");
const statsPanel = $("#stats-panel");
const compassPanel = $("#compass-panel");
const ultimatePanel = $("#ultimate-panel");
const aiPanel = $("#ai-panel");
const lifeFill = $("#life-fill");
const lifePercent = $("#life-percent");
const centerAge = $("#center-age");
const centerBtn = $("#center-btn");
const statGrid = $("#stat-grid");
const statsIntro = $("#stats-intro");
const wisdomEl = $("#wisdom");
const researchList = $("#research-list");
const focusHeading = $("#focus-heading");
const focusPrompts = $("#focus-prompts");
const useWhatYouHave = $("#use-what-you-have");

let profile = null;
let animationStarted = false;
let deepPanelsReady = false;

const maxDob = new Date();
maxDob.setFullYear(maxDob.getFullYear() - 5);
dobInput.max = formatDateInput(maxDob);
dobInput.min = "1920-01-01";

lifespanInput.addEventListener("input", () => {
  lifespanOut.textContent = lifespanInput.value;
});

btnStart.addEventListener("click", () => {
  const dob = dobInput.value;
  if (!dob) {
    dobInput.focus();
    return;
  }
  const lifespan = Number(lifespanInput.value);
  saveProfile(dob, lifespan);
  profile = { dob, lifespan };
  enterMachine();
});

btnEdit.addEventListener("click", () => {
  clearProfile();
  profile = null;
  animationStarted = false;
  deepPanelsReady = false;
  setupPanel.classList.remove("hidden");
  machine.classList.add("hidden");
  statsPanel.classList.add("hidden");
  compassPanel.classList.add("hidden");
  ultimatePanel.classList.add("hidden");
  aiPanel.classList.add("hidden");
});

centerBtn.addEventListener("click", () => btnEdit.click());

function formatDateInput(d) {
  return d.toISOString().slice(0, 10);
}

function getLife() {
  return computeLife(profile.dob, profile.lifespan);
}

function enterMachine() {
  setupPanel.classList.add("hidden");
  machine.classList.remove("hidden");
  statsPanel.classList.remove("hidden");
  compassPanel.classList.remove("hidden");
  ultimatePanel.classList.remove("hidden");
  aiPanel.classList.remove("hidden");

  updateLifeYearsRing();
  render();

  if (!animationStarted) {
    animationStarted = true;
    startWheelAnimation(getLife);
  }
}

function updateLifeYearsRing() {
  const life = getLife();
  const ring = document.querySelector('[data-clock="life-years"]');
  if (ring) {
    ring.setAttribute("data-numbers", String(life.lifespanYears + 1));
  }
}

function render() {
  const life = getLife();

  lifeFill.style.width = `${life.percentLived}%`;
  lifeFill.parentElement.setAttribute("aria-valuenow", String(Math.round(life.percentLived)));
  lifePercent.textContent = life.percentLived.toFixed(1);
  centerAge.textContent = Math.floor(life.ageYears);

  drawClockFaces(life);

  statsIntro.textContent = introText(life);
  wisdomEl.textContent = pickWisdom(life.percentLived);

  statGrid.innerHTML = buildStats(life)
    .map(
      (s) => `
    <li class="stat-card">
      <span class="value ${s.tone}">${s.value}</span>
      <span class="label">${s.label}</span>
    </li>`
    )
    .join("");

  if (life.isPastEnd) {
    wisdomEl.textContent =
      "अनुमानित आयु पार हो चुकी है — हर नया दिन एक उपहार है। इसे जानबूझकर जिएँ।";
  }

  if (!deepPanelsReady) {
    renderCompass(life);
    deepPanelsReady = true;
  } else {
    renderUltimateScorePanel();
  }
}

function renderCompass(life) {
  const insights = mergeInsightsWithUltimate(buildResearchInsights());
  researchList.innerHTML = insights
    .map(
      (item) => `
    <article class="research-card">
      <h3>${item.title}</h3>
      <p><strong>Research:</strong> ${item.finding}</p>
      <p><strong>Focus:</strong> ${item.action}</p>
      <a href="${item.sourceUrl}" target="_blank" rel="noopener noreferrer">${item.sourceLabel}</a>
    </article>`
    )
    .join("");

  const plan = buildFocusPlan(life);
  focusHeading.textContent = plan.heading;
  focusPrompts.innerHTML = plan.prompts.map((p) => `<li>${p}</li>`).join("");
  useWhatYouHave.innerHTML = plan.useWhatYouHave
    .map((item) => `<li><strong>${item.label}:</strong> ${item.detail}</li>`)
    .join("");

  renderUltimateValue(ultimatePanel, life);
  if (!document.getElementById("ai-form")) {
    renderAiGuide(aiPanel);
    initAiGuide(() => ({ life: profile ? getLife() : null }));
  }
}

function init() {
  profile = loadProfile();
  if (profile) {
    dobInput.value = profile.dob;
    lifespanInput.value = profile.lifespan;
    lifespanOut.textContent = profile.lifespan;
    enterMachine();
  } else {
    const defaultDob = new Date();
    defaultDob.setFullYear(defaultDob.getFullYear() - 25);
    dobInput.value = formatDateInput(defaultDob);
  }

  setInterval(() => {
    if (profile) render();
  }, 30_000);
}

initPwa();
init();
