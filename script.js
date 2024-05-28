function validateEmails() {
    var email = document.getElementById('email').value;
    var confirmEmail = document.getElementById('confirmEmail').value;
    var emailError = document.getElementById('emailError');

    if (email === confirmEmail) {
        emailError.textContent = ''; // Clear error message if emails match
        return true; // Allow form submission
    } else {
        emailError.textContent = 'Emails do not match'; // Display error message
        return false; // Prevent form submission
    }
}
