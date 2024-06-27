document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body');
    const formTitle = document.querySelector('.form-title');
    const formLabels = document.querySelectorAll('.form-label');

    if (!body || !formTitle || !formLabels.length) {
        console.error('One or more elements are missing!');
        return;
    }

    const modeToggle = document.getElementById('modeToggle');
    const darkModeIcon = modeToggle.querySelector('.dark-mode');

    modeToggle.addEventListener('click', function() {
        // Toggle dark mode
        if (body.classList.contains('bg-dark')) {
            body.classList.replace('bg-dark', 'bg-light');
            body.classList.replace('text-light', 'text-dark');
            formTitle.classList.replace('text-light', 'text-dark');
            formLabels.forEach(label => label.classList.replace('text-light', 'text-dark'));
            
            // Change the image here
            modeToggle.innerHTML = '<img src="./assets/images/light-mode-icon.png" class="light-mode-icon" alt="Light Mode">';
            
        // Toggle light mode
        } else {
            body.classList.replace('bg-light', 'bg-dark');
            body.classList.replace('text-dark', 'text-light');
            formTitle.classList.replace('text-dark', 'text-light');
            formLabels.forEach(label => label.classList.replace('text-dark', 'text-light'));
            
            // Change the image here
            modeToggle.innerHTML = '<img src="./assets/images/dark-mode-icon.png" class="dark-mode-icon" alt="Dark Mode">';
        }
    });
});
