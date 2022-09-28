const submitBtn = document.getElementById("submit-btn");
const passwordField = document.querySelector("#password");
const passwordConfirm = document.querySelector("#confirm-password");
const passwordErrorText = document.getElementById("password-error");

const highlightPasswordElements = () => {
  passwordField.style.borderColor = "red";
  passwordConfirm.style.borderColor = "red";

  passwordErrorText.classList.remove("hide");
};

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
