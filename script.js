const submitBtn = document.getElementById("submit-btn");
const passwordField = document.querySelector("#password");
const passwordConfirm = document.querySelector("#confirm-password");
const passwordErrorText = document.getElementById("password-error");

const highlightPasswordElements = () => {
  passwordField.style.borderColor = "red";
  passwordConfirm.style.borderColor = "red";

  passwordErrorText.classList.remove("hide");
};

const removeHighlightPassword = () => {
  if (passwordField.value === passwordConfirm.value) {
  passwordField.style.borderColor = "blue";
  passwordConfirm.style.borderColor = "blue";

  passwordErrorText.classList.add("hide");
  }
}


function checkPassword(event) {
  if (!passwordField.value || !passwordConfirm.value) {
    return undefined;
  }
  if (passwordField.value !== passwordConfirm.value) {
    highlightPasswordElements();
    event.preventDefault();
    return undefined;
  }
  alert('Huray!!!');
  return undefined;
}

submitBtn.addEventListener("click", checkPassword);

passwordField.addEventListener('input', removeHighlightPassword)

passwordConfirm.addEventListener('input', removeHighlightPassword)
