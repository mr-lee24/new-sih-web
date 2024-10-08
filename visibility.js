// Mock function to check if a user is logged in
function isLoggedIn() {
    // Simulate a login status (this can be changed to true or false to test)
    // In real applications, this would be determined by session or token storage.
    return false; // Set to 'true' if user is logged in, 'false' otherwise.
}

window.onload = function() {
    // Get the login and signup buttons by their IDs
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');

    // Check if the user is logged in
    if (isLoggedIn()) {
        // If logged in, hide the Login button and show Sign Up button
        loginBtn.style.display = 'none';  // Hide login button
        signupBtn.style.display = 'none'; // Hide sign up (you can show something else if needed)
    } else {
        // If not logged in, show both buttons
        loginBtn.style.display = 'inline-block';
        signupBtn.style.display = 'inline-block';
    }
};

// Simulate login state (you can replace this with actual login logic)
let isLoggedIn = false; // Set to 'true' when logged in

document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('login-btn');
    const signupButton = document.getElementById('signup-btn');

    if (isLoggedIn) {
        // If user is logged in, hide login and sign up buttons
        loginButton.style.display = 'none';
        signupButton.style.display = 'none';
    }
});

