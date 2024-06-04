// Create an object to store the blog data
const blogData = {
    username: '',
    title: '',
    content: ''
};

// Function to handle the form submission
function handleSubmit(event) {
    event.preventDefault();

    // Get the values from the input fields
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    // Update the blog data object
    blogData.username = username;
    blogData.title = title;
    blogData.content = content;

    // Save the blog data to localStorage
    localStorage.setItem('blogData', JSON.stringify(blogData));

    // Clear the input fields
    document.getElementById('username').value = '';
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';

    // Redirect to the submissions page
    window.location.href = 'blog.html';
}

// Add an event listener to the form submit button
document.getElementById('submit').addEventListener('click', handleSubmit);

console.log(username, title, content);

