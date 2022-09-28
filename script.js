const submitBtn = document.getElementById("submit-btn");
const passwordField = document.querySelector("#password");
const passwordConfirm = document.querySelector("#confirm-password");
const passwordInputContainer = document.querySelector("#inputP");
const checkPasswordContainer = document.querySelector("#inputCp");
const warningText = document.createElement("h6");

const wrongPassword = () => {
  passwordField.style.outline = "2px solid red";
  passwordConfirm.style.outline = "2px solid red";
};

function checkPassword(event) {
  if (passwordField.value === "" || passwordConfirm.value === "") {
    warningText.innerHTML = "*Please enter password";
    warningText.style.color = "red";
    passwordInputContainer.append(warningText);
    wrongPassword();
    event.preventDefault();
    return undefined;
  }
  if 
    (passwordField.value !== passwordConfirm.value && (passwordField.value !== "" || passwordConfirm.value !== "")) {
    warningText.innerHTML = "*Passwords do not Match";
    warningText.style.color = "red";
    checkPasswordContainer.append(warningText);
    event.preventDefault();
    return undefined;
  }
  if (passwordField.value === passwordConfirm.value) {
    return;
  }

}

submitBtn.addEventListener("click", checkPassword);
