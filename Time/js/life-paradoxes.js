/**
 * Paradox of Life — contradictions that explain why "more" often fails.
 */

export const PARADOX_INTRO = {
  title: "जीवन का विरोधाभास (Paradox of Life)",
  subtitle:
    "Zindagi logical nahi — logical lagti hai jab tak paradox samajh nahi aata. Time Machine yahi dikhati hai: time finite hai, par hum infinite jaise behave karte hain.",
};

export const LIFE_PARADOXES = [
  {
    id: "mortality",
    icon: "⏳",
    name: "Mortality Paradox",
    nameHi: "मृत्यु विरोधाभास",
    paradox:
      "Hum jaante hain time limited hai — phir bhi kal par plan, aaj ko postpone, aur 'baad mein jeeyenge' sochte hain.",
    truth: "Maut yaad dilana morbid nahi — yeh clarity hai. Aaj hi ek cheez karo jo kal nahi ho sakti.",
    question: "Agar yeh mera last saal hota, kya main aaj bhi yahi kaam kar raha hota?",
    action: "Ek relationship ya experience aaj schedule karo — sirf plan mat likho.",
    tie: "time",
  },
  {
    id: "hedonic",
    icon: "🎁",
    name: "Hedonic Treadmill",
    nameHi: "खुशी की दौड़",
    paradox:
      "Nayi cheez khush karti hai — phir brain adapt ho jata hai. Phir nayi chahiye. Wheel ghoomti rehti hai, aap same jagah.",
    truth: "Objects depreciate in joy; skills, memories, trust compound.",
    question: "Meri last 3 badi khushiyan cheez thi ya moment/insan thi?",
    action: "Is hafte reward = experience (walk, call, skill), object nahi.",
    tie: "compounding",
  },
  {
    id: "happiness-chase",
    icon: "🏃",
    name: "Happiness Pursuit Paradox",
    nameHi: "खुशी के पीछे भागना",
    paradox:
      "Jitna zyada khushi 'target' banate ho, utna anxiety. Khushi byproduct hai meaning, connection, growth ka.",
    truth: "Khushi chase mat karo — alignment chase karo.",
    question: "Main khush hone ki koshish kar raha hoon ya meaningful jeene ki?",
    action: "20 min bina goal ke — sirf present moment (no scroll).",
    tie: "judgment",
  },
  {
    id: "choice",
    icon: "🔀",
    name: "Paradox of Choice",
    nameHi: "चुनाव का विरोधाभास",
    paradox:
      "Zyada options = zyada freedom lagti hai — par often zyada regret, paralysis, aur 'kya log kahenge' noise.",
    truth: "Real freedom = enough define karna + chhoti set of values.",
    question: "Meri life me kaunse 3 choices actually matter karte hain?",
    action: "Ek decision list banao — baaki ko 'auto-pilot good enough' do.",
    tie: "optionality",
  },
  {
    id: "connection",
    icon: "📱",
    name: "Connection Paradox",
    nameHi: "जुड़ाव का विरोधाभास",
    paradox:
      "Duniya connected hai — log akela feel karte hain. 500 friends online, 2 log jo sach mein sunte hain.",
    truth: "Depth > breadth. Trust compounds slowly.",
    question: "Kaun 3 log hain jinke bina meri life hollow feel hogi?",
    action: "Unme se ek ko aaj voice note / call — bina agenda.",
    tie: "trust",
  },
  {
    id: "money",
    icon: "💰",
    name: "Money–Happiness Paradox",
    nameHi: "पैसा–खुशी विरोधाभास",
    paradox:
      "Bina paise survival mushkil — par threshold ke baad zyada paisa ≠ zyada peace. Phir bhi grind continue.",
    truth: "Paisa tool hai freedom ke liye — master nahi banana chahiye.",
    question: "Kitna monthly 'enough' hai — number likho. Usse upar kya badlega?",
    action: "Enough number likho. Uske upar har kharch Value Gap se test karo.",
    tie: "optionality",
  },
  {
    id: "comparison",
    icon: "👁",
    name: "Comparison Paradox",
    nameHi: "तुलना का विरोधाभास",
    paradox:
      "Dusron se compare karke 'better' banna chahte ho — par compare karte hi kabhi enough nahi milta.",
    truth: "Aap kisi ke highlight reel se apni poori life compare kar rahe ho.",
    question: "Main kis ek insaan se compare karke aaj khud ko chhota feel kar raha hoon?",
    action: "Unfollow / mute 1 trigger source. 24h detox.",
    tie: "trust",
  },
  {
    id: "work",
    icon: "⚙",
    name: "Deferred Life Paradox",
    nameHi: "टाली हुई ज़िंदगी",
    paradox:
      "Saara saal kaam → ek badi cheez / trip / 'jab retire honge'. Life retirement ke baad start nahi hoti.",
    truth: "Micro-joys weekly compound karte hain; mega-reward yearly illusion de sakta hai.",
    question: "Kya main life 'weekend project' ki tarah je raha hoon?",
    action: "Calendar me is hafte 2 'non-negotiable joy blocks' daalo.",
    tie: "time",
  },
  {
    id: "status",
    icon: "👑",
    name: "Status Paradox",
    nameHi: "प्रतिष्ठा का विरोधाभास",
    paradox:
      "Log impress honge — par andar se khali. Dikhawa expensive hai, peace sasti hai par scarce feel hoti hai.",
    truth: "Log kya kahenge = invisible EMI on your soul.",
    question: "Kaunsa decision sirf dikhane ke liye hai?",
    action: "Ek status-driven plan cancel ya simplify karo.",
    tie: "judgment",
  },
  {
    id: "effort",
    icon: "😴",
    name: "Effort Paradox",
    nameHi: "कोशिश का विरोधाभास",
    paradox:
      "Sleep, love, creativity — kabhi zyada force se aur kharab ho jate hain. Control chhodna bhi skill hai.",
    truth: "Strategic rest production hai, laziness nahi.",
    question: "Kahan main over-control kar raha hoon jahan surrender chahiye?",
    action: "Aaj 7h sleep non-negotiable — phone bahar bedroom.",
    tie: "judgment",
  },
  {
    id: "youth",
    icon: "🌱",
    name: "Time–Health Paradox",
    nameHi: "समय–स्वास्थ्य विरोधाभास",
    paradox:
      "Jab body strong hai tab time nahi; jab time milta hai tab body weak. Dono kabhi ek saath perfect nahi.",
    truth: "Abhi wala body = abhi use karo. Walk, play, dance — postpone mat karo.",
    question: "Main kaunsi physical joy 5 saal se 'baad' kar raha hoon?",
    action: "Aaj 30 min body ko khush karo — bina productivity guilt.",
    tie: "time",
  },
  {
    id: "dream-life",
    icon: "✨",
    name: "Dream Life Paradox",
    nameHi: "सपनों वाली ज़िंदगी",
    paradox:
      "SRK jaisi life log sapne mein chahte hain — par har dream life ke peeche tradeoffs, loneliness, pressure chhupi hoti hai.",
    truth: "Apni life ko doosre ki highlight se mat judge karo — apne values se judge karo.",
    question: "Main kiski life copy kar raha hoon — unki ya apni?",
    action: "Likhho: meri 'full life' 5 lines mein kya hai — bina Instagram ke.",
    tie: "judgment",
  },
];

export function getDailyParadox(date = new Date()) {
  const start = new Date(date.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((date - start) / 86_400_000);
  return LIFE_PARADOXES[dayOfYear % LIFE_PARADOXES.length];
}

export function getParadoxById(id) {
  return LIFE_PARADOXES.find((p) => p.id === id) || null;
}

export function buildParadoxInsightForAi() {
  return LIFE_PARADOXES.map((p) => `${p.nameHi}: ${p.paradox}`).join("\n");
}
