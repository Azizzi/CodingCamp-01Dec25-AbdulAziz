welcomeMessage();

/// Function to display welcome message
function welcomeMessage() {
    /// Prompt user for their name
    let userResponse = prompt("Welcome to Our Website! Input your name:");

    /// If user cancels or inputs empty string, default to "Guest"
    if (userResponse === null || userResponse.trim() === "") {
        userResponse = "Guest";
    }

    /// Display personalized welcome message on the webpage
    document.getElementById("welcome-speech").innerHTML = "Hello, " + userResponse + "! Welcome to Our Website!";
}

function validateForm() {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const date = document.querySelector("input[type='date']").value.trim();

    if (name === "" || email === "" || message === "" || date === "") {
        alert("⚠️ All fields must be filled!");
        return false;
    }

    if (!email.includes("@")) {
        alert("⚠️ Please enter a valid email address!");
        return false;
    }

    // Show result box
    document.getElementById("rName").textContent = name;
    document.getElementById("rDate").textContent = date;
    document.getElementById("rEmail").textContent = email;
    document.getElementById("rMessage").textContent = message;

    document.getElementById("resultBox").style.display = "block";

    return true;
}