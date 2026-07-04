// Comprehensive book database from your collection
const booksData = [
    {
        id: 1,
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        category: "cognitive",
        summary: "Explores the two systems of thinking: System 1 (fast, intuitive) and System 2 (slow, deliberate)",
        keyInsights: [
            "Most decisions use System 1, but System 2 can override when engaged",
            "Cognitive biases affect our judgment in predictable ways",
            "Loss aversion: losses feel twice as powerful as gains"
        ],
        actionableNotes: {
            "cognitive": ["Create 'decision pause' ritual before major choices", "Practice the 'slow down' signal"],
            "professional": ["Question your first instinct in meetings", "Use 24-hour rule for commitments"],
            "relationships": ["Notice when feelings drive conclusions", "Consider situational factors in others' behavior"]
        },
        mentalModels: ["System 1 vs System 2", "Cognitive Biases", "Loss Aversion"],
        connectedBooks: [2, 4, 15],
        tools: ["bias-detector", "decision-framework"]
    },
    {
        id: 2,
        title: "Atomic Habits",
        author: "James Clear",
        category: "personal",
        summary: "Small changes compound into remarkable results through the power of atomic habits",
        keyInsights: [
            "Habits are the compound interest of self-improvement",
            "Focus on systems, not goals",
            "Environment design is crucial for habit formation"
        ],
        actionableNotes: {
            "personal": ["Start with 2-minute habits", "Design environment for success"],
            "professional": ["Stack habits with existing routines", "Track leading measures, not lagging"],
            "life": ["Make good choices easier, bad choices harder", "Focus on identity-based habits"]
        },
        mentalModels: ["Compound Interest", "Systems Thinking", "Environment Design"],
        connectedBooks: [3, 7, 12],
        tools: ["habit-tracker", "environment-designer"]
    },
    {
        id: 3,
        title: "Deep Work",
        author: "Cal Newport",
        category: "professional",
        summary: "The ability to focus without distraction on cognitively demanding tasks",
        keyInsights: [
            "Deep work is becoming increasingly rare and valuable",
            "Shallow work creates busyness without productivity",
            "Attention residue reduces cognitive performance"
        ],
        actionableNotes: {
            "professional": ["Block time for deep work daily", "Eliminate shallow work where possible"],
            "cognitive": ["Practice sustained attention", "Create rituals for focus"],
            "life": ["Embrace boredom to strengthen focus", "Quit social media or use intentionally"]
        },
        mentalModels: ["Attention Residue", "Shallow vs Deep Work", "Cognitive Switching"],
        connectedBooks: [2, 8, 14],
        tools: ["focus-tracker", "distraction-blocker"]
    },
    {
        id: 4,
        title: "Predictably Irrational",
        author: "Dan Ariely",
        category: "cognitive",
        summary: "Hidden forces that shape our decisions and how we can make better choices",
        keyInsights: [
            "We are predictably irrational in systematic ways",
            "Context and framing heavily influence decisions",
            "Free can be more expensive than cheap"
        ],
        actionableNotes: {
            "cognitive": ["Question 'free' offers", "Be aware of anchoring effects"],
            "professional": ["Use decoy pricing strategically", "Frame choices carefully"],
            "life": ["Avoid decision fatigue", "Use commitment devices"]
        },
        mentalModels: ["Anchoring", "Decoy Effect", "Loss Aversion"],
        connectedBooks: [1, 15, 16],
        tools: ["bias-detector", "choice-architect"]
    },
    {
        id: 5,
        title: "The Power of Habit",
        author: "Charles Duhigg",
        category: "personal",
        summary: "Why we do what we do in life and business - the science of habit formation",
        keyInsights: [
            "Habits follow a cue-routine-reward loop",
            "Keystone habits trigger widespread change",
            "Belief is essential for habit change"
        ],
        actionableNotes: {
            "personal": ["Identify your habit loops", "Focus on keystone habits"],
            "professional": ["Create organizational routines", "Use habit stacking"],
            "relationships": ["Build positive interaction habits", "Break negative patterns"]
        },
        mentalModels: ["Habit Loop", "Keystone Habits", "Belief Systems"],
        connectedBooks: [2, 12, 18],
        tools: ["habit-tracker", "loop-analyzer"]
    },
    {
        id: 6,
        title: "Sapiens",
        author: "Yuval Noah Harari",
        category: "cognitive",
        summary: "A brief history of humankind and how we became the dominant species",
        keyInsights: [
            "Shared myths enable large-scale cooperation",
            "Cognitive revolution changed everything",
            "Stories are more powerful than facts"
        ],
        actionableNotes: {
            "cognitive": ["Question shared assumptions", "Understand power of narratives"],
            "professional": ["Use storytelling for influence", "Build shared visions"],
            "relationships": ["Recognize cultural programming", "Find common stories"]
        },
        mentalModels: ["Shared Myths", "Cognitive Revolution", "Collective Fiction"],
        connectedBooks: [19, 20, 21],
        tools: ["assumption-hunter", "narrative-analyzer"]
    },
    {
        id: 7,
        title: "The 7 Habits of Highly Effective People",
        author: "Stephen R. Covey",
        category: "personal",
        summary: "Principles for personal and professional effectiveness",
        keyInsights: [
            "Be proactive - focus on circle of influence",
            "Begin with the end in mind",
            "Seek first to understand, then to be understood"
        ],
        actionableNotes: {
            "personal": ["Define personal mission statement", "Practice proactive language"],
            "professional": ["Focus on important, not urgent", "Win-win thinking"],
            "relationships": ["Listen empathetically", "Synergize differences"]
        },
        mentalModels: ["Circle of Influence", "Win-Win", "Synergy"],
        connectedBooks: [2, 12, 22],
        tools: ["priority-matrix", "mission-builder"]
    },
    {
        id: 8,
        title: "Flow",
        author: "Mihaly Csikszentmihalyi",
        category: "personal",
        summary: "The psychology of optimal experience and peak performance",
        keyInsights: [
            "Flow occurs when challenge matches skill level",
            "Clear goals and immediate feedback enable flow",
            "Self-consciousness disappears in flow states"
        ],
        actionableNotes: {
            "personal": ["Seek optimal challenge levels", "Set clear goals"],
            "professional": ["Design work for flow", "Minimize interruptions"],
            "cognitive": ["Practice sustained attention", "Embrace difficulty"]
        },
        mentalModels: ["Flow State", "Challenge-Skill Balance", "Intrinsic Motivation"],
        connectedBooks: [3, 23, 24],
        tools: ["flow-tracker", "challenge-calibrator"]
    }
];

