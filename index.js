// Get the email field's reference
const emailField = document.getElementById("email");

// Get the password field's reference
const passwordField = document.getElementById("password");

// Sign in button
const signInButton = document.getElementById("signIn");

// Error message fields' references
const errorMessageEmail = document.getElementById("error-message-email");
const errorMessagePassword = document.getElementById("error-message-password");
const errorMessageSignIn = document.getElementById("error-message-sign-in");

// Create a database of imaginary users
const imaginaryDatabase = [
    {
        email: "admin@gmail.com",
        password: "Admin@123",
    },
];

// Function to handle the email field
function handleEmailField(event) {
    // Prevent the default behaviour of the form
    event.preventDefault();

    // Check if the email field is empty or has a length less than 5 characters
    if (emailField.value.trim() === "" || emailField.value.length < 5) {
        // Display the error message
        errorMessageEmail.textContent = "Please enter a valid email address.";
    } else {
        errorMessageEmail.textContent = "";
    }
}

// Add event listener to the email field for input and blur events
emailField.addEventListener("input", handleEmailField);
emailField.addEventListener("blur", handleEmailField);

// Function to handle the password field
function handlePasswordField(event) {
    // Prevent the default behaviour of the form
    event.preventDefault();

    // Check if the password field is empty or has a length less than 4 characters and
    if (
        passwordField.value.trim() === "" ||
        passwordField.value.length < 4 ||
        passwordField.value.length > 60
    ) {
        // Display the error message
        errorMessagePassword.textContent =
            "Your password must contain between 4 and 60 characters.";
    } else {
        errorMessagePassword.textContent = "";
    }
}

// Add event listener to the password field for input and blur events
passwordField.addEventListener("input", handlePasswordField);
passwordField.addEventListener("blur", handlePasswordField);

// Function to handle the sign in button
function handleSignIn(event) {
    // Prevent the default behaviour of the form
    event.preventDefault();

    // Find the user in the database using the entered email
    const user = imaginaryDatabase.find(
        (user) => user.email === emailField.value
    );

    if (!user && emailField.value !== "" && passwordField.value !== "") {
        errorMessageSignIn.textContent =
            "Sorry, we can't find an account with this email address.";
        return;
    } else if (passwordField.value !== user.password) {
        errorMessageSignIn.textContent = "Incorrect password.";
        return;
    } else {
        // Redirect to login.html
        window.location.href = "./login.html";
    }
}

// Add event listener to the sign in button for click event
signInButton.addEventListener("click", handleSignIn);
signInButton.addEventListener("click", handleEmailField);
signInButton.addEventListener("click", handlePasswordField);
