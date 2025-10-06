document.addEventListener("DOMContentLoaded", () => {
  // All my JavaScript code goes inside this function
    const form = document.getElementById("registration-form")
    const feedbackDiv = document.getElementById("form-feedback")

    document.addEventListener("submit", (event) => {
        event.preventDefault();
    })
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    let isValid = true;
    let messages = [];
    if(username.length < 3){
        isValid = false;
        messages.push("Username must be more than 3 characters")
    }
    if(!email.includes("@") || !email.includes(".")){
        isValid =  false;
        messages.push("Please enter a valid email")
    }
    if(password.length < 8){
        isValid = false;
        messages.push("Password should be longer than 8 character")
    }
    feedbackDiv.style.display = "block";
    if (isValid){
        feedbackDiv.textContent = "Registration successful!"
        feedbackDiv.style.color = #28a745
    }
    if (!isValid) {
        feedbackDiv.innerHTML = messages.join("<br>");
        feedbackDiv.style.color = "#dc3545"; // red color for errors
}

});


