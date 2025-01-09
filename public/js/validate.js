const inputEmail = document.querySelector(".email-input");
const btnEmail = document.querySelector(".email-btn");
const errorText = document.querySelector(".is-invalid");

const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateEmail = (email) => {
  return pattern.test(email);
};

inputEmail.addEventListener("focus", () => {
  inputEmail.parentElement.style.borderColor = "";
  errorText.textContent = "";
});

btnEmail.addEventListener("click", (event) => {
  event.preventDefault();
  const email = inputEmail.value;
  if (email.length === 0) {
    errorText.textContent = "This field can't be empty. Please enter an email.";
    btnEmail.parentElement.style.borderColor = "red";
  } else if (!validateEmail(email)) {
    errorText.textContent = "Please enter correct email.";
    btnEmail.parentElement.style.borderColor = "red";
  } else {
    btnEmail.parentElement.parentElement.submit();
  }
});
