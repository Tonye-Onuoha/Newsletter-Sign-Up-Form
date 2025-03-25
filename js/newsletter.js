const container = document.getElementById("container");
const form = document.getElementById("form");
const emailInput = document.getElementById("email-input");
const successContainer = document.getElementById("sucess-container");
const successMessageContainer = document.getElementById("success-message-container");
const dismissButtonContainer = document.getElementById("dismiss-button-container");
const dismissButton = document.getElementById("dismiss-button");
const userEmail = document.getElementById("user-email");
const errorMessage = document.querySelector(".error-message");

// form event-listener.
form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent default reload action.
    // returns error-message if input value is empty.
    if (!emailInput.value) {
        errorMessage.textContent = "Please enter an email address";
        errorMessage.style.visibility = "visible";
        emailInput.style.outline = "2px solid hsl(4, 100%, 67%)";
        emailInput.style.backgroundColor = "pink";
        emailInput.style.color = "#ff6155";
        return;
    }
    // validate that input value conforms to email format.
    const emailIsValid = validateEmail(emailInput.value);
    // returns error-message if input is invalid email format.
    if (!emailIsValid) {
        errorMessage.textContent = "Valid email required";
        errorMessage.style.visibility = "visible";
        emailInput.style.outline = "2px solid hsl(4, 100%, 67%)";
        emailInput.style.backgroundColor = "pink";
        emailInput.style.color = "#ff6155";
    }
    // returns success-message for smaller device-screens if input is valid.
    else if (emailIsValid && window.outerWidth < 920) {
        successContainer.className = "mobile-success-container";
        successMessageContainer.className = "mobile-success-message-container";
        dismissButtonContainer.className = "mobile-dismiss-button-container";
        container.style.display = "none";
        successContainer.style.display = "block";
        userEmail.textContent = emailInput.value;
    }
    // returns success-message for larger device-screens if input is valid.
    else if (emailIsValid && window.outerWidth >= 920) {
        successContainer.className = "desktop-success-container";
        successMessageContainer.className = "desktop-success-message-container";
        dismissButtonContainer.className = "desktop-dismiss-button-container";
        container.style.display = "none";
        successContainer.style.display = "block";
        userEmail.textContent = emailInput.value;
    }
});

// dismiss button event-listener.
dismissButton.addEventListener("click", () => {
    window.location.reload();
});

/* email-validator function */
const validateEmail = (value) => {
    const emailRegex = /^[a-zA-Z0-9]*[\._]?[a-zA-Z0-9]*@{1}[a-zA-Z]*_?[a-zA-Z]*\.{1}com$/;
    const isValid = emailRegex.test(value);
    return isValid;
};
