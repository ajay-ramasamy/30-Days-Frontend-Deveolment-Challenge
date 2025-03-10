document.addEventListener('DOMContentLoaded', () => {
    const passwordField = document.getElementById('password');
    const generateButton = document.querySelector('button');
    const copyIcon = document.querySelector('.display img');

    // Function to generate a random password
    function generatePassword() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-';
        const passwordLength = 12;
        let password = '';
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }
        return password;
    }

    // Event listener for the "Generate Password" button
    generateButton.addEventListener('click', () => {
        const newPassword = generatePassword();
        passwordField.value = newPassword;
    });

    // Event listener for the "Copy" icon
    copyIcon.addEventListener('click', () => {
        if (passwordField.value) {
            navigator.clipboard.writeText(passwordField.value)
                .then(() => alert('Password copied to clipboard!'))
                .catch(err => alert('Failed to copy password.'));
        } else {
            alert('Generate a password first!');
        }
    });
});
