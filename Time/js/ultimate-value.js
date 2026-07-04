/**
 * Ultimate Value — project core (from Real Value framework + research).
 * Value = production − cost. Fake value closes options; real value compounds freedom.
 */

export const FORMULA =
  "Judgment + Compounding + Trust + Distribution + Optionality → FREEDOM";

export const CORE_THESIS = {
  headline: "Real value kisi object mein nahi — Gap mein hoti hai.",
  formula: "Value = Jo cheez produce karti hai − Jo cheez cost karti hai",
  rule:
    "Cost > production → illusion. Production >> cost → real value. Sab kuch FREEDOM ki taraf point karta hai.",
};

export const PILLARS = [
  {
    id: "judgment",
    icon: "🧠",
    title: "Judgment",
    subtitle: "Sabse underpriced asset",
    insight:
      "Information almost free hai. Scarce hai: sahi cheez ko sahi waqt par apply karna. Doctor vs compounder — fark judgment ka hai.",
    forgotten: "Log courses kharidte hain, decision practice nahi karte.",
    action: "Har bade decision se pehle: 'Agar yeh galat ho to kya hoga?' likho.",
    research:
      "Kahneman: attention/scarcity of good decisions limits outcomes more than raw information.",
    sourceLabel: "Thinking, Fast and Slow (summary)",
    sourceUrl: "https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow",
  },
  {
    id: "time",
    icon: "⏳",
    title: "Time",
    subtitle: "Jo wapas nahi aata",
    insight:
      "Paisa, reputation, health — kuch had tak recover. Time gone = gone. Real value wahan jahan time multiply hota hai, consume nahi.",
    forgotten: "Hum time ko 'baad mein' rakhte hain; baad kabhi guaranteed nahi.",
    action: "Aaj 1 ghanta sirf multiplied time par: skill, system, ya deep relationship.",
    research:
      "Harvard Study: relationship time midlife par old-age health se zyada correlate karta tha vs cholesterol.",
    sourceLabel: "Harvard Study (Gazette)",
    sourceUrl:
      "https://news.harvard.edu/gazette/story/2017/04/over-nearly-80-years-harvard-study-has-been-showing-how-to-live-a-healthy-and-happy-life/",
  },
  {
    id: "trust",
    icon: "🔗",
    title: "Trust",
    subtitle: "Saalon mein banti hai",
    insight:
      "Ek genuine recommendation > hazaar stranger reviews. Influencer product nahi bechte — accumulated trust redeem karte hain.",
    forgotten: "Trust fast tod sakte ho, slow rebuild hoti hai — har chhoti jhooth is inventory ko kaat ti hai.",
    action: "Is hafte 1 log ko bina agenda ke suno — trust deposit karo.",
    research:
      "World Happiness Report: 'someone to count on' well-being ka core driver.",
    sourceLabel: "World Happiness Report",
    sourceUrl: "https://www.worldhappiness.report/",
  },
  {
    id: "distribution",
    icon: "📡",
    title: "Distribution / Reach",
    subtitle: "Jahan log hain, wahan power hai",
    insight:
      "Mediocre product + great distribution > great product + zero reach. Reach = kitne log aap par depend karte hain ethically.",
    forgotten: "Sirf banana kaafi nahi — value tab unlock hoti hai jab sahi log tak pahunche.",
    action: "Apna 'inner 5' define karo — jin tak aapka kaam/vichar honestly pahunchta ho.",
    research:
      "Experiential + social spending enduring satisfaction deti hai vs material (Gilovich line of research).",
    sourceLabel: "Experience vs material (review)",
    sourceUrl: "https://link.springer.com/article/10.1007/s11482-026-10560-3",
  },
  {
    id: "compounding",
    icon: "🔄",
    title: "Compounding",
    subtitle: "Jo ruka nahi",
    insight:
      "Skills, reputation, relationships, content — compound karte hain. Jo sirf ek transaction hai, real value nahi.",
    forgotten: "Linear soch: 'mehnat = output'. Compounding soch: 'aaj ka kaam kal ka multiplier'.",
    action: "Ek cheez chuno jo 5 saal baad bhi kaam aaye — us par 30 min daily.",
    research:
      "Hedonic treadmill: material purchases jaldi adapt ho jati hain; skills/relationships slower fade.",
    sourceLabel: "Hedonic adaptation",
    sourceUrl: "https://www.verywellmind.com/hedonic-adaptation-4156926",
  },
  {
    id: "optionality",
    icon: "🎯",
    title: "Optionality",
    subtitle: "Freedom to choose",
    insight:
      "EMI, toxic job, single-client dependency — har ek option band karta hai. Sabse ameer = sabse zyada real choices.",
    forgotten: "Luxury kabhi freedom bech deti hai — bike/car ke liye 3 saal ki choices mortgage ho sakti hain.",
    action: "List karo: kaunse 2 options is mahine band ho rahe hain? Ek ko jaan-bujh kar mat band karo.",
    research:
      "Materialism meta-analyses: status chase often need satisfaction kam karti hai.",
    sourceLabel: "Materialism meta-analysis",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/25347131/",
  },
];

