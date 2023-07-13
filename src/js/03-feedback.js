import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const inputRef = document.querySelector('input');
const textareaRef = document.querySelector('textarea');

formRef.addEventListener('input', throttle(formRefOnClick, 500));
formRef.addEventListener('submit', formRefOnSubmit);

dataObj = {};

function formRefOnClick({ target: { name, value } }) {
  dataObj[name] = value;
  localStorage.setItem('feedback-form-state', JSON.stringify(dataObj));
}

function saveData() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  dataObj = { ...data };
  inputRef.value = dataObj.email ?? '';
  textareaRef.value = dataObj.message ?? '';
}

function formRefOnSubmit(event) {
  event.preventDefault();
  inputRef.value = '';
  textareaRef.value = '';
  localStorage.removeItem('feedback-form-state');
  console.log(dataObj);
  dataObj = {};
}

saveData();
