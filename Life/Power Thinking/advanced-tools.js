// Mental Models Database
const mentalModels = {
    "systems thinking": {
        description: "Understanding how parts interact within wholes",
        applications: ["Business strategy", "Personal habits", "Relationships"],
        connections: ["feedback loops", "emergence", "leverage points"]
    },
    "compound interest": {
        description: "Small consistent actions create exponential results over time",
        applications: ["Learning", "Habits", "Investing", "Relationships"],
        connections: ["exponential growth", "patience", "consistency"]
    },
    "cognitive biases": {
        description: "Systematic errors in thinking that affect decisions",
        applications: ["Decision making", "Problem solving", "Communication"],
        connections: ["system 1 thinking", "heuristics", "bounded rationality"]
    },
    "feedback loops": {
        description: "Outputs of a system are routed back as inputs",
        applications: ["Learning", "Habits", "Systems design"],
        connections: ["systems thinking", "reinforcement", "balancing loops"]
    },
    "opportunity cost": {
        description: "The value of the best alternative foregone",
        applications: ["Resource allocation", "Time management", "Decision making"],
        connections: ["trade-offs", "scarcity", "prioritization"]
    },
    "network effects": {
        description: "Value increases as more people use the product/service",
        applications: ["Technology", "Social platforms", "Communities"],
        connections: ["exponential growth", "winner-take-all", "critical mass"]
    },
    "antifragility": {
        description: "Systems that get stronger from stress and volatility",
        applications: ["Personal resilience", "Business strategy", "Learning"],
        connections: ["stress testing", "redundancy", "optionality"]
    },
    "inversion": {
        description: "Thinking backwards from desired outcomes",
        applications: ["Problem solving", "Planning", "Risk management"],
        connections: ["via negativa", "pre-mortem", "failure analysis"]
    }
};

// Advanced thinking functions
function connectMentalModels() {
    const input = document.getElementById('model-input').value.trim();
    const output = document.getElementById('model-output');
    
    if (!input) {
        alert('Please enter a concept or problem to analyze.');
        return;
    }
    
    // Find relevant mental models
    const relevantModels = findRelevantModels(input);
    const connections = findModelConnections(relevantModels);
    
    let html = `
        <h4>🧠 Relevant Mental Models for: "${input}"</h4>
        <div style="margin: 1rem 0;">
    `;
    
    relevantModels.forEach(model => {
        html += `
            <div class="mental-model-card">
                <strong>${model.name}</strong>
                <p>${model.description}</p>
                <small><strong>Applications:</strong> ${model.applications.join(', ')}</small>
            </div>
        `;
    });
    
    html += `</div><h4>🔗 Cross-Model Connections</h4>`;
    
    connections.forEach(connection => {
        html += `
            <div class="connection-line">
                <div class="strength-indicator strength-${connection.strength}"></div>
                <div>
                    <strong>${connection.model1}</strong> ↔ <strong>${connection.model2}</strong>
                    <br><small>${connection.insight}</small>
                </div>
            </div>
        `;
    });
    
    output.innerHTML = html;
    output.classList.add('show');
}

function excavateAssumptions() {
    const input = document.getElementById('assumption-input').value.trim();
    const output = document.getElementById('assumption-output');
    
    if (!input) {
        alert('Please enter a belief, plan, or statement to analyze.');
        return;
    }
    
    const assumptions = generateAssumptions(input);
    
    let html = `
        <h4>⛏️ Hidden Assumptions in: "${input.substring(0, 50)}..."</h4>
        <div style="margin: 1rem 0;">
    `;
    
    assumptions.core.forEach(assumption => {
        html += `
            <div class="mental-model-card" style="background: #fff3cd; border-left-color: #ffc107;">
                <strong>🎯 Core Assumption:</strong> ${assumption.text}
                <br><small><strong>Risk Level:</strong> ${assumption.risk} | <strong>Test:</strong> ${assumption.test}</small>
            </div>
        `;
    });
    
    assumptions.risky.forEach(assumption => {
        html += `
            <div class="mental-model-card" style="background: #f8d7da; border-left-color: #dc3545;">
                <strong>⚠️ Risky Assumption:</strong> ${assumption.text}
                <br><small><strong>Impact if wrong:</strong> ${assumption.impact}</small>
            </div>
        `;
    });
    
    html += `
        </div>
        <h4>🔄 Alternative Assumptions to Consider</h4>
        <ul>
    `;
    
    assumptions.alternatives.forEach(alt => {
        html += `<li>${alt}</li>`;
    });
    
    html += `</ul>`;
    
    output.innerHTML = html;
    output.classList.add('show');
}

