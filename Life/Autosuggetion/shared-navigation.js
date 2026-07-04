// Shared Navigation System for Life Mastery Collection
const navigationHTML = `
<nav class="fixed w-full z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 transition-all duration-300 shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
            <!-- Logo/Brand -->
            <div class="flex items-center gap-3 group cursor-pointer" onclick="window.location.href='index.html'">
                <div class="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <span class="text-white font-bold text-lg">∞</span>
                </div>
                <span class="font-bold text-xl text-white group-hover:text-purple-400 transition-colors">Life Mastery Hub</span>
            </div>
            
            <!-- Desktop Navigation -->
            <div class="hidden lg:flex items-center space-x-1">
                <!-- Core Philosophy -->
                <div class="relative group">
                    <button class="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1">
                        Philosophy
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <div class="absolute top-full left-0 mt-1 w-48 bg-slate-800 border border-slate-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <a href="osho.html" class="block px-4 py-3 text-sm text-slate-300 hover:text-orange-400 hover:bg-slate-700 transition-colors rounded-t-lg">🧘 Osho - Awareness</a>
                        <a href="bruslee.html" class="block px-4 py-3 text-sm text-slate-300 hover:text-yellow-400 hover:bg-slate-700 transition-colors">⚡ Bruce Lee - Focus</a>
                        <a href="Osho's Deep Archives.html" class="block px-4 py-3 text-sm text-slate-300 hover:text-purple-400 hover:bg-slate-700 transition-colors rounded-b-lg">📚 Deep Archives</a>
                    </div>
                </div>
                
                <!-- Thinking Tools -->
                <div class="relative group">
                    <button class="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1">
                        Thinking
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <div class="absolute top-full left-0 mt-1 w-48 bg-slate-800 border border-slate-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <a href="How To Think.html" class="block px-4 py-3 text-sm text-slate-300 hover:text-blue-400 hover:bg-slate-700 transition-colors rounded-t-lg">🧠 How To Think</a>
                        <a href="Solve Any Problem.html" class="block px-4 py-3 text-sm text-slate-300 hover:text-green-400 hover:bg-slate-700 transition-colors">🎯 Problem Solving</a>
                        <a href="Thinking Traps.html" class="block px-4 py-3 text-sm text-slate-300 hover:text-red-400 hover:bg-slate-700 transition-colors">⚠️ Thinking Traps</a>
                        <a href="Learning Theories.html" class="block px-4 py-3 text-sm text-slate-300 hover:text-indigo-400 hover:bg-slate-700 transition-colors rounded-b-lg">📖 Learning Theories</a>
                    </div>
                </div>
                
                <!-- Life Systems -->
                <div class="relative group">
                    <button class="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1">
                        Systems
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <div class="absolute top-full left-0 mt-1 w-48 bg-slate-800 border border-slate-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <a href="lifeos.html" class="block px-4 py-3 text-sm text-slate-300 hover:text-cyan-400 hover:bg-slate-700 transition-colors rounded-t-lg">💻 Life OS</a>
                        <a href="master-life-system.html" class="block px-4 py-3 text-sm text-slate-300 hover:text-purple-400 hover:bg-slate-700 transition-colors">⚙️ Master System</a>
                        <a href="daily-practice-tracker.html" class="block px-4 py-3 text-sm text-slate-300 hover:text-emerald-400 hover:bg-slate-700 transition-colors">📅 Daily Practice</a>
                        <a href="money.html" class="block px-4 py-3 text-sm text-slate-300 hover:text-yellow-400 hover:bg-slate-700 transition-colors rounded-b-lg">💰 Money Wisdom</a>
                    </div>
                </div>
                
                <!-- Psychology -->
                <div class="relative group">
                    <button class="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1">
                        Psychology
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <div class="absolute top-full left-0 mt-1 w-48 bg-slate-800 border border-slate-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <a href="Psychological Lifehacks.html" class="block px-4 py-3 text-sm text-slate-300 hover:text-pink-400 hover:bg-slate-700 transition-colors rounded-t-lg">🧠 Life Hacks</a>
                        <a href="Public Speaking.html" class="block px-4 py-3 text-sm text-slate-300 hover:text-blue-400 hover:bg-slate-700 transition-colors">🎤 Public Speaking</a>
                        <a href="life perspective.html" class="block px-4 py-3 text-sm text-slate-300 hover:text-green-400 hover:bg-slate-700 transition-colors rounded-b-lg">🌅 Life Perspective</a>
                    </div>
                </div>
                
                <!-- Wisdom -->
                <div class="relative group">
                    <button class="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1">
                        Wisdom
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <div class="absolute top-full left-0 mt-1 w-48 bg-slate-800 border border-slate-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <a href="20+ Paradoxes.html" class="block px-4 py-3 text-sm text-slate-300 hover:text-purple-400 hover:bg-slate-700 transition-colors rounded-t-lg">🔄 Paradoxes</a>
                        <a href="man with a hammer.html" class="block px-4 py-3 text-sm text-slate-300 hover:text-orange-400 hover:bg-slate-700 transition-colors rounded-b-lg">🔨 Mental Models</a>
                    </div>
                </div>
                
                <!-- Ultimate Tools -->
                <a href="ultimate-life-toolkit.html" class="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 ml-2">
                    🚀 Ultimate Toolkit
                </a>
            </div>
            
            <!-- Mobile menu button -->
            <div class="lg:hidden">
                <button id="mobile-menu-button" class="text-slate-300 hover:text-white p-2 rounded-md">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>
        
        <!-- Mobile Navigation Menu -->
        <div id="mobile-menu" class="lg:hidden hidden bg-slate-800 border-t border-slate-700">
            <div class="px-2 pt-2 pb-3 space-y-1">
                <div class="border-b border-slate-700 pb-2 mb-2">
                    <div class="text-slate-400 text-xs uppercase tracking-wider px-3 py-2">Philosophy</div>
                    <a href="osho.html" class="block px-3 py-2 text-slate-300 hover:text-orange-400 hover:bg-slate-700 rounded">🧘 Osho - Awareness</a>
                    <a href="bruslee.html" class="block px-3 py-2 text-slate-300 hover:text-yellow-400 hover:bg-slate-700 rounded">⚡ Bruce Lee - Focus</a>
                    <a href="Osho's Deep Archives.html" class="block px-3 py-2 text-slate-300 hover:text-purple-400 hover:bg-slate-700 rounded">📚 Deep Archives</a>
                </div>
                
                <div class="border-b border-slate-700 pb-2 mb-2">
                    <div class="text-slate-400 text-xs uppercase tracking-wider px-3 py-2">Thinking</div>
                    <a href="How To Think.html" class="block px-3 py-2 text-slate-300 hover:text-blue-400 hover:bg-slate-700 rounded">🧠 How To Think</a>
                    <a href="Solve Any Problem.html" class="block px-3 py-2 text-slate-300 hover:text-green-400 hover:bg-slate-700 rounded">🎯 Problem Solving</a>
                    <a href="Thinking Traps.html" class="block px-3 py-2 text-slate-300 hover:text-red-400 hover:bg-slate-700 rounded">⚠️ Thinking Traps</a>
                    <a href="Learning Theories.html" class="block px-3 py-2 text-slate-300 hover:text-indigo-400 hover:bg-slate-700 rounded">📖 Learning Theories</a>
                </div>
                
                <div class="border-b border-slate-700 pb-2 mb-2">
                    <div class="text-slate-400 text-xs uppercase tracking-wider px-3 py-2">Systems</div>
                    <a href="lifeos.html" class="block px-3 py-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-700 rounded">💻 Life OS</a>
                    <a href="master-life-system.html" class="block px-3 py-2 text-slate-300 hover:text-purple-400 hover:bg-slate-700 rounded">⚙️ Master System</a>
                    <a href="daily-practice-tracker.html" class="block px-3 py-2 text-slate-300 hover:text-emerald-400 hover:bg-slate-700 rounded">📅 Daily Practice</a>
                    <a href="money.html" class="block px-3 py-2 text-slate-300 hover:text-yellow-400 hover:bg-slate-700 rounded">💰 Money Wisdom</a>
                </div>
                
                <div class="border-b border-slate-700 pb-2 mb-2">
                    <div class="text-slate-400 text-xs uppercase tracking-wider px-3 py-2">Psychology</div>
                    <a href="Psychological Lifehacks.html" class="block px-3 py-2 text-slate-300 hover:text-pink-400 hover:bg-slate-700 rounded">🧠 Life Hacks</a>
                    <a href="Public Speaking.html" class="block px-3 py-2 text-slate-300 hover:text-blue-400 hover:bg-slate-700 rounded">🎤 Public Speaking</a>
                    <a href="life perspective.html" class="block px-3 py-2 text-slate-300 hover:text-green-400 hover:bg-slate-700 rounded">🌅 Life Perspective</a>
                </div>
                
                <div class="border-b border-slate-700 pb-2 mb-2">
                    <div class="text-slate-400 text-xs uppercase tracking-wider px-3 py-2">Wisdom</div>
                    <a href="20+ Paradoxes.html" class="block px-3 py-2 text-slate-300 hover:text-purple-400 hover:bg-slate-700 rounded">🔄 Paradoxes</a>
                    <a href="man with a hammer.html" class="block px-3 py-2 text-slate-300 hover:text-orange-400 hover:bg-slate-700 rounded">🔨 Mental Models</a>
                </div>
                
                <a href="ultimate-life-toolkit.html" class="block mx-3 mt-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-3 rounded-lg text-center font-semibold hover:from-purple-700 hover:to-blue-700 transition-all">
                    🚀 Ultimate Toolkit
                </a>
            </div>
        </div>
    </div>
</nav>
`;

