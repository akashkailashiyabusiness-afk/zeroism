/**
 * AI Tools Interconnection System
 * Provides cross-tool communication, data sharing, and unified settings management
 */

class AIToolsInterconnect {
    constructor() {
        this.HUB_KEY = 'ai_hub_cfg';
        this.INTERCONNECT_KEY = 'ai_interconnect_cfg';
        this.DATA_PREFIX = 'ai_tool_data_';
        this.SETTINGS_PREFIX = 'ai_tool_settings_';
        
        this.tools = [
            { id: 'super_think', name: 'Super Think', file: 'Super Think.html', category: 'Thinking' },
            { id: 'decision_framework', name: 'Decision Making Framework', file: 'Decision Making Framework.html', category: 'Thinking' },
            { id: 'bias_detector', name: 'Cognitive Bias Detector', file: 'Cognitive Bias Detector.html', category: 'Thinking' },
            { id: 'systems_analyzer', name: 'Systems Thinking Analyzer', file: 'Systems Thinking Analyzer.html', category: 'Thinking' },
            { id: 'creative_solver', name: 'Creative Problem Solver', file: 'Creative Problem Solver.html', category: 'Thinking' },
            { id: 'mental_models', name: 'Mental Models Library', file: 'Mental Models Library.html', category: 'Thinking' },
            { id: 'argument_analyzer', name: 'Argument Structure Analyzer', file: 'Argument Structure Analyzer.html', category: 'Thinking' },
            { id: 'thinking_coach', name: 'Thinking Coach', file: 'Thinking Coach.html', category: 'Thinking' },
            { id: 'ai_data_analysis', name: 'AI Data Analysis', file: 'AI-Powered Data Analysis.html', category: 'Data' },
            { id: 'data_analysis', name: 'Data Analysis Tool', file: 'Data Analysis Tool.html', category: 'Data' },
            { id: 'multi_perspective', name: 'Multi-Perspective Analyzer', file: 'Advanced Multi‑Perspective Analyzer.html', category: 'Analysis' },
            { id: 'blueprint_health', name: 'Blueprint Health Tool', file: 'Blueprint Health Tool 🚀.html', category: 'Health' },
            { id: 'health_blueprint', name: 'Health Blueprint', file: 'Health_Blueprint.html', category: 'Health' },
            { id: 'bp_advance', name: 'BP ADVANCE', file: 'BP ADVANCE.html', category: 'Business' },
            { id: 'gpt_pro', name: 'GPT PRO', file: 'GPT_PRO.html', category: 'AI' },
            { id: 'prompt_lab', name: 'Prompt Lab', file: 'Prompt Lab.html', category: 'AI' },
            { id: 'protool', name: 'Protool', file: 'Protool.html', category: 'Development' }
        ];
        
        this.init();
    }
    
    init() {
        // Load interconnection settings
        this.settings = this.loadInterconnectSettings();
        
        // Set up message bus if enabled
        if (this.settings.messageBus) {
            this.initMessageBus();
        }
        
        // Set up context sharing if enabled
        if (this.settings.contextSharing) {
            this.initContextSharing();
        }
        
        // Set up live sync if enabled
        if (this.settings.liveSync) {
            this.initLiveSync();
        }
    }
    
    // Settings Management
    loadInterconnectSettings() {
        try {
            return JSON.parse(localStorage.getItem(this.INTERCONNECT_KEY) || '{}');
        } catch (e) {
            return {};
        }
    }
    
    saveInterconnectSettings(settings) {
        localStorage.setItem(this.INTERCONNECT_KEY, JSON.stringify(settings));
        this.settings = settings;
    }
    
    getHubSettings() {
        try {
            return JSON.parse(localStorage.getItem(this.HUB_KEY) || '{}');
        } catch (e) {
            return {};
        }
    }
    
    syncSettingsToTool(toolId, settings = null) {
        const hubSettings = settings || this.getHubSettings();
        const toolKey = `${this.SETTINGS_PREFIX}${toolId}`;
        localStorage.setItem(toolKey, JSON.stringify(hubSettings));
    }
    
    syncSettingsToAllTools(settings = null) {
        const hubSettings = settings || this.getHubSettings();
        this.tools.forEach(tool => {
            this.syncSettingsToTool(tool.id, hubSettings);
        });
    }
    