export const FORGOTTEN_TRUTHS = [
  {
    truth: "Cheez khush nahi rakhti — adaptation brain ko wapas baseline par le aata hai.",
    anchor: "Hedonic treadmill",
  },
  {
    truth: "Log kya kahenge — invisible tax hai jo saal bhar overtime kharidta hai.",
    anchor: "Social comparison",
  },
  {
    truth: "Marketing insecurity bechti hai, clarity nahi.",
    anchor: "Consumer psychology",
  },
  {
    truth: "Bada ghar chhota parivar ≠ zyada khushi; time + trust matter karte hain.",
    anchor: "Harvard relationships",
  },
  {
    truth: "Elite log status nahi — energy, boundaries, aur options ki value karte hain.",
    anchor: "Optionality",
  },
  {
    truth: "Jo compound nahi karta, woh transaction hai — transaction se legacy nahi banti.",
    anchor: "Compounding",
  },
  {
    truth: "Aapke paas already enough hai start karne ke liye: 1 din + 1 choice + 1 insan.",
    anchor: "Use what you have",
  },
];

export const FAKE_VS_REAL = [
  { fake: "Dikhawa / status", real: "Peace, health, time with right people" },
  { fake: "Zyada samaan", real: "Kam lekin zyada use + zero clutter stress" },
  { fake: "Log impress honge", real: "Tum khud se proud ho" },
  { fake: "EMI se abhi enjoy", real: "Options khule rehna" },
  { fake: "Scroll karke 'informed' feel", real: "Deep work / deep talk" },
  { fake: "Saara saal grind → 1 badi cheez", real: "Chhote weekly joys + compounding" },
];

export const FREEDOM_AUDIT = [
  {
    id: "choice_work",
    q: "Kya main aaj kaam chhod sakta hoon bina survival fear ke? (ideal: haan options hain)",
  },
  {
    id: "choice_location",
    q: "Kya main 6 mahine mein city/lifestyle change kar sakta hoon agar chahoon?",
  },
  {
    id: "choice_people",
    q: "Kya main toxic log se door rehne ki choice rakhta hoon?",
  },
  {
    id: "choice_time",
    q: "Kya mere paas hafte mein 5+ ghante purely meri marzi ke hain?",
  },
  {
    id: "choice_debt",
    q: "Kya meri EMIs/loans meri zindagi chala rahe hain ya main unhe?",
  },
];

export function evaluateValueGap(production, cost) {
  const gap = production - cost;
  if (gap >= 4) {
    return {
      gap,
      verdict: "real",
      title: "Real Value zone",
      message:
        "Yeh cheez/decision zyada produce karti hai jaisa cost leti hai. Time, trust, ya freedom badh rahi hai.",
      color: "life",
    };
  }
  if (gap >= 0) {
    return {
      gap,
      verdict: "neutral",
      title: "Neutral — socho dobara",
      message:
        "Thoda positive hai, par life-changing nahi. Kya yahi paisa/time compounding asset par jaye?",
      color: "warn",
    };
  }
  return {
    gap,
    verdict: "fake",
    title: "Fake Value trap",
    message:
      "Cost production se zyada lag rahi hai. Shayad aap freedom/status/peace bech rahe ho — sirf object kharid rahe ho.",
    color: "critical",
  };
}