function simulateConsequences() {
    const input = document.getElementById('decision-input').value.trim();
    const output = document.getElementById('consequence-output');
    
    if (!input) {
        alert('Please enter a decision or action to analyze.');
        return;
    }
    
    const consequences = generateConsequences(input);
    
    let html = `
        <h4>🔮 Consequence Analysis for: "${input.substring(0, 50)}..."</h4>
    `;
    
    ['immediate', 'secondary', 'longterm'].forEach(timeframe => {
        const timeEmoji = {'immediate': '⚡', 'secondary': '🌊', 'longterm': '🌳'}[timeframe];
        const timeLabel = {'immediate': 'Immediate (0-6 months)', 'secondary': 'Secondary (6 months - 2 years)', 'longterm': 'Long-term (2+ years)'}[timeframe];
        
        html += `
            <h5>${timeEmoji} ${timeLabel}</h5>
            <div style="margin: 1rem 0;">
        `;
        
        consequences[timeframe].forEach(consequence => {
            const bgColor = consequence.type === 'positive' ? '#d4edda' : consequence.type === 'negative' ? '#f8d7da' : '#fff3cd';
            const icon = consequence.type === 'positive' ? '👍' : consequence.type === 'negative' ? '👎' : '🎲';
            
            html += `
                <div class="scenario-card" style="background: ${bgColor};">
                    <strong>${icon} ${consequence.title}</strong>
                    <p>${consequence.description}</p>
                    <div class="probability-bar">
                        <div class="probability-fill" style="width: ${consequence.probability}%"></div>
                    </div>
                    <small>Probability: ${consequence.probability}%</small>
                </div>
            `;
        });
        
        html += `</div>`;
    });
    
    output.innerHTML = html;
    output.classList.add('show');
}

function recognizePatterns() {
    const input = document.getElementById('pattern-input').value.trim();
    const output = document.getElementById('pattern-output');
    
    if (!input) {
        alert('Please enter situations or experiences to analyze.');
        return;
    }
    
    const patterns = identifyPatterns(input);
    
    let html = `
        <h4>🎯 Patterns Identified in: "${input.substring(0, 50)}..."</h4>
        <div style="margin: 1rem 0;">
    `;
    
    patterns.forEach(pattern => {
        html += `
            <div class="mental-model-card">
                <strong>${pattern.name}</strong>
                <p>${pattern.description}</p>
                <small><strong>Frequency:</strong> ${pattern.frequency} | <strong>Domains:</strong> ${pattern.domains.join(', ')}</small>
                <br><small><strong>Insight:</strong> ${pattern.insight}</small>
            </div>
        `;
    });
    
    html += `</div>`;
    
    output.innerHTML = html;
    output.classList.add('show');
}

function optimizeCognitiveLoad() {
    const input = document.getElementById('task-input').value.trim();
    const output = document.getElementById('load-output');
    
    if (!input) {
        alert('Please enter your current tasks or challenges.');
        return;
    }
    
    const optimization = analyzeCognitiveLoad(input);
    
    let html = `
        <h4>⚡ Cognitive Load Analysis for: "${input.substring(0, 50)}..."</h4>
        <div style="margin: 1rem 0;">
            <div class="mental-model-card" style="background: ${optimization.loadLevel === 'high' ? '#f8d7da' : optimization.loadLevel === 'medium' ? '#fff3cd' : '#d4edda'};">
                <strong>Current Load Level: ${optimization.loadLevel.toUpperCase()}</strong>
                <p>${optimization.assessment}</p>
            </div>
        </div>
        
        <h5>🎯 Optimization Strategies</h5>
        <div style="margin: 1rem 0;">
    `;
    
    optimization.strategies.forEach(strategy => {
        html += `
            <div class="connection-line">
                <div class="strength-indicator strength-${strategy.impact}"></div>
                <div>
                    <strong>${strategy.name}</strong>
                    <br><small>${strategy.description}</small>
                </div>
            </div>
        `;
    });
    
    html += `</div>`;
    
    output.innerHTML = html;
    output.classList.add('show');
}