    // Data Sharing
    shareData(fromToolId, toToolId, data, dataType = 'general') {
        const sharedData = {
            from: fromToolId,
            to: toToolId,
            data: data,
            type: dataType,
            timestamp: Date.now(),
            id: this.generateId()
        };
        
        const key = `${this.DATA_PREFIX}shared_${toToolId}`;
        const existingData = this.getSharedData(toToolId) || [];
        existingData.push(sharedData);
        
        localStorage.setItem(key, JSON.stringify(existingData));
        
        // Trigger event if message bus is enabled
        if (this.settings.messageBus) {
            this.sendMessage('data_shared', sharedData);
        }
        
        return sharedData.id;
    }
    
    getSharedData(toolId) {
        try {
            const key = `${this.DATA_PREFIX}shared_${toolId}`;
            return JSON.parse(localStorage.getItem(key) || '[]');
        } catch (e) {
            return [];
        }
    }
    
    exportToolData(toolId) {
        const dataKey = `${this.DATA_PREFIX}${toolId}`;
        const settingsKey = `${this.SETTINGS_PREFIX}${toolId}`;
        
        const data = localStorage.getItem(dataKey);
        const settings = localStorage.getItem(settingsKey);
        
        return {
            toolId: toolId,
            data: data ? JSON.parse(data) : null,
            settings: settings ? JSON.parse(settings) : null,
            exportDate: new Date().toISOString()
        };
    }
    
    exportAllData() {
        const allData = {};
        this.tools.forEach(tool => {
            const toolData = this.exportToolData(tool.id);
            if (toolData.data || toolData.settings) {
                allData[tool.id] = toolData;
            }
        });
        
        return {
            version: '1.0',
            exportDate: new Date().toISOString(),
            hubSettings: this.getHubSettings(),
            interconnectSettings: this.settings,
            tools: allData
        };
    }
    
    importAllData(importData) {
        try {
            // Import hub settings
            if (importData.hubSettings) {
                localStorage.setItem(this.HUB_KEY, JSON.stringify(importData.hubSettings));
            }
            
            // Import interconnect settings
            if (importData.interconnectSettings) {
                this.saveInterconnectSettings(importData.interconnectSettings);
            }
            
            // Import tool data
            if (importData.tools) {
                Object.keys(importData.tools).forEach(toolId => {
                    const toolData = importData.tools[toolId];
                    
                    if (toolData.data) {
                        const dataKey = `${this.DATA_PREFIX}${toolId}`;
                        localStorage.setItem(dataKey, JSON.stringify(toolData.data));
                    }
                    
                    if (toolData.settings) {
                        const settingsKey = `${this.SETTINGS_PREFIX}${toolId}`;
                        localStorage.setItem(settingsKey, JSON.stringify(toolData.settings));
                    }
                });
            }
            
            return true;
        } catch (e) {
            console.error('Import failed:', e);
            return false;
        }
    }
    
    // Message Bus
    initMessageBus() {
        // Create custom event system for cross-tool communication
        this.messageBus = new EventTarget();
        
        // Listen for storage changes (cross-tab communication)
        window.addEventListener('storage', (e) => {
            if (e.key && e.key.startsWith('ai_message_')) {
                const message = JSON.parse(e.newValue || '{}');
                this.messageBus.dispatchEvent(new CustomEvent('message', { detail: message }));
            }
        });
    }
    
    sendMessage(type, data, targetTool = null) {
        if (!this.settings.messageBus) return;
        
        const message = {
            type: type,
            data: data,
            from: this.getCurrentToolId(),
            to: targetTool,
            timestamp: Date.now(),
            id: this.generateId()
        };
        
        // Store message temporarily for cross-tab communication
        const messageKey = `ai_message_${message.id}`;
        localStorage.setItem(messageKey, JSON.stringify(message));
        
        // Clean up message after short delay
        setTimeout(() => {
            localStorage.removeItem(messageKey);
        }, 1000);
        
        // Dispatch local event
        if (this.messageBus) {
            this.messageBus.dispatchEvent(new CustomEvent('message', { detail: message }));
        }
    }
    
    onMessage(callback) {
        if (!this.messageBus) return;
        this.messageBus.addEventListener('message', (e) => {
            callback(e.detail);
        });
    }
    
    // Context Sharing
    initContextSharing() {
        this.contextStore = new Map();
    }
    
