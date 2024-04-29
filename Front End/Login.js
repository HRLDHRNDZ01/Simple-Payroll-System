document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // You can perform login validation here
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // For demonstration purposes, assume login is successful
    // You can replace this with your actual login logic
    var loginSuccessful = true;

    if (loginSuccessful) {
        // Redirect to the homepage after successful login
        window.location.href = '../Front End/Homepage.html';
    }
});