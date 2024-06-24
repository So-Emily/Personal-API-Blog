document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body');
    const icon = document.querySelector('.icon-selector');
    const formTitle = document.querySelector('.form-title');
    const formLabels = document.querySelectorAll('.form-label');

    if (!body || !icon || !formTitle || !formLabels.length) {
        console.error('One or more elements are missing!');
        return;
    }

    document.getElementById('modeToggle').addEventListener('click', function() {
        const body = document.body;
        const icon = this.querySelector('i');

        if (icon) {
            icon.classList.replace('fa-moon', 'fa-sun');
        }

        if (body.classList.contains('bg-dark')) {
            body.classList.replace('bg-dark', 'bg-light');
            body.classList.replace('text-light', 'text-dark');
            this.textContent = 'Toggle Light Mode';

            formTitle.classList.replace('text-light', 'text-dark');
            formLabels.forEach(label => label.classList.replace('text-light', 'text-dark'));
        } else {
            body.classList.replace('bg-light', 'bg-dark');
            body.classList.replace('text-dark', 'text-light');
            this.textContent = 'Toggle Dark Mode';

            formTitle.classList.replace('text-dark', 'text-light');
            formLabels.forEach(label => label.classList.replace('text-dark', 'text-light'));
        }

        if (body.classList.contains('bg-dark')) {
            this.style.backgroundColor = '#333';
            
        } else {
            this.style.backgroundColor = '#FFF';
        }
    });
});
