// TODO: Implement the password generation logic based on user input

// Password generator logic
const generatePassword = (length, options) => {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    let availableChars = "";

    if (options.useUppercase) availableChars += uppercase;
    if (options.useLowercase) availableChars += lowercase;
    if (options.useNumbers) availableChars += numbers;
    if (options.useSpecialChars) availableChars += specialChars;

    if (!availableChars) {
        return "Please select at least one character type!";
    }

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * availableChars.length);
        generatedPassword += availableChars[randomIndex];
    }

    return generatedPassword;
}

// Handling DOM interaction
document.getElementById("generateBtn").addEventListener("click", function() {
    const length = parseInt(document.getElementById("length").value);
    const options = {
        useUppercase: document.getElementById("includeUppercase").checked,
        useLowercase: document.getElementById("includeLowercase").checked,
        useNumbers: document.getElementById("includeNumbers").checked,
        useSpecialChars: document.getElementById("includeSpecialChars").checked
    };

    const password = generatePassword(length, options);
    document.getElementById("passwordOutput").value = password;
});

// Copy password to clipboard
document.getElementById("copyBtn").addEventListener("click", function() {
    const passwordField = document.getElementById("passwordOutput");
    passwordField.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
});

module.exports = { generatePassword };