// Power questions by category
const powerQuestions = {
    analysis: [
        "What am I not seeing that could change everything?",
        "What would someone who disagrees with me say?",
        "What are the second and third-order effects?",
        "What assumptions am I making that might be wrong?",
        "How might this look different in 10 years?",
        "What pattern am I seeing across different domains?",
        "What's the simplest explanation that accounts for all evidence?",
        "What question am I avoiding because it's uncomfortable?"
    ],
    decision: [
        "What would I do if I couldn't fail?",
        "What would I do if failure was guaranteed?",
        "What information would change my mind?",
        "What's the smallest step I could take to test this?",
        "What would my future self advise me to do?",
        "What would I do if resources were unlimited? Limited?",
        "What's the worst-case scenario I can actually handle?",
        "What decision would I make if I had to live with it for 10 years?"
    ],
    learning: [
        "How does this connect to what I already know?",
        "What would I teach someone else about this?",
        "What question am I not asking that I should be?",
        "How can I turn this insight into action?",
        "What would change if I applied this consistently?",
        "How does this connect to three completely different domains?",
        "What would I need to believe for this to make sense?",
        "What's the underlying principle that explains multiple examples?"
    ],
    relationships: [
        "How might others perceive this differently?",
        "What do they need that I'm not providing?",
        "How can I make this easier for everyone involved?",
        "What would build the most trust in this situation?",
        "How can I help them succeed while achieving my goals?",
        "What does the other person need to feel heard?",
        "How might my communication style be creating the problem?",
        "What shared values can we build on?"
    ],
    innovation: [
        "What if the opposite were true?",
        "How would nature solve this problem?",
        "What would this look like if it were 10x better?",
        "What constraints can I remove or add?",
        "How might a child approach this?",
        "What if I combined the best aspects of two unrelated solutions?",
        "How would someone from a different culture approach this?",
        "What would happen if I started from the outcome and worked backwards?"
    ],
    ethics: [
        "Who benefits and who bears the cost?",
        "What kind of person does this action make me?",
        "How does this align with my deepest values?",
        "What precedent does this set?",
        "What would happen if everyone did this?",
        "What kind of world am I creating with this choice?",
        "Who has no voice in this decision but will be affected?",
        "What would I do if this decision were made public?"
    ]
};