// Add CSS styles to prevent navigation issues
const navStyles = `
<style>
/* Navigation specific styles */
#shared-navigation {
    position: relative;
    z-index: 9999;
}

#shared-navigation nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
}

/* Ensure dropdowns appear above everything */
#shared-navigation .group:hover > div {
    z-index: 10000;
}

/* Prevent body scroll when mobile menu is open */
body.mobile-menu-open {
    overflow: hidden;
}

/* Smooth transitions for dropdowns */
#shared-navigation .group > div {
    transform: translateY(-10px);
    transition: all 0.2s ease-in-out;
}

#shared-navigation .group:hover > div {
    transform: translateY(0);
}

/* Mobile menu improvements */
#mobile-menu {
    max-height: calc(100vh - 64px);
    overflow-y: auto;
}

/* Fix for pages with existing navigation */
body > nav:not(#shared-navigation nav) {
    display: none !important;
}
</style>
`;

// Function to inject navigation into any page
function injectNavigation() {
    // Remove any existing navigation to prevent duplicates
    const existingNav = document.getElementById('shared-navigation');
    if (existingNav) {
        existingNav.remove();
    }
    
    // Remove existing navigation styles
    const existingStyles = document.getElementById('shared-nav-styles');
    if (existingStyles) {
        existingStyles.remove();
    }
    
    // Create style element
    const styleElement = document.createElement('div');
    styleElement.id = 'shared-nav-styles';
    styleElement.innerHTML = navStyles;
    document.head.appendChild(styleElement);
    
    // Create a container for the navigation
    const navContainer = document.createElement('div');
    navContainer.id = 'shared-navigation';
    navContainer.innerHTML = navigationHTML;
    
    // Insert at the beginning of body
    document.body.insertBefore(navContainer, document.body.firstChild);
    
    // Add padding to body to account for fixed navigation
    document.body.style.paddingTop = '64px';
    
    // Setup mobile menu functionality
    setupMobileMenu();
}

// Enhanced mobile menu functionality
function setupMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function(e) {
            e.stopPropagation();
            mobileMenu.classList.toggle('hidden');
            document.body.classList.toggle('mobile-menu-open');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
                mobileMenu.classList.add('hidden');
                document.body.classList.remove('mobile-menu-open');
            }
        });
        
        // Close mobile menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                document.body.classList.remove('mobile-menu-open');
            });
        });
    }
}

// Auto-inject navigation when script loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectNavigation);
} else {
    injectNavigation();
}