// Script to update all pages to use consistent Tailwind CSS
const standardTailwindHead = `
<script src="https://cdn.tailwindcss.com"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700&display=swap" rel="stylesheet">
<script>
    tailwind.config = {
        theme: {
            extend: {
                fontFamily: {
                    sans: ['Inter', 'system-ui', 'sans-serif'],
                    serif: ['Playfair Display', 'Georgia', 'serif'],
                    mono: ['JetBrains Mono', 'Consolas', 'monospace'],
                },
                colors: {
                    // Brand Colors
                    brand: {
                        purple: '#8B5CF6',
                        blue: '#3B82F6',
                        gold: '#F59E0B',
                        green: '#10B981',
                        red: '#EF4444',
                        orange: '#F97316',
                        pink: '#EC4899',
                        cyan: '#06B6D4',
                        indigo: '#6366F1',
                        yellow: '#EAB308',
                    },
                    // Osho Theme
                    osho: {
                        maroon: '#7A1C1C',
                        orange: '#D95D39',
                        gold: '#D4AF37',
                        dark: '#161212',
                        cream: '#FDF8F5',
                        card: '#241C1C'
                    },
                    // Bruce Lee Theme
                    bruce: {
                        yellow: '#FACC15',
                        black: '#09090B',
                        gray: '#27272A'
                    },
                    // Wisdom Theme
                    wisdom: {
                        gold: '#F59E0B',
                        purple: '#8B5CF6',
                        blue: '#3B82F6',
                        green: '#10B981',
                        red: '#EF4444',
                        dark: '#0F172A',
                        light: '#F8FAFC'
                    }
                },
                animation: {
                    'fade-in': 'fadeIn 0.5s ease-in-out',
                    'fade-in-up': 'fadeInUp 0.6s ease-out',
                    'slide-in': 'slideIn 0.4s ease-out',
                    'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                    'float': 'float 6s ease-in-out infinite',
                    'glow': 'glow 2s ease-in-out infinite alternate',
                },
                keyframes: {
                    fadeIn: {
                        '0%': { opacity: '0' },
                        '100%': { opacity: '1' },
                    },
                    fadeInUp: {
                        '0%': { opacity: '0', transform: 'translateY(20px)' },
                        '100%': { opacity: '1', transform: 'translateY(0)' },
                    },
                    slideIn: {
                        '0%': { transform: 'translateX(-100%)' },
                        '100%': { transform: 'translateX(0)' },
                    },
                    float: {
                        '0%, 100%': { transform: 'translateY(0px)' },
                        '50%': { transform: 'translateY(-20px)' },
                    },
                    glow: {
                        '0%': { boxShadow: '0 0 5px rgba(139, 92, 246, 0.5)' },
                        '100%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.8)' },
                    }
                },
                backdropBlur: {
                    xs: '2px',
                },
                backgroundImage: {
                    'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                    'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                },
            },
        },
        plugins: [],
    }
</script>
`;

// Common CSS utilities
const commonStyles = `
<style>
    .gradient-text {
        background: linear-gradient(135deg, #8B5CF6, #3B82F6, #10B981);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
    
    .card-hover {
        transition: all 0.3s ease;
    }
    
    .card-hover:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }
    
    .glass {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    .glass-button {
        background: rgba(139, 92, 246, 0.1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(139, 92, 246, 0.3);
        transition: all 0.3s ease;
    }
    
    .glass-button:hover {
        background: rgba(139, 92, 246, 0.2);
        border-color: rgba(139, 92, 246, 0.5);
        transform: translateY(-2px);
    }
    
    .glow-hover:hover {
        box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
    }
</style>
`;

// Function to inject standard Tailwind setup
function injectStandardTailwind() {
    // Remove existing Tailwind script if present
    const existingScript = document.querySelector('script[src*="tailwindcss"]');
    if (existingScript) {
        existingScript.remove();
    }
    
    // Remove existing Tailwind config
    const existingConfig = document.querySelector('script:not([src])');
    if (existingConfig && existingConfig.textContent.includes('tailwind.config')) {
        existingConfig.remove();
    }
    
    // Inject standard setup
    const headContent = document.createElement('div');
    headContent.innerHTML = standardTailwindHead + commonStyles;
    
    // Move all children to head
    while (headContent.firstChild) {
        document.head.appendChild(headContent.firstChild);
    }
}

// Auto-inject when script loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectStandardTailwind);
} else {
    injectStandardTailwind();
}

// Export for manual use
if (typeof window !== 'undefined') {
    window.updateToTailwind = injectStandardTailwind;
}