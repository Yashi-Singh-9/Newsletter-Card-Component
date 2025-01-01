document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup");

  // Ensure the popup is hidden on load
  popup.classList.add("d-none");

  const signupForm = document.getElementById("signupForm");
  const emailInput = document.getElementById("email");
  const agreementCheckbox = document.getElementById("agreement");
  const errorMessage = document.getElementById("errorMessage");
  const closePopupButton = document.getElementById("closePopup");

  signupForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting

    const email = emailInput.value.trim();
    const agreement = agreementCheckbox.checked;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email validation pattern

    // Clear previous error messages
    errorMessage.textContent = "";

    // Email validation checks
    if (!email) {
      errorMessage.textContent = "Email is required.";
      return; // Stop if email is missing
    }

    if (!emailPattern.test(email)) {
      errorMessage.textContent = "Please enter a valid email address.";
      return; // Stop if email format is invalid
    }

    // Agreement checkbox validation
    if (!agreement) {
      errorMessage.textContent = "You must agree to the terms.";
      return; // Stop if checkbox is not checked
    }

    // If all conditions are met, show the popup
    popup.classList.remove("d-none");
    popup.classList.add("d-flex");
  });

  // Close button functionality for the popup
  closePopupButton.addEventListener("click", function () {
    popup.classList.remove("d-flex");
    popup.classList.add("d-none"); // Hide the popup when the close button is clicked
  });

  // Optional: Close the popup when clicking outside the content
  popup.addEventListener("click", function (e) {
    if (e.target === popup) {
      popup.classList.remove("d-flex");
      popup.classList.add("d-none");
    }
  });
});