export function buildUltimateInsights() {
  return [
    {
      category: "Ultimate",
      title: "Value Gap formula",
      finding: CORE_THESIS.formula + " — objects nahi, outcomes matter.",
      action: "Neeche Value Gap tool use karo har badi kharid par.",
      sourceLabel: "Real Value framework",
      sourceUrl: "#value-gap-tool",
    },
    {
      category: "Science",
      title: "Experiences > things",
      finding:
        "Experiential purchases material se zyada lasting happiness deti hain — slower hedonic adaptation.",
      action: "Reward ke liye cheez nahi — trip, skill, ya shared moment plan karo.",
      sourceLabel: "Van Boven & Gilovich line",
      sourceUrl: "https://link.springer.com/article/10.1007/s11482-026-10560-3",
    },
    {
      category: "Science",
      title: "Materialism tax",
      finding: "259 samples meta-analysis: materialistic goals lower well-being (r ≈ −0.16 to −0.19).",
      action: "Har kharch par likho: intrinsic (growth/love) ya extrinsic (status/show)?",
      sourceLabel: "JPSP (2014)",
      sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/25347131/",
    },
    {
      category: "Science",
      title: "Comparison spiral",
      finding: "Online upward comparison maladjustment se linked (meta r ≈ 0.33).",
      action: "Feed off = default. Curated success = poison for enough.",
      sourceLabel: "Frontiers (2026)",
      sourceUrl:
        "https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2026.1825169/full",
    },
    {
      category: "Ultimate",
      title: "Freedom > display wealth",
      finding: FORMULA,
      action: "Monthly: kaunsi 1 EMI/obligation option band kar rahi hai? Ek kam karo.",
      sourceLabel: "Project thesis",
      sourceUrl: "#freedom-audit",
    },
  ];
}

const AUDIT_KEY = "timeMachineWeeklyAudit";
const FREEDOM_KEY = "timeMachineFreedomAudit";
const GAP_KEY = "timeMachineValueGap";

/** Weights for combined Ultimate Score (must sum to 1). */
export const ULTIMATE_WEIGHTS = {
  valueGap: 0.35,
  freedom: 0.35,
  weekly: 0.3,
};

export function loadValueGap() {
  try {
    const raw = localStorage.getItem(GAP_KEY);
    if (!raw) return { production: 5, cost: 5 };
    const parsed = JSON.parse(raw);
    return {
      production: clamp(Number(parsed.production) || 5, 1, 10),
      cost: clamp(Number(parsed.cost) || 5, 1, 10),
    };
  } catch {
    return { production: 5, cost: 5 };
  }
}

export function saveValueGap(production, cost) {
  localStorage.setItem(
    GAP_KEY,
    JSON.stringify({ production, cost, updatedAt: Date.now() })
  );
}

function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n));
}

/** Map production−cost (−9…+9) to 0–100. */
export function scoreValueGap(production, cost) {
  const gap = production - cost;
  const linear = 50 + gap * (50 / 9);
  return Math.round(clamp(linear, 0, 100));
}

export function scoreWeekly(weeklyData) {
  const keys = WEEKLY_CHECKS.map((c) => c.id);
  const done = keys.filter((k) => weeklyData[k] === true).length;
  const total = keys.length;
  return {
    done,
    total,
    pct: total ? Math.round((done / total) * 100) : 0,
  };
}

/**
 * Combined Ultimate Score 0–100 from Value Gap, Freedom Audit, Weekly checks.
 */
