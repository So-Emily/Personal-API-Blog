$(document).ready(function() {
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    // Create the row container outside the loop
    const rowElement = $('<div class="row"></div>');

    posts.forEach(function(post) {
        const postElement = `
            <div class="col-md-6">
                <div class="card bg-light text-dark form-title">
                    <div class="card-header">
                        <h3 class="card-title form-label">${post.title}</h3>
                    </div>
                    <p class="card-content text-dark form-label">${post.content}</p>
                    <p class="card-author text-dark form-label">xoxo, ${post.username}</p>
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

// Function to change the dark mode of the blog pgage
// Wanted different background colors and this is where I got
document.addEventListener('DOMContentLoaded', function() {
    const modeToggle = document.getElementById('modeToggle');
    // Define Colors to use
    const lightColor = '#e4aed3';
    const darkColor = '#703d60';
    const lightTextColor = '#000'; // Light mode text color
    const darkTextColor = '#fff'; // Dark mode text color

    // Define the Shadows
    const lightShadow = '2px 2px 2px #f0f0f0';
    const darkShadow = '2px 2px 4px #000000'; // Example shadow for dark mode

    modeToggle.addEventListener('click', function() {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        const titleElements = document.querySelectorAll('.title'); // Assuming the title has a class 'title'
        const cardHeaders = document.querySelectorAll('.card-header'); // Select all card headers

        // Set the background, title colors, and title shadows based on the mode
        if (isDarkMode) {
            document.body.style.backgroundColor = darkColor;
            titleElements.forEach(element => {
                element.style.color = lightColor; 
                element.style.textShadow = darkShadow; 
            });
            cardHeaders.forEach(header => {
                header.style.backgroundColor = lightColor; // Dark mode background for card headers
                header.style.color = lightTextColor; // Dark mode text color for card headers
            });
            modeToggle.innerHTML = '<img src="./assets/images/light-mode-icon.png" class="light-mode-icon" alt="Light Mode">';
        } else {
            document.body.style.backgroundColor = lightColor;
            titleElements.forEach(element => {
                element.style.color = darkColor;
                element.style.textShadow = lightShadow; 
            });
            cardHeaders.forEach(header => {
                header.style.backgroundColor = darkColor; // Light mode background for card headers
                header.style.color = darkTextColor; // Light mode text color for card headers
            });
            modeToggle.innerHTML = '<img src="./assets/images/dark-mode-icon.png" class="dark-mode-icon" alt="Dark Mode">';
        }
    });
});