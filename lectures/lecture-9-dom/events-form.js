// Select the form and form element nodes
const signupForm = document.querySelector("#signupForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirmPassword");

const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");
const confirmPasswordError = document.querySelector("#confirmPasswordError");
const statusMessage = document.querySelector("#statusMessage");

// Listen for the 'submit' event on the FORM element
signupForm.addEventListener("submit", function (event) {
  // 1. PREVENT DEFAULT: Stop form reload, either at the
  // beginning or after validation check
  event.preventDefault();

  // Reset error displays
  clearErrors();

  let isValid = true;

  // 2. VALIDATION LOGIC

  // Name Validation
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Full Name is required.";
    isValid = false;
  }

  // Email Validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  }

  // Password Validation
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters long.";
    isValid = false;
  }

  // Confirm Password Validation
  if (confirmPasswordInput.value === "") {
    confirmPasswordError.textContent = "Please confirm your password.";
    isValid = false;
  } else if (confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordError.textContent = "Passwords do not match.";
    isValid = false;
  }

  // 3. POST-VALIDATION ACTION
  if (isValid) {
    const formData = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      password: passwordInput.value,
    };

    console.log("Form data submitted:", formData);

    statusMessage.className = "success";
    statusMessage.textContent = "Account created successfully!";

    signupForm.reset();
  } else {
    // Since data is invalid, stop form submission
    // So, this can work for non-Ajax scenario as well
    event.preventDefault();
  }
});

// Helper function to clear errors
function clearErrors() {
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";
  statusMessage.textContent = "";
}
