const nameField = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirm_password = document.querySelector('#confirm-password');
const success = document.querySelectorAll('.success');
const error = document.querySelectorAll('.error');
const show_hide = document.querySelectorAll('.show-hide');

nameField.onblur = function () {
  if (nameField.value.length > 0) {
    success[0].innerHTML = '<img src="./images/success.svg" alt="Success" />';
    error[0].innerHTML = '';
  } else {
    success[0].innerHTML = '';
    error[0].innerHTML =
      '<img src="./images/error.svg" alt="Error" /> A Name is required';
  }
};

email.onblur = function () {
  if (email.value.length === 0) {
    success[1].innerHTML = '';
    error[1].innerHTML =
      '<img src="./images/error.svg" alt="Error" /> An email is required';
  } else if (email.value.includes('.') && email.value.includes('@')) {
    success[1].innerHTML = '<img src="./images/success.svg" alt="Success" />';
    error[1].innerHTML = '';
  } else {
    // not email
    success[1].innerHTML = '';
    error[1].innerHTML =
      '<img src="./images/error.svg" alt="Error" /> Please enter a correct email';
  }
};

confirm_password.onblur = function () {
  if (password.value && confirm_password.value === password.value) {
    success[3].innerHTML = '<img src="./images/success.svg" alt="Success" />';
    error[3].innerHTML = '';
  } else {
    success[3].innerHTML = '';
    error[3].innerHTML =
      '<img src="./images/error.svg" alt="Error" /> Please enter a correct password';
  }
};

show_hide.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.previousElementSibling.previousElementSibling.value);

    if (
      e.target.previousElementSibling.previousElementSibling.type === 'password'
    ) {
      e.target.previousElementSibling.previousElementSibling.type = 'text';
    } else {
      e.target.previousElementSibling.previousElementSibling.type = 'password';
    }
  });
});

const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
});