function distillWisdom() {
    const input = document.getElementById('experience-input').value.trim();
    const output = document.getElementById('wisdom-output');
    
    if (!input) {
        alert('Please enter an experience or challenge to analyze.');
        return;
    }
    
    const wisdom = extractWisdom(input);
    
    let html = `
        <h4>💎 Wisdom Distilled from: "${input.substring(0, 50)}..."</h4>
        
        <h5>🔑 Key Principles</h5>
        <div style="margin: 1rem 0;">
    `;
    
    wisdom.principles.forEach(principle => {
        html += `
            <div class="mental-model-card">
                <strong>${principle.title}</strong>
                <p>${principle.description}</p>
                <small><strong>Application:</strong> ${principle.application}</small>
            </div>
        `;
    });
    
    html += `
        </div>
        <h5>📚 Lessons Learned</h5>
        <ul>
    `;
    
    wisdom.lessons.forEach(lesson => {
        html += `<li>${lesson}</li>`;
    });
    
    html += `
        </ul>
        <h5>🔄 Future Applications</h5>
        <ul>
    `;
    
    wisdom.applications.forEach(app => {
        html += `<li>${app}</li>`;
    });
    
    html += `</ul>`;
    
    output.innerHTML = html;
    output.classList.add('show');
}

// Helper functions for generating insights
function findRelevantModels(input) {
    const keywords = input.toLowerCase().split(' ');
    const relevant = [];
    
    Object.entries(mentalModels).forEach(([name, model]) => {
        let relevanceScore = 0;
        
        keywords.forEach(keyword => {
            if (name.includes(keyword) || model.description.toLowerCase().includes(keyword)) {
                relevanceScore += 2;
            }
            model.applications.forEach(app => {
                if (app.toLowerCase().includes(keyword)) relevanceScore += 1;
            });
        });
        
        if (relevanceScore > 0) {
            relevant.push({
                name: name,
                ...model,
                relevance: relevanceScore
            });
        }
    });
    
    return relevant.sort((a, b) => b.relevance - a.relevance).slice(0, 4);
}

function findModelConnections(models) {
    const connections = [];
    
    for (let i = 0; i < models.length; i++) {
        for (let j = i + 1; j < models.length; j++) {
            const model1 = models[i];
            const model2 = models[j];
            
            const commonConnections = model1.connections.filter(c => 
                model2.connections.includes(c)
            );
            
            if (commonConnections.length > 0) {
                connections.push({
                    model1: model1.name,
                    model2: model2.name,
                    strength: commonConnections.length > 1 ? 'high' : 'medium',
                    insight: `Both models involve ${commonConnections.join(' and ')}`
                });
            }
        }
    }
    
    return connections;
}

function generateAssumptions(input) {
    // Simplified assumption generation based on common patterns
    return {
        core: [
            {
                text: "The current approach is the best available option",
                risk: "Medium",
                test: "Research alternative approaches and compare outcomes"
            },
            {
                text: "Past patterns will continue into the future",
                risk: "High",
                test: "Look for changing conditions and disrupting factors"
            }
        ],
        risky: [
            {
                text: "Others will behave as expected",
                impact: "Could lead to coordination failures and unmet expectations"
            },
            {
                text: "Resources will remain available",
                impact: "Could cause project delays or complete failure"
            }
        ],
        alternatives: [
            "What if the opposite were true?",
            "What if this takes 3x longer than expected?",
            "What if key people are unavailable?",
            "What if the environment changes significantly?"
        ]
    };
}

