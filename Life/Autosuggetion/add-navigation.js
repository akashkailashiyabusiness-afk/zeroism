// Script to add shared navigation to pages that don't have it
// This can be run in the browser console on any page

function addSharedNavigation() {
    // Check if navigation already exists
    if (document.getElementById('shared-navigation')) {
        console.log('Navigation already exists');
        return;
    }

    // Create script element to load shared navigation
    const script = document.createElement('script');
    script.src = 'shared-navigation.js';
    script.onload = function() {
        console.log('Shared navigation loaded successfully');
    };
    
    // Add to head
    document.head.appendChild(script);
}

// Auto-run when script loads
addSharedNavigation();