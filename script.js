// Example: Console log when the website is loaded
document.addEventListener('DOMContentLoaded', (event) => {
    console.log("Website fully loaded and parsed");
});
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.createElement('button');
    themeToggleButton.textContent = 'Toggle Dark/Light Mode';
    document.body.insertBefore(themeToggleButton, document.body.firstChild);

    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});
//when the website is loaded
document.addEventListener('DOMContentLoaded', (event) => {
    console.log("Website fully loaded and parsed");

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Theme toggle functionality
    const themeToggleButton = document.getElementById('theme-toggle');
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });
    }
});
