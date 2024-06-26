$(document).ready(function() {
    $('form').submit(function(event) {
        event.preventDefault(); // Prevent form from submitting traditionally

        const post = {
            username: $('#username').val(),
            title: $('#title').val(),
            content: $('#content').val()
        };

        // Retrieve existing posts from localStorage and add the new one
        let posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        posts.push(post);
        localStorage.setItem('blogPosts', JSON.stringify(posts));

        // Redirect to blog.html to display all posts
        window.location.href = 'blog.html';
    });
});