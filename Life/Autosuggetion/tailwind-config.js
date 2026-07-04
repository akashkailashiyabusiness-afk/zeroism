// Unified Tailwind Configuration for Life Mastery Hub
const tailwindConfig = `
<script src="https://cdn.tailwindcss.com"></script>
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

// Function to inject Tailwind config into any page
function injectTailwindConfig() {
    // Check if already injected
    if (document.getElementById('tailwind-config')) {
        return;
    }
    
    // Create container for Tailwind config
    const configContainer = document.createElement('div');
    configContainer.id = 'tailwind-config';
    configContainer.innerHTML = tailwindConfig;
    
    // Insert into head
    document.head.appendChild(configContainer);
}

// Auto-inject when script loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectTailwindConfig);
} else {
    injectTailwindConfig();
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { tailwindConfig, injectTailwindConfig };
}