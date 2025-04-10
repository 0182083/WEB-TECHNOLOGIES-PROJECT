function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("emailError").innerHTML = "";

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!validateEmail(email)) {
        document.getElementById("emailError").innerHTML = "Please enter a valid email address.";
        return;
    }


    alert("Login successful!");
});

function forgotPassword() {
    window.location.href = "forgot-password.html";
}