function generateConsequences(input) {
    return {
        immediate: [
            {
                type: 'positive',
                title: 'Quick wins and momentum',
                description: 'Initial positive results create motivation and buy-in',
                probability: 70
            },
            {
                type: 'negative',
                title: 'Resource strain',
                description: 'Initial investment of time and energy',
                probability: 60
            },
            {
                type: 'uncertain',
                title: 'Learning curve effects',
                description: 'Temporary decrease in efficiency while adapting',
                probability: 50
            }
        ],
        secondary: [
            {
                type: 'positive',
                title: 'Skill development',
                description: 'New capabilities and competencies emerge',
                probability: 80
            },
            {
                type: 'negative',
                title: 'Opportunity costs',
                description: 'Other opportunities may be missed',
                probability: 40
            }
        ],
        longterm: [
            {
                type: 'positive',
                title: 'Compound benefits',
                description: 'Long-term advantages accumulate over time',
                probability: 65
            },
            {
                type: 'uncertain',
                title: 'System-wide changes',
                description: 'Broader implications for related areas',
                probability: 45
            }
        ]
    };
}

function identifyPatterns(input) {
    return [
        {
            name: "Recurring Challenges",
            description: "Similar problems appearing in different contexts",
            frequency: "High",
            domains: ["Work", "Personal", "Relationships"],
            insight: "May indicate a systematic issue requiring root cause analysis"
        },
        {
            name: "Success Factors",
            description: "Common elements present in positive outcomes",
            frequency: "Medium",
            domains: ["Projects", "Goals", "Learning"],
            insight: "These factors could be replicated in future endeavors"
        },
        {
            name: "Timing Patterns",
            description: "Cyclical or seasonal variations in performance",
            frequency: "Medium",
            domains: ["Productivity", "Mood", "Energy"],
            insight: "Understanding these cycles can improve planning and expectations"
        }
    ];
}

function analyzeCognitiveLoad(input) {
    const loadLevel = input.length > 200 ? 'high' : input.length > 100 ? 'medium' : 'low';
    
    return {
        loadLevel: loadLevel,
        assessment: loadLevel === 'high' ? 
            "High cognitive load detected. Consider breaking down tasks and reducing complexity." :
            loadLevel === 'medium' ?
            "Moderate cognitive load. Some optimization opportunities available." :
            "Manageable cognitive load. Good capacity for additional challenges.",
        strategies: [
            {
                name: "Task Batching",
                description: "Group similar tasks together to reduce context switching",
                impact: "high"
            },
            {
                name: "External Memory",
                description: "Use tools and systems to store information externally",
                impact: "medium"
            },
            {
                name: "Energy Management",
                description: "Align demanding tasks with peak energy periods",
                impact: "high"
            },
            {
                name: "Simplification",
                description: "Remove unnecessary complexity and steps",
                impact: "medium"
            }
        ]
    };
}

function extractWisdom(input) {
    return {
        principles: [
            {
                title: "Preparation Principle",
                description: "Success often depends more on preparation than execution",
                application: "Invest more time in planning and setup phases"
            },
            {
                title: "Feedback Principle",
                description: "Regular feedback loops accelerate learning and improvement",
                application: "Build in checkpoints and review mechanisms"
            },
            {
                title: "Adaptation Principle",
                description: "Flexibility and responsiveness are more valuable than rigid plans",
                application: "Build optionality and pivot points into strategies"
            }
        ],
        lessons: [
            "Small consistent actions often outperform sporadic intense efforts",
            "Understanding the system is more important than optimizing individual parts",
            "Emotional intelligence is as important as technical competence",
            "Prevention is usually more effective than correction"
        ],
        applications: [
            "Apply these principles to similar future situations",
            "Share insights with others facing comparable challenges",
            "Create systems and processes that embody these lessons",
            "Use this experience as a reference point for decision-making"
        ]
    };
}