// AI Prompts
const aiPrompts = {
    'multi-lens': `You are a multi-perspective thinking assistant. For any topic, problem, or decision I present, analyze it through these 6 lenses:

🔬 **Scientific Lens**: What can be measured, tested, or validated? What evidence exists?
🎨 **Creative Lens**: What novel connections, alternatives, or possibilities emerge?
🏗️ **Systems Lens**: How do the parts interact? What are the feedback loops and emergent properties?
👥 **Human Lens**: What are the emotional, social, and cultural dimensions?
⚖️ **Ethical Lens**: What are the moral implications and value alignments?
🧭 **Strategic Lens**: What are the long-term consequences and opportunity costs?

For each lens, provide:
- Key insights unique to that perspective
- Questions that perspective would ask
- Potential blind spots or limitations

Then synthesize: What patterns emerge across lenses? What tensions need resolution?`,

    'assumption-hunter': `You are an assumption detection specialist. For any statement, belief, or plan I share:

1. **Identify Hidden Assumptions**: What am I taking for granted?
2. **Test Assumption Validity**: Which assumptions are strong/weak/untested?
3. **Explore Alternatives**: What if the opposite were true?
4. **Find Dependencies**: Which assumptions, if wrong, would change everything?
5. **Historical Context**: When have similar assumptions been wrong before?

Present findings as:
- 🎯 Core assumptions (ranked by importance)
- ⚠️ Risky assumptions (high impact if wrong)
- 🔄 Alternative assumptions to consider
- 🧪 Ways to test key assumptions

End with: "What assumption are you most confident in, and why?"`,

    'bias-detector': `You are a cognitive bias detection system. Analyze my thinking for these common biases:

**Confirmation Bias** 🎯: Am I seeking only supporting evidence?
**Anchoring Bias** ⚓: Am I over-weighted to initial information?
**Availability Heuristic** 📺: Am I judging by what's most memorable/recent?
**Sunk Cost Fallacy** 💸: Am I continuing because of past investment?
**Overconfidence Bias** 🦾: Am I overestimating my knowledge/abilities?
**Planning Fallacy** ⏰: Am I underestimating time/resources needed?
**Social Proof Bias** 👥: Am I following others without independent analysis?

For each potential bias:
- Rate likelihood (1-10)
- Provide specific evidence
- Suggest counter-questions
- Recommend corrective actions

Ask me: "Which bias feels most uncomfortable to acknowledge, and why might that be significant?"`,

    'consequence-mapper': `You are a consequence analysis expert. For any action or decision I'm considering:

**Immediate Effects (0-6 months)** ⚡
- Direct outcomes for me
- Impact on others
- Resource requirements

**Secondary Effects (6 months - 2 years)** 🌊
- Ripple effects and reactions
- System adaptations
- Unintended consequences

**Long-term Effects (2+ years)** 🌳
- Compound effects
- Precedent setting
- Cultural/behavioral shifts

For each timeframe, consider:
- 👍 Positive outcomes (intended and unintended)
- 👎 Negative outcomes (intended and unintended)
- 🎲 Uncertain outcomes (with probability estimates)
- 🔄 Feedback loops that could amplify or dampen effects

Conclude with: "What's the most important consequence you haven't fully considered?"`,

    'innovation-catalyst': `You are an innovation thinking partner. Help me generate breakthrough ideas by:

**Constraint Removal** 🚫: What if [current limitation] didn't exist?
**Cross-Pollination** 🐝: How do other industries/fields solve similar problems?
**Inversion Thinking** 🔄: What if we tried to achieve the opposite?
**Scale Shifting** 📏: What would this look like 10x smaller? 10x larger?
**Time Shifting** ⏰: How would this work in 1850? In 2050?
**Stakeholder Shifting** 👥: How would a child/alien/AI approach this?

Generate 3 ideas from each approach, then:
- Combine the most promising elements
- Identify which ideas challenge core assumptions
- Suggest rapid prototyping methods

End with: "What idea excites you most, and what scares you about it?"`,

    'decision-architect': `You are a decision-making coach. Guide me through systematic decision analysis:

**1. Problem Definition** 🎯
- What's the real problem vs. symptoms?
- Who else is affected by this decision?
- What happens if I don't decide?

**2. Option Generation** 💭
- Obvious options
- Creative alternatives
- Hybrid approaches
- "Do nothing" option

**3. Criteria Setting** ⚖️
- What matters most in this decision?
- How will I measure success?
- What are my non-negotiables?

**4. Impact Analysis** 📊
- Score each option against criteria
- Consider reversibility of options
- Identify information gaps

**5. Risk Assessment** ⚠️
- What could go wrong with each option?
- How would I recover from failure?
- What's the regret potential?

**6. Implementation Planning** 🚀
- What's the smallest first step?
- How will I track progress?
- When will I reassess?

Conclude with: "What would you do if you couldn't fail? What would you do if failure was guaranteed?"`
};

