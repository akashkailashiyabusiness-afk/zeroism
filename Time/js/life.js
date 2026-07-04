const MS_DAY = 86_400_000;
const MS_YEAR_AVG = 365.25 * MS_DAY;

const SEASONS_HI = ["वसंत", "ग्रीष्म", "वर्षा", "शरद"];
const WEEKDAYS_HI = ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"];

export function loadProfile() {
  try {
    const raw = localStorage.getItem("timeMachine");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function saveProfile(dob, lifespan) {
  localStorage.setItem(
    "timeMachine",
    JSON.stringify({ dob, lifespan: Number(lifespan) })
  );
}

export function clearProfile() {
  localStorage.removeItem("timeMachine");
}

/** @param {string} dob ISO date YYYY-MM-DD */
export function computeLife(dob, lifespanYears) {
  const birth = startOfDay(new Date(dob + "T12:00:00"));
  const now = new Date();
  const end = new Date(birth);
  end.setFullYear(birth.getFullYear() + lifespanYears);

  const livedMs = Math.max(0, now - birth);
  const totalMs = Math.max(1, end - birth);
  const remainingMs = Math.max(0, end - now);

  const percentLived = Math.min(100, Math.max(0, (livedMs / totalMs) * 100));
  const percentLeft = 100 - percentLived;

  const daysLived = Math.floor(livedMs / MS_DAY);
  const daysTotal = Math.floor(totalMs / MS_DAY);
  const daysLeft = Math.floor(remainingMs / MS_DAY);

  const ageYears = ageInYears(birth, now);
  const ageMonths = ageInMonths(birth, now);
  const lifeYearIndex = Math.min(lifespanYears, Math.floor(ageYears));

  const weekOfYear = getWeekOfYear(now);
  const monthIndex = now.getMonth();
  const dayOfWeek = now.getDay();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const seasonIndex = Math.floor(monthIndex / 3) % 4;

  const weekendsLeft = countWeekendsLeft(now, end);
  const summersLeft = countSummersLeft(now, end);
  const birthdaysLeft = Math.max(0, Math.floor(lifespanYears - ageYears));

  const sleepHoursLeft = Math.round((daysLeft * 8));
  const heartbeatsLeft = Math.round(daysLeft * 100_000);
  const sunrisesLeft = daysLeft;

  const lifeYearsLabels = Array.from({ length: lifespanYears + 1 }, (_, i) =>
    i === 0 ? "0" : String(i)
  );

  return {
    birth,
    now,
    end,
    lifespanYears,
    percentLived,
    percentLeft,
    daysLived,
    daysTotal,
    daysLeft,
    ageYears,
    ageMonths,
    lifeYearIndex,
    weekOfYear,
    monthIndex,
    dayOfWeek,
    hour,
    minute,
    seasonIndex,
    weekendsLeft,
    summersLeft,
    birthdaysLeft,
    sleepHoursLeft,
    heartbeatsLeft,
    sunrisesLeft,
    lifeYearsLabels,
    seasons: SEASONS_HI,
    months: buildMonthNames(),
    weekdays: WEEKDAYS_HI,
    isPastEnd: now >= end,
  };
}

function startOfDay(d) {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}

function ageInYears(birth, now) {
  let y = now.getFullYear() - birth.getFullYear();
  const m = now.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) y--;
  const next = new Date(birth);
  next.setFullYear(birth.getFullYear() + y);
  const frac = (now - next) / (MS_YEAR_AVG);
  return y + frac;
}

function ageInMonths(birth, now) {
  return (now.getFullYear() - birth.getFullYear()) * 12 + (now.getMonth() - birth.getMonth());
}

function getWeekOfYear(date) {
  const start = new Date(date.getFullYear(), 0, 1);
  const diff = date - start;
  return Math.min(51, Math.floor(diff / (7 * MS_DAY)));
}

function countWeekendsLeft(from, end) {
  let count = 0;
  const d = startOfDay(from);
  while (d < end) {
    const day = d.getDay();
    if (day === 0 || day === 6) count++;
    d.setDate(d.getDate() + 1);
  }
  return count;
}

function countSummersLeft(from, end) {
  let count = 0;
  let y = from.getFullYear();
  const endY = end.getFullYear();
  while (y <= endY) {
    const summerStart = new Date(y, 5, 1);
    if (summerStart > from && summerStart < end) count++;
    y++;
  }
  return count;
}

function buildMonthNames() {
  return Array.from({ length: 12 }, (_, i) =>
    new Intl.DateTimeFormat("hi-IN", { month: "short" }).format(new Date(2021, i, 1))
  );
}

export function buildStats(life) {
  const fmt = (n) => n.toLocaleString("hi-IN");

  return [
    {
      value: fmt(life.daysLeft),
      label: "बचे हुए दिन",
      tone: life.percentLived > 70 ? "critical" : life.percentLived > 50 ? "warn" : "",
    },
    {
      value: fmt(life.weekendsLeft),
      label: "बचे हुए शनिवार-रविवार",
      tone: "warn",
    },
    {
      value: fmt(life.summersLeft),
      label: "बची हुई गर्मियाँ",
      tone: "warn",
    },
    {
      value: fmt(life.birthdaysLeft),
      label: "बचे हुए जन्मदिन",
      tone: "",
    },
    {
      value: fmt(life.daysLived),
      label: "जी चुके दिन",
      tone: "",
    },
    {
      value: fmt(life.sunrisesLeft),
      label: "बची हुई सुबहें (सूर्योदय)",
      tone: "",
    },
    {
      value: fmt(life.sleepHoursLeft),
      label: "नींद में बितने वाले घंटे (~8h/दिन)",
      tone: "critical",
    },
    {
      value: formatCompact(life.heartbeatsLeft),
      label: "अनुमानित धड़कनें बाकी",
      tone: "",
    },
    {
      value: life.ageYears.toFixed(1),
      label: "आपकी उम्र (वर्ष)",
      tone: "",
    },
    {
      value: `${life.percentLeft.toFixed(1)}%`,
      label: "जीवन बाकी (अनुमानित)",
      tone: "warn",
    },
  ];
}

function formatCompact(n) {
  if (n >= 1e7) return `${(n / 1e7).toFixed(1)} करोड़`;
  if (n >= 1e5) return `${(n / 1e5).toFixed(1)} लाख`;
  return n.toLocaleString("hi-IN");
}

const WISDOM = [
  "समय पैसा नहीं — समय ही जीवन है। बचा हुआ हर दिन एक अनमोल सिक्का है।",
  "आपके पास अनंत समय नहीं — सिर्फ इतना समय है जितना बचा है। आज को महत्व दें।",
  "हर रविवार एक छोटी छुट्टी है जो वापस नहीं आएगी — जानबूझकर बिताएँ।",
  "नींद भी जीवन खाती है — जागते हुए के घंटे सोच-समझकर चुनें।",
  "मशीन यह नहीं कहती कि कब मरना है — यह याद दिलाती है कि अभी जीना कब है।",
  "जो लोग आपसे प्यार करते हैं, उनके साथ बिताया हर घंटा सबसे सच्चा ROI है।",
];

export function pickWisdom(percentLived) {
  const idx = Math.floor((percentLived / 100) * WISDOM.length) % WISDOM.length;
  return WISDOM[idx];
}

export function introText(life) {
  const age = Math.floor(life.ageYears);
  return `आप ${age} वर्ष के हैं। अनुमानित ${life.lifespanYears} वर्ष की उम्र मानकर, आपने अपने जीवन का लगभग ${life.percentLived.toFixed(1)}% हिस्सा जी लिया है — और लगभग ${formatCompact(life.daysLeft)} दिन आपके सामने (शारीरिक रूप से) हो सकते हैं।`;
}

export function buildResearchInsights() {
  return [
    {
      title: "रिश्ते > पैसा (long-term)",
      finding:
        "Harvard Study of Adult Development: midlife relationship satisfaction old-age health/happiness ka strong predictor nikla.",
      action:
        "Har hafte kam se kam 2 deep conversations schedule karo (phone side par, 30 min).",
      sourceLabel: "Harvard Gazette (2017, 2023)",
      sourceUrl:
        "https://news.harvard.edu/gazette/story/2017/04/over-nearly-80-years-harvard-study-has-been-showing-how-to-live-a-healthy-and-happy-life/",
    },
    {
      title: "Materialism ka hidden cost",
      finding:
        "Meta-analysis (259 samples): materialistic orientation lower well-being se linked hai (r lagbhag -0.16 se -0.19).",
      action:
        "Badi kharid se pehle likho: isse meri health, time, ya relationships me kya real gain hoga?",
      sourceLabel: "JPSP meta-analysis (2014)",
      sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/25347131/",
    },
    {
      title: "Comparison trap real hai",
      finding:
        "Recent meta-analysis: online upward comparison psychological maladjustment se consistently linked (avg r ~ 0.33).",
      action:
        "Roz 20 min no-comparison window rakho: bina social feed ke walk, reading, ya journaling.",
      sourceLabel: "Frontiers meta-analysis (2026)",
      sourceUrl:
        "https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2026.1825169/full",
    },
    {
      title: "Khushi ka social core",
      finding:
        "World Happiness Report me social support (someone to count on) national well-being ka top explanatory factor me se hai.",
      action:
        "Apne '3 emergency people' likho aur mahine me ek baar proactively connect karo.",
      sourceLabel: "World Happiness Report",
      sourceUrl:
        "https://www.worldhappiness.report/ed/2026/international-evidence-on-happiness-and-social-media/",
    },
  ];
}

export function buildFocusPlan(life) {
  const phase =
    life.percentLived < 35 ? "build" : life.percentLived < 65 ? "balance" : "legacy";
  const prompts = getFocusPrompts(phase);
  const useWhatYouHave = buildUseWhatYouHave(life);

  return {
    phase,
    heading:
      phase === "build"
        ? "Build phase: नींव सही बनाओ"
        : phase === "balance"
          ? "Balance phase: सही चीज़ों को prioritize करो"
          : "Legacy phase: impact aur rishton par focus karo",
    prompts,
    useWhatYouHave,
  };
}

function getFocusPrompts(phase) {
  if (phase === "build") {
    return [
      "Skill > show-off: agle 90 din me ek compounding skill चुनो.",
      "Health ko postpone mat karo: 7h sleep + movement non-negotiable rakho.",
      "Dost wahi jahan aapko comparison se zyada growth mile.",
    ];
  }
  if (phase === "balance") {
    return [
      "Calendar audit: kya aapka time aapki values ko reflect karta hai?",
      "Har bade kharche se pehle 'hours cost' nikaalo (kitne kaam ke ghante).",
      "Partner/family ke saath weekly 'no-phone meal' ritual fix karo.",
    ];
  }
  return [
    "Ab ROI ka matlab: kitne log aapse emotionally secure feel karte hain.",
    "Possessions simplify karo; relationships deepen karo.",
    "Experience, mentorship aur legacy projects par intentional time lagao.",
  ];
}

function buildUseWhatYouHave(life) {
  const wakingHoursLeft = Math.max(0, life.daysLeft * 16);
  return [
    {
      label: "जो आपके पास अभी है",
      detail: "समय + ध्यान + शरीर + 1 भरोसेमंद रिश्ता = enough to start.",
    },
    {
      label: "आज का minimum focus",
      detail: "60 min deep work, 30 min movement, 20 min relationship, 10 min reflection.",
    },
    {
      label: "ध्यान रखने लायक याद",
      detail: `आपके पास लगभग ${formatCompact(wakingHoursLeft)} जागते हुए घंटे बचे हो सकते हैं — unhe default pe mat chhodo.`,
    },
  ];
}
