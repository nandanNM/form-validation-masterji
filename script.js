document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const emailFeedback = document.getElementById("emailFeedback");
  const passwordFeedback = document.getElementById("passwordFeedback");
  const submitBtn = document.getElementById("submitBtn");
  const form = document.getElementById("registrationForm");

  function validateEmail(email) {
    // Simple email regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function validatePassword(password) {
    // At least 8 chars, 1 uppercase, 1 lowercase, 1 number
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return re.test(password);
  }

  function updateFeedback() {
    let emailValid = false;
    let passwordValid = false;

    // Email validation
    if (emailInput.value === "") {
      emailFeedback.textContent = "";
    } else if (!validateEmail(emailInput.value)) {
      emailFeedback.textContent = "Please enter a valid email address.";
    } else {
      emailFeedback.textContent = "";
      emailValid = true;
    }

    // Password validation
    if (passwordInput.value === "") {
      passwordFeedback.textContent = "";
    } else if (!validatePassword(passwordInput.value)) {
      passwordFeedback.textContent =
        "Password must be at least 8 characters, include uppercase, lowercase, and a number.";
    } else {
      passwordFeedback.textContent = "";
      passwordValid = true;
    }

    // Enable submit if both valid
    submitBtn.disabled = !(emailValid && passwordValid);
  }

  emailInput.addEventListener("input", updateFeedback);
  passwordInput.addEventListener("input", updateFeedback);

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    updateFeedback();
    if (!submitBtn.disabled) {
      alert("Form submitted successfully!");
      form.reset();
      updateFeedback();
    }
  });

  updateFeedback(); // Initial state
});
