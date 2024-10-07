document.getElementById('Signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    var formData = new FormData(this);
    var errorMessage = document.getElementById('error-message');

    // Basic validation
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
        errorMessage.style.display = 'block';
        return;
    }

    if (password.length < 8) {
        errorMessage.textContent = 'Password must be at least 8 characters.';
        errorMessage.style.display = 'block';
        return;
    }

    // Clear previous error message
    errorMessage.style.display = 'none';

    // Send data using AJAX
    fetch('../Backend/signup.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        // Handle response from the server
        console.log(data); // Log the response
        errorMessage.style.display = 'block';
        errorMessage.innerHTML = data; // Set the response message
    })
    .catch(error => {
        console.error('Error:', error);
        errorMessage.textContent = 'There was an error with the request.';
        errorMessage.style.display = 'block';
    });
});
