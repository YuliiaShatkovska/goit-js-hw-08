import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(feedbackFormStateSave, 500));
form.addEventListener('submit', handleReset);

const emailValue = document.querySelector('input[name="email"]');
const messageValue = document.querySelector('textarea[name="message"]');

function feedbackFormStateSave() {
  const formValue = {
    email: emailValue.value,
    message: messageValue.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formValue));
}

const formStorage =
  JSON.parse(localStorage.getItem('feedback-form-state')) || {};

emailValue.value = formStorage.email || '';
messageValue.value = formStorage.message || '';

function handleReset(event) {
  event.preventDefault();

  const formValue = {
    email: emailValue.value,
    message: messageValue.value,
  };
  console.log(formValue);

  localStorage.removeItem('feedback-form-state');
  form.reset();
}
