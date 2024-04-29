document.getElementById('Signup-form').addEventListener('submit', function(event){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    var errorMessage = document.getElementById('error-message');

    if(password !== confirmPassword || password.length < 8){
        if(password !== confirmPassword){
            errorMessage.textContent = 'Passwords do not match';
        } else {
            errorMessage.textContent = 'Password must be at least 8 characters.';
        }
        event.preventDefault();
        return;
    }

    if (/\d/.test(username) || /[^\w\s]/.test(username)) {
        errorMessage.textContent = "Username cannot contain numbers or special characters";
        event.preventDefault(); 
        return;
    }

    errorMessage.textContent = "";

});
