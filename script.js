document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    popup.style.display = "none"; // Ensure the popup is hidden on load
  });
  
  document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting
  
    const email = document.getElementById("email").value;
    const agreement = document.getElementById("agreement").checked;
    const errorMessage = document.getElementById("errorMessage");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email validation pattern
  
    // Clear previous error messages
    errorMessage.innerHTML = "";
  
    // Email validation checks
    if (!email) {
      errorMessage.innerHTML = "Email is required.";
      return; // Stop if email is missing
    }
  
    if (!emailPattern.test(email)) {
      errorMessage.innerHTML = "Please enter a valid email address.";
      return; // Stop if email format is invalid
    }
  
    // Agreement checkbox validation
    if (!agreement) {
      errorMessage.innerHTML = "You must agree to the terms.";
      return; // Stop if checkbox is not checked
    }
  
    // If all conditions are met, show the popup
    const popup = document.getElementById("popup");
    popup.style.display = "flex"; // Show the popup
  });
  
  // Close button functionality for the popup
  document.getElementById("closePopup").addEventListener("click", function () {
    const popup = document.getElementById("popup");
    popup.style.display = "none"; // Hide the popup when the close button is clicked
  });
  