$(document).ready(function() {
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    posts.forEach(function(post) {
        const postElement = `
            <div class="card bg-light text-dark">
                <div class="card-header">
                    <h3 class="text-decoration-underline">${post.title}</h3>
                </div>

                <p class="card-content bg-light text-dark">${post.content}</p>

                <p class="card-author bg-light text-dark">- ${post.username}</p>
            </div>
        `;
        $('#blog-container').append(postElement);
    });
});

function goBack() {
    window.history.back();
}