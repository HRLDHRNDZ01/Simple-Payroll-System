document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById('edit-profile-form');
    const confirmationMessage = document.querySelector('.confirmation-message-container');

    confirmationMessage.style.display = 'none';

    form.addEventListener('submit', function(event){
        event.preventDefault();
        confirmationMessage.style.display = 'block';
    });

    document.getElementById('ok-button').addEventListener('click', function(){
        window.location.href = 'Homepage.html';
    });
});