    shareContext(context, contextType = 'general') {
        if (!this.settings.contextSharing) return;
        
        const contextData = {
            context: context,
            type: contextType,
            from: this.getCurrentToolId(),
            timestamp: Date.now(),
            id: this.generateId()
        };
        
        const key = `ai_context_${contextType}`;
        localStorage.setItem(key, JSON.stringify(contextData));
        
        // Send message if message bus is enabled
        if (this.settings.messageBus) {
            this.sendMessage('context_shared', contextData);
        }
    }
    
    getSharedContext(contextType = 'general') {
        try {
            const key = `ai_context_${contextType}`;
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (e) {
            return null;
        }
    }
    
    // Live Sync
    initLiveSync() {
        // Monitor changes to tool data and sync across tools
        this.syncInterval = setInterval(() => {
            this.performLiveSync();
        }, 5000); // Sync every 5 seconds
    }
    
    performLiveSync() {
        if (!this.settings.liveSync) return;
        
        // Sync hub settings to all tools
        const hubSettings = this.getHubSettings();
        this.tools.forEach(tool => {
            const toolSettingsKey = `${this.SETTINGS_PREFIX}${tool.id}`;
            const toolSettings = localStorage.getItem(toolSettingsKey);
            
            if (!toolSettings || JSON.stringify(JSON.parse(toolSettings)) !== JSON.stringify(hubSettings)) {
                this.syncSettingsToTool(tool.id, hubSettings);
            }
        });
    }
    
    // Workflow Management
    createWorkflow(name, steps) {
        const workflow = {
            id: this.generateId(),
            name: name,
            steps: steps,
            created: Date.now(),
            lastRun: null
        };
        
        const workflows = this.getWorkflows();
        workflows.push(workflow);
        localStorage.setItem('ai_workflows', JSON.stringify(workflows));
        
        return workflow.id;
    }
    
    getWorkflows() {
        try {
            return JSON.parse(localStorage.getItem('ai_workflows') || '[]');
        } catch (e) {
            return [];
        }
    }
    
    runWorkflow(workflowId) {
        const workflows = this.getWorkflows();
        const workflow = workflows.find(w => w.id === workflowId);
        
        if (!workflow) return false;
        
        // Execute workflow steps
        workflow.steps.forEach((step, index) => {
            setTimeout(() => {
                this.executeWorkflowStep(step);
            }, index * 1000); // 1 second delay between steps
        });
        
        // Update last run time
        workflow.lastRun = Date.now();
        localStorage.setItem('ai_workflows', JSON.stringify(workflows));
        
        return true;
    }
    
    executeWorkflowStep(step) {
        // Execute individual workflow step
        console.log('Executing workflow step:', step);
        
        // This would be implemented based on specific step types
        switch (step.type) {
            case 'open_tool':
                window.open(step.tool, '_blank');
                break;
            case 'share_data':
                this.shareData(step.from, step.to, step.data, step.dataType);
                break;
            case 'send_message':
                this.sendMessage(step.messageType, step.data, step.target);
                break;
        }
    }
    
    // Utility Methods
    getCurrentToolId() {
        // Try to determine current tool from URL or page title
        const url = window.location.href;
        const tool = this.tools.find(t => url.includes(t.file));
        return tool ? tool.id : 'unknown';
    }
    
    generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
    
    // Navigation Helpers
    navigateToTool(toolId, params = {}) {
        const tool = this.tools.find(t => t.id === toolId);
        if (!tool) return false;
        
        let url = tool.file;
        if (Object.keys(params).length > 0) {
            const urlParams = new URLSearchParams(params);
            url += '?' + urlParams.toString();
        }
        
        window.open(url, '_blank');
        return true;
    }
    
    getToolsByCategory(category) {
        return this.tools.filter(t => t.category === category);
    }
    
    // Status and Health
    getConnectionStatus() {
        const hubSettings = this.getHubSettings();
        return {
            hasApiBase: !!hubSettings.apiBase,
            hasModel: !!hubSettings.model,
            interconnectEnabled: Object.keys(this.settings).length > 0,
            toolsCount: this.tools.length,
            dataConnections: this.tools.filter(t => 
                localStorage.getItem(`${this.DATA_PREFIX}${t.id}`) !== null
            ).length
        };
    }
    
    cleanup() {
        if (this.syncInterval) {
            clearInterval(this.syncInterval);
        }
    }
}

// Global instance
window.AIToolsInterconnect = new AIToolsInterconnect();

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AIToolsInterconnect;
}
