$(document).ready(function() {
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    // Create the row container outside the loop
    const rowElement = $('<div class="row"></div>');

    posts.forEach(function(post) {
        const postElement = `
            <div class="col-md-6">
                <div class="card bg-light text-dark form-title">
                    <div class="card-header">
                        <h3 class="card-title text-light form-label">${post.title}</h3>
                    </div>
                    <p class="card-content bg-light text-dark form-label">${post.content}</p>
                    <p class="card-author bg-light text-dark form-label">xoxo, ${post.username}</p>
                </div>
            </div>    
        `;
        // Append each post as a column to the rowElement
        rowElement.append(postElement);
    });

    // Append the rowElement to the blog-container
    $('#blog-container').append(rowElement);
});

function goBack() {
    window.history.back();
}


document.addEventListener('DOMContentLoaded', function() {
    const modeToggle = document.getElementById('modeToggle');

    modeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');

        // Optional: Change the icon or button appearance based on the mode
        if (document.body.classList.contains('dark-mode')) {
            modeToggle.innerHTML = '<img src="./assets/images/light-mode-icon.png" class="light-mode-icon" alt="Light Mode">';
        } else {
            modeToggle.innerHTML = '<img src="./assets/images/dark-mode-icon.png" class="dark-mode-icon" alt="Dark Mode">';
        }
    });
});