export function computeUltimateScore(input = {}) {
  const gap = loadValueGap();
  const production = input.production ?? gap.production;
  const cost = input.cost ?? gap.cost;
  const freedomAnswers = input.freedomAnswers ?? loadFreedomAnswers();
  const weeklyData = input.weeklyData ?? loadWeeklyAudit();

  const gapScore = scoreValueGap(production, cost);
  const freedom = scoreFreedom(freedomAnswers);
  const weekly = scoreWeekly(weeklyData);

  const total = Math.round(
    gapScore * ULTIMATE_WEIGHTS.valueGap +
      freedom.pct * ULTIMATE_WEIGHTS.freedom +
      weekly.pct * ULTIMATE_WEIGHTS.weekly
  );

  const breakdown = [
    {
      id: "valueGap",
      label: "Value Gap",
      score: gapScore,
      weight: ULTIMATE_WEIGHTS.valueGap,
      detail: `Production ${production} − Cost ${cost} = gap ${production - cost}`,
    },
    {
      id: "freedom",
      label: "Freedom Audit",
      score: freedom.pct,
      weight: ULTIMATE_WEIGHTS.freedom,
      detail: `${freedom.yes}/${freedom.total} options khule`,
    },
    {
      id: "weekly",
      label: "Weekly checks",
      score: weekly.pct,
      weight: ULTIMATE_WEIGHTS.weekly,
      detail: `${weekly.done}/${weekly.total} is hafte complete`,
    },
  ];

  const sorted = [...breakdown].sort((a, b) => a.score - b.score);
  const weakest = sorted[0];

  let band = "mid";
  let headline = "Theek direction — ek weak area par focus karo.";
  let action = pickAction(weakest.id, weakest.score, gapScore, freedom, weekly);

  if (total >= 75) {
    band = "high";
    headline = "Strong Ultimate Value — freedom ko random traps se bachao.";
    action =
      "Aaj ka ek decision consciously real value wala rakho; score maintain karna bhi kaam hai.";
  } else if (total < 45) {
    band = "low";
    headline = "Score signal: zyada fake value, kam freedom.";
    action = pickAction(weakest.id, weakest.score, gapScore, freedom, weekly);
  }

  return {
    total: clamp(total, 0, 100),
    band,
    headline,
    action,
    breakdown,
    weakest: weakest.id,
    gap: { production, cost, gap: production - cost, score: gapScore },
    freedom,
    weekly,
  };
}

function pickAction(weakestId, weakestScore, gapScore, freedom, weekly) {
  if (weakestId === "valueGap" || gapScore < 45) {
    return "Agle bade kharch se pehle Value Gap sliders use karo — production ≥ cost + 3 target karo.";
  }
  if (weakestId === "freedom" || freedom.pct < 50) {
    return "Ek obligation band karo (EMI, toxic commitment, ya comparison habit) — optionality badhegi.";
  }
  if (weakestId === "weekly" || weekly.pct < 50) {
    return "Is hafte sirf 2 weekly checks complete karo: 1 relationship + 1 compound task.";
  }
  return "Teeno areas me thoda-thoda improve — sabse kam score wale section par 20 min aaj.";
}

export function loadWeeklyAudit() {
  try {
    const raw = localStorage.getItem(AUDIT_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveWeeklyAudit(data) {
  localStorage.setItem(AUDIT_KEY, JSON.stringify(data));
}

export function loadFreedomAnswers() {
  try {
    const raw = localStorage.getItem(FREEDOM_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveFreedomAnswers(data) {
  localStorage.setItem(FREEDOM_KEY, JSON.stringify(data));
}

export function scoreFreedom(answers) {
  const keys = FREEDOM_AUDIT.map((x) => x.id);
  const yes = keys.filter((k) => answers[k] === true).length;
  const total = keys.length;
  const pct = Math.round((yes / total) * 100);
  let band = "low";
  let message = "Options tight lag rahe hain — pehle 1 obligation simplify karo.";
  if (pct >= 80) {
    band = "high";
    message = "Strong optionality — is freedom ko random cheezon par mat becho.";
  } else if (pct >= 50) {
    band = "mid";
    message = "Mixed — ek area choose karo jahan option khula karna sabse zyada impact dega.";
  }
  return { yes, total, pct, band, message };
}

export const WEEKLY_CHECKS = [
  { id: "deep_work", label: "3+ ghante deep work / skill building" },
  { id: "relationship", label: "2+ meaningful conversations (bina phone scroll)" },
  { id: "movement", label: "150+ min movement is hafte" },
  { id: "no_compare", label: "Kam se kam 5 din bina envy-scroll" },
  { id: "enough", label: "Ek 'enough' decision liya (kuch kharidna chhod diya)" },
  { id: "compound", label: "Ek kaam kiya jo agle saal bhi kaam aayega" },
];
