// Dark mode toggle functionality
(function() {
    const THEME_KEY = 'theme-preference';
    const DARK_THEME = 'dark';
    const LIGHT_THEME = 'light';
    
    function getPreferredTheme() {
        if (localStorage.getItem(THEME_KEY)) {
            return localStorage.getItem(THEME_KEY);
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK_THEME : LIGHT_THEME;
    }
    
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(THEME_KEY, theme);
        updateToggleButton(theme);
    }
    
    function toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme') || getPreferredTheme();
        const newTheme = current === DARK_THEME ? LIGHT_THEME : DARK_THEME;
        setTheme(newTheme);
    }
    
    function updateToggleButton(theme) {
        const button = document.getElementById('theme-toggle');
        if (button) {
            button.querySelector('.theme-icon').textContent = theme === DARK_THEME ? '☀️' : '🌙';
        }
    }
    
    // Initialize theme on page load
    document.addEventListener('DOMContentLoaded', function() {
        const preferredTheme = getPreferredTheme();
        setTheme(preferredTheme);
        
        const toggleButton = document.getElementById('theme-toggle');
        if (toggleButton) {
            toggleButton.addEventListener('click', toggleTheme);
        }
    });
})();