// Perspective analysis templates
const perspectives = [
    {
        name: "🔬 The Scientist",
        description: "Hypothesis-driven, evidence-based approach",
        questions: ["What can I test?", "What would prove me wrong?", "What does the data show?"]
    },
    {
        name: "🎨 The Artist",
        description: "Intuitive, pattern-seeking, creative approach",
        questions: ["What patterns do I see?", "What feels right?", "What new connections emerge?"]
    },
    {
        name: "⚙️ The Engineer",
        description: "Systems thinking, optimization approach",
        questions: ["How does this work?", "How can I improve it?", "What are the constraints?"]
    },
    {
        name: "👥 The Anthropologist",
        description: "Human-centered, culture-aware approach",
        questions: ["How do people really behave?", "What are the social dynamics?", "What cultural factors matter?"]
    },
    {
        name: "📚 The Historian",
        description: "Context-aware, precedent-seeking approach",
        questions: ["What happened before?", "What are the cycles?", "What can we learn from the past?"]
    },
    {
        name: "🤔 The Philosopher",
        description: "First principles, logical reasoning approach",
        questions: ["What are my assumptions?", "What is the essence?", "What are the implications?"]
    }
];

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    loadBooks();
    showQuestions('analysis');
});

// Tab functionality
function initializeTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            btn.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

// Books functionality
function loadBooks() {
    const booksGrid = document.getElementById('books-grid');
    booksGrid.innerHTML = '';

    booksData.forEach(book => {
        const bookCard = createBookCard(book);
        booksGrid.appendChild(bookCard);
    });
}

function createBookCard(book) {
    const card = document.createElement('div');
    card.className = 'book-card';
    card.onclick = () => openBookDetails(book);
    
    const categoryEmoji = {
        'cognitive': '🧠',
        'professional': '💼',
        'relationships': '🤝',
        'personal': '🏃‍♂️',
        'life': '🏠'
    };

    card.innerHTML = `
        <div class="book-title">${book.title}</div>
        <div class="book-author">by ${book.author}</div>
        <div class="book-category">${categoryEmoji[book.category]} ${book.category.charAt(0).toUpperCase() + book.category.slice(1)}</div>
    `;
    
    return card;
}

function filterBooks() {
    const searchTerm = document.getElementById('book-search').value.toLowerCase();
    const categoryFilter = document.getElementById('category-filter').value;
    
    const filteredBooks = booksData.filter(book => {
        const matchesSearch = book.title.toLowerCase().includes(searchTerm) || 
                            book.author.toLowerCase().includes(searchTerm);
        const matchesCategory = !categoryFilter || book.category === categoryFilter;
        
        return matchesSearch && matchesCategory;
    });
    
    const booksGrid = document.getElementById('books-grid');
    booksGrid.innerHTML = '';
    
    filteredBooks.forEach(book => {
        const bookCard = createBookCard(book);
        booksGrid.appendChild(bookCard);
    });
}

function openBookDetails(book) {
    const modal = document.getElementById('book-modal');
    const bookDetails = document.getElementById('book-details');
    
    bookDetails.innerHTML = `
        <h2>${book.title}</h2>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Summary:</strong> ${book.summary}</p>
        
        <h3>🔑 Key Insights</h3>
        <ul>
            ${book.keyInsights.map(insight => `<li>${insight}</li>`).join('')}
        </ul>
        
        <h3>🎯 Actionable Notes by Life Area</h3>
        ${Object.entries(book.actionableNotes).map(([area, notes]) => `
            <h4>${getAreaEmoji(area)} ${area.charAt(0).toUpperCase() + area.slice(1)}</h4>
            <ul>
                ${notes.map(note => `<li>${note}</li>`).join('')}
            </ul>
        `).join('')}
    `;
    
    modal.style.display = 'block';
}

function getAreaEmoji(area) {
    const emojis = {
        'cognitive': '🧠',
        'professional': '💼',
        'relationships': '🤝',
        'personal': '🏃‍♂️',
        'life': '🏠'
    };
    return emojis[area] || '📝';
}

// Perspective analysis
function analyzePerspectives() {
    const problemInput = document.getElementById('problem-input').value;
    if (!problemInput.trim()) {
        alert('Please enter a problem or situation to analyze.');
        return;
    }
    
    const resultsContainer = document.getElementById('perspective-results');
    resultsContainer.innerHTML = '';
    
    perspectives.forEach(perspective => {
        const card = document.createElement('div');
        card.className = 'perspective-card';
        
        card.innerHTML = `
            <div class="perspective-title">${perspective.name}</div>
            <div class="perspective-content">
                <p><strong>Approach:</strong> ${perspective.description}</p>
                <p><strong>Key Questions:</strong></p>
                <ul>
                    ${perspective.questions.map(q => `<li>${q}</li>`).join('')}
                </ul>
                <p><strong>Analysis:</strong> Consider how this perspective would approach: "${problemInput}"</p>
            </div>
        `;
        
        resultsContainer.appendChild(card);
    });
}

// Questions functionality
function showQuestions(category) {
    const questionsDisplay = document.getElementById('questions-display');
    const categoryBtns = document.querySelectorAll('.category-btn');
    
    // Update active button
    categoryBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    const questions = powerQuestions[category] || [];
    
    questionsDisplay.innerHTML = `
        <h3>${getCategoryTitle(category)}</h3>
        ${questions.map(question => `
            <div class="question-item" onclick="copyToClipboard('${question}')">
                ${question}
            </div>
        `).join('')}
    `;
}

function getCategoryTitle(category) {
    const titles = {
        'analysis': '🔍 Analysis & Understanding',
        'decision': '🎯 Decision Making',
        'learning': '🧠 Learning & Growth',
        'relationships': '🤝 Relationships & Influence',
        'innovation': '🌱 Innovation & Creativity',
        'ethics': '⚖️ Ethics & Values'
    };
    return titles[category] || category;
}

// AI Prompts functionality
function usePrompt(promptType) {
    const promptDisplay = document.getElementById('prompt-display');
    const prompt = aiPrompts[promptType];
    
    if (prompt) {
        promptDisplay.innerHTML = `
            <h3>Selected Prompt: ${getPromptTitle(promptType)}</h3>
            <div style="background: #f8f9fa; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                <button onclick="copyToClipboard(\`${prompt}\`)" style="background: #3498db; color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; margin-bottom: 1rem;">
                    📋 Copy Prompt
                </button>
            </div>
            <pre style="white-space: pre-wrap; font-family: inherit; line-height: 1.6;">${prompt}</pre>
        `;
    }
}

function getPromptTitle(promptType) {
    const titles = {
        'multi-lens': '🔍 Multi-Lens Analyzer',
        'assumption-hunter': '🕵️ Assumption Hunter',
        'bias-detector': '🚨 Bias Detective',
        'consequence-mapper': '🗺️ Consequence Mapper'
    };
    return titles[promptType] || promptType;
}

