// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    
    if (document.body.classList.contains('light-theme')) {
        // Light theme styles
        document.body.style.background = 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)';
        document.body.style.color = '#1e293b';
        themeIcon.className = 'fas fa-sun';
        themeToggle.style.background = 'linear-gradient(90deg, #f59e0b, #fbbf24)';
    } else {
        // Dark theme (default)
        document.body.style.background = 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)';
        document.body.style.color = '#e2e8f0';
        themeIcon.className = 'fas fa-moon';
        themeToggle.style.background = 'linear-gradient(90deg, #3b82f6, #8b5cf6)';
    }
});

// Interactive buttons
document.querySelectorAll('.btn-approve, .btn-review').forEach(button => {
    button.addEventListener('click', function() {
        const originalText = this.textContent;
        this.textContent = 'Processing...';
        this.style.opacity = '0.7';
        
        setTimeout(() => {
            this.textContent = '✓ Done';
            this.style.background = 'rgba(34, 197, 94, 0.2)';
            this.style.color = '#22c55e';
            this.style.borderColor = '#22c55e';
            
            // Remove after 2 seconds
            setTimeout(() => {
                this.style.display = 'none';
            }, 2000);
        }, 1000);
    });
});

// Fake chart animation
document.querySelectorAll('.bar').forEach(bar => {
    const originalHeight = bar.style.height;
    bar.style.height = '0%';
    
    setTimeout(() => {
        bar.style.height = originalHeight;
    }, 500);
});

// Search box focus effect
const searchInput = document.querySelector('.search-box input');
searchInput.addEventListener('focus', () => {
    document.querySelector('.search-box').style.borderColor = '#3b82f6';
    document.querySelector('.search-box').style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
});

searchInput.addEventListener('blur', () => {
    document.querySelector('.search-box').style.borderColor = 'rgba(255, 255, 255, 0.1)';
    document.querySelector('.search-box').style.boxShadow = 'none';
});
