document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    
    if (themeToggle) {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            html.classList.add('dark-mode');
        }
        
        themeToggle.addEventListener('click', function() {
            html.classList.toggle('dark-mode');
            const isDark = html.classList.contains('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }
    
    // Search toggle functionality
    const searchToggle = document.getElementById('search-toggle');
    if (searchToggle) {
        searchToggle.addEventListener('click', function() {
            document.getElementById('search-input').focus();
        });
    }
    
    // Mobile menu toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navItems = document.querySelector('.nav-items');
    
    if (mobileMenu && navItems) {
        mobileMenu.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            mobileMenu.setAttribute('aria-expanded', !isExpanded);
            navItems.style.display = isExpanded ? 'none' : 'flex';
        });
    }
    
    // Search functionality
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const articleCards = document.querySelectorAll('.article-card');
    const noResults = document.getElementById('no-results');
    
    if (searchForm && searchInput) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            performSearch();
        });
        
        searchInput.addEventListener('input', function() {
            performSearch();
        });
    }
    
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        let visibleCount = 0;
        
        articleCards.forEach(card => {
            const title = card.querySelector('h3 a').textContent.toLowerCase();
            const category = card.getAttribute('data-category') || '';
            const description = card.querySelector('p').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || category.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });
        
        if (noResults) {
            if (visibleCount === 0 && searchTerm !== '') {
                noResults.hidden = false;
            } else {
                noResults.hidden = true;
            }
        }
    }
    
    // Category filtering
    const categoryButtons = document.querySelectorAll('[data-filter]');
    const allArticles = document.querySelectorAll('.article-card');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active state
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter articles
            allArticles.forEach(article => {
                const articleCategory = article.getAttribute('data-category');
                
                if (filter === 'All' || filter === 'All articles') {
                    article.style.display = 'block';
                } else if (articleCategory === filter) {
                    article.style.display = 'block';
                } else {
                    article.style.display = 'none';
                }
            });
        });
    });
    
    // Hero navigation dots
    const heroDots = document.querySelectorAll('.hero-dots i');
    if (heroDots.length > 0) {
        let currentDot = 0;
        
        function updateDots() {
            heroDots.forEach(dot => dot.classList.remove('active'));
            heroDots[currentDot].classList.add('active');
        }
        
        // Auto-advance dots every 5 seconds
        setInterval(() => {
            currentDot = (currentDot + 1) % heroDots.length;
            updateDots();
        }, 5000);
        
        updateDots();
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});