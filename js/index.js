
const navItems = document.querySelectorAll('.navItem');
const pages = document.querySelectorAll('.page');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    const targetId = item.getAttribute('data-target');
    const targetPage = document.getElementById(targetId);

    // Find currently visible page
    const currentPage = Array.from(pages).find(page => !page.classList.contains('hidden'));

    if (currentPage !== targetPage) {
      // Fade out current page
      currentPage.classList.add('hidden');

      // Wait for fade out
      setTimeout(() => {
        // Fade in target page
        targetPage.classList.remove('hidden');
      }, 500); // Match the CSS transition duration
    }
  });
});

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
  // Get references to input fields
  const nameInput = document.getElementById('fullName');
  const emailInput = document.getElementById('email');
  const companyInput = document.getElementById('company');
  const messageInput = document.getElementById('message');

  // Add input event listeners for real-time validation
  nameInput.addEventListener('input', validateName);
  emailInput.addEventListener('input', validateEmail);
  companyInput.addEventListener('input', validateCompany);
  messageInput.addEventListener('input', validateMessage);
});

function validateName() {
  const name = document.getElementById("fullName").value;
  const nameError = document.getElementById("nameError");

  if (name.value === "" || name == null) {
      nameError.innerHTML = "Name is required.";
      return false;
  } else if (!/^[A-Za-z\s]+$/.test(name)) {
      nameError.innerText = "Name should contain only letters and spaces.";
      return false;
  } else {
      nameError.innerText = ""; // Clear error
      return true;
  }
}

function validateEmail() {
  const email = document.getElementById("email").value;
  const emailError = document.getElementById("emailError");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.trim() === "") {
      emailError.innerText = "Email is required.";
      return false;
  } else if (!emailRegex.test(email)) {
      emailError.innerText = "Please enter a valid email address (e.g., name@domain.com).";
      return false;
  } else {
      emailError.innerText = ""; // Clear error
      return true;
  }
}

function validateCompany() {
  const company = document.getElementById("company").value;
  const companyError = document.getElementById("companyError");

  if (company.trim() === "") {
      companyError.innerText = "Company is required.";
      return false;
  } else {
      companyError.innerText = ""; // Clear error
      return true;
  }
}

function validateMessage() {
  const message = document.getElementById("message").value;
  const messageError = document.getElementById("messageError");

  if (message.trim() === "") {
      messageError.innerText = "Message is required.";
      return false;
  } else {
      messageError.innerText = ""; // Clear error
      return true;
  }
}

function validateForm() {
  // Perform all validations
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isCompanyValid = validateCompany();
  const isMessageValid = validateMessage();

  // If all validations pass, allow form submission
  return isNameValid && isEmailValid && isCompanyValid && isMessageValid;
}
