const submitBtn = document.getElementById('submit-btn')

function checkPassword(event) {
  event.preventDefault();

  const passwordField = document.querySelector("#password").value;
  const passwordConfirm = document.querySelector("#confirm-password").value;
  if (passwordField === '' || passwordConfirm === '') {
    alert('Please enter Password')
  }
  if (passwordField !== passwordConfirm) {
    alert('Passwords did not match')
  }
  
  
  
}

submitBtn.addEventListener('click', checkPassword)

