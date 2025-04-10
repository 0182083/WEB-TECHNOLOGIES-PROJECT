function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    document.getElementById("newEmailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";

    const email = document.getElementById("newEmail").value;
    const password = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (!validateEmail(email)) {
        document.getElementById("newEmailError").innerHTML = "Please enter a valid email address.";
        return;
    }

    if (password !== confirmPassword) {
        document.getElementById("passwordError").innerHTML = "Passwords do not match.";
        return;
    }

    alert("Registration successful!");
});