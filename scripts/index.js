// Function to handle login
function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple username and password check
    if (username === 'berto' && password === 'berto') {
        alert('Login successful!');
        // Redirect to admin.html
        window.location.href = 'admin.html';
    } else {
        alert('Invalid username or password');
    }
}

// Add event listener to the login form
document.getElementById('login-form').addEventListener('submit', handleLogin);