// Utility functions
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Show temporary feedback
        const feedback = document.createElement('div');
        feedback.textContent = 'Copied to clipboard!';
        feedback.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #27ae60;
            color: white;
            padding: 1rem;
            border-radius: 8px;
            z-index: 1001;
        `;
        document.body.appendChild(feedback);
        
        setTimeout(() => {
            document.body.removeChild(feedback);
        }, 2000);
    });
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Quick action functions
function openPerspectiveAnalyzer() {
    // Switch to perspectives tab
    document.querySelector('[data-tab="perspectives"]').click();
    document.getElementById('problem-input').focus();
}

function openQuestionGenerator() {
    // Switch to questions tab
    document.querySelector('[data-tab="questions"]').click();
}

function openBiasChecker() {
    // Switch to AI prompts tab and select bias detector
    document.querySelector('[data-tab="ai-prompts"]').click();
    setTimeout(() => usePrompt('bias-detector'), 100);
}

function addNewBook() {
    alert('Book addition feature coming soon! For now, you can manually add books to the booksData array in script.js');
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}
/
/ Knowledge connection system
const mentalModels = {
    // Additional powerful books from your collection
    {
        id: 13,
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        category: "cognitive",
        summary: "How Homo sapiens came to dominate the world through cognitive, agricultural, and scientific revolutions",
        keyInsights: [
            "Shared myths and stories enable large-scale cooperation",
            "The cognitive revolution gave humans unprecedented power",
            "Money, religion, and empires are shared fictions"
        ],
        actionableNotes: {
            "cognitive": ["Question the stories and myths you believe", "Understand how narratives shape reality"],
            "professional": ["Use storytelling to build organizational culture", "Recognize the power of shared beliefs"],
            "relationships": ["Find common narratives that unite people", "Be aware of cultural programming"]
        },
        mentalModels: ["Shared Fictions", "Cognitive Revolution", "Network Effects"],
        connectedBooks: [1, 6, 14],
        tools: ["narrative-analyzer", "belief-mapper"]
    },
    {
        id: 14,
        title: "The Righteous Mind",
        author: "Jonathan Haidt",
        category: "relationships",
        summary: "Moral psychology and how moral judgments are driven by intuition, not reasoning",
        keyInsights: [
            "Moral reasoning is post-hoc justification for intuitive judgments",
            "Six moral foundations: care, fairness, loyalty, authority, sanctity, liberty",
            "We're 90% chimp (groupish) and 10% bee (capable of transcendence)"
        ],
        actionableNotes: {
            "relationships": ["Understand others' moral foundations", "Appeal to shared moral values"],
            "cognitive": ["Recognize moral reasoning as rationalization", "Question your moral intuitions"],
            "professional": ["Build diverse teams with different moral perspectives", "Frame arguments using others' moral foundations"]
        },
        mentalModels: ["Moral Foundations", "Intuitive vs Reasoning", "Groupish Behavior"],
        connectedBooks: [1, 6, 13],
        tools: ["moral-foundation-analyzer", "perspective-bridge"]
    },
    {
        id: 15,
        title: "Nudge",
        author: "Richard Thaler & Cass Sunstein",
        category: "cognitive",
        summary: "How to improve decisions about health, wealth, and happiness through choice architecture",
        keyInsights: [
            "Small changes in how choices are presented can have big impacts",
            "Default options are incredibly powerful",
            "People need nudges because they're predictably irrational"
        ],
        actionableNotes: {
            "cognitive": ["Design your environment to nudge good choices", "Be aware of how others nudge you"],
            "professional": ["Use choice architecture to help team make better decisions", "Set good defaults in systems"],
            "life": ["Automate good choices through defaults", "Remove friction from desired behaviors"]
        },
        mentalModels: ["Choice Architecture", "Default Bias", "Libertarian Paternalism"],
        connectedBooks: [1, 2, 5],
        tools: ["choice-architect", "default-optimizer"]
    },
    {
        id: 16,
        title: "Antifragile",
        author: "Nassim Nicholas Taleb",
        category: "cognitive",
        summary: "Things that gain from disorder and how to build antifragile systems",
        keyInsights: [
            "Antifragile systems get stronger from stress and volatility",
            "Overprotection leads to fragility",
            "Small failures prevent large catastrophes"
        ],
        actionableNotes: {
            "personal": ["Expose yourself to small stresses to build resilience", "Embrace controlled volatility"],
            "professional": ["Build redundancy and optionality into systems", "Fail fast and learn quickly"],
            "cognitive": ["Question expert predictions", "Focus on what survives rather than what's optimal"]
        },
        mentalModels: ["Antifragility", "Via Negativa", "Barbell Strategy"],
        connectedBooks: [17, 18, 19],
        tools: ["antifragility-assessor", "stress-tester"]
    },
    {
        id: 17,
        title: "The Black Swan",
        author: "Nassim Nicholas Taleb",
        category: "cognitive",
        summary: "The impact of highly improbable events and our inability to predict them",
        keyInsights: [
            "Black swan events have massive impact but are unpredictable",
            "We create narratives to explain randomness after the fact",
            "Focus on being prepared for the unpredictable"
        ],
        actionableNotes: {
            "cognitive": ["Acknowledge the limits of prediction", "Prepare for multiple scenarios"],
            "professional": ["Build robust systems that can handle surprises", "Avoid over-optimization"],
            "life": ["Create optionality and redundancy", "Don't put all eggs in one basket"]
        },
        mentalModels: ["Black Swan Events", "Narrative Fallacy", "Robustness"],
        connectedBooks: [16, 18, 1],
        tools: ["scenario-planner", "robustness-checker"]
    },
    {
        id: 18,
        title: "Thinking in Systems",
        author: "Donella Meadows",
        category: "cognitive",
        summary: "A primer on systems thinking and how to understand complex systems",
        keyInsights: [
            "Systems have purpose, structure, and function",
            "Leverage points can create massive change with minimal effort",
            "The least obvious part of a system is often its purpose"
        ],
        actionableNotes: {
            "cognitive": ["Look for feedback loops and delays", "Identify leverage points for maximum impact"],
            "professional": ["Map systems before trying to change them", "Focus on changing paradigms, not just events"],
            "relationships": ["Understand relationship systems and dynamics", "Change structure to change behavior"]
        },
        mentalModels: ["Systems Thinking", "Leverage Points", "Feedback Loops"],
        connectedBooks: [16, 17, 2],
        tools: ["systems-mapper", "leverage-finder"]
    },
    {
        id: 19,
        title: "Superforecasting",
        author: "Philip Tetlock",
        category: "cognitive",
        summary: "The art and science of prediction and how to become a better forecaster",
        keyInsights: [
            "Superforecasters think in probabilities, not certainties",
            "Update beliefs incrementally based on new evidence",
            "Avoid the planning fallacy and reference class forecasting"
        ],
        actionableNotes: {
            "cognitive": ["Practice probabilistic thinking", "Keep score of your predictions"],
            "professional": ["Use reference class forecasting for projects", "Create prediction tournaments"],
            "personal": ["Break down complex predictions into components", "Actively seek disconfirming evidence"]
        },
        mentalModels: ["Probabilistic Thinking", "Reference Class Forecasting", "Bayesian Updating"],
        connectedBooks: [1, 16, 17],
        tools: ["prediction-tracker", "probability-calibrator"]
    },
    {
        id: 20,
        title: "The Happiness Hypothesis",
        author: "Jonathan Haidt",
        category: "personal",
        summary: "Ancient wisdom meets modern psychology on the causes of happiness and meaning",
        keyInsights: [
            "Happiness comes from between (relationships), within (genetics/mindset), and without (conditions)",
            "The rider (reasoning) serves the elephant (emotions)",
            "Adversity can lead to post-traumatic growth"
        ],
        actionableNotes: {
            "personal": ["Invest in relationships for lasting happiness", "Practice gratitude and savoring"],
            "cognitive": ["Understand the emotional basis of reasoning", "Reframe adversity as growth opportunity"],
            "relationships": ["Focus on love and work for meaning", "Build social connections and community"]
        },
        mentalModels: ["Happiness Formula", "Rider and Elephant", "Post-traumatic Growth"],
        connectedBooks: [14, 11, 7],
        tools: ["happiness-tracker", "meaning-mapper"]
    }
];