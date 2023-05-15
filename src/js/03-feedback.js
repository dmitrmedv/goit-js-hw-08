import throttle from "lodash.throttle";

const formRef = document.querySelector(".feedback-form");
const inputRef = document.querySelector("input");
const textareaRef = document.querySelector("textarea");
const STORAGE_KEY = "formData";

formRef.addEventListener("input", throttle(onFormInput, 1000));
formRef.addEventListener("submit", onBtnRefSubmit);

const formData = {};

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function saveData() {
  const dataObj = localStorage.getItem(STORAGE_KEY);
  if (dataObj) {
    inputRef.value = JSON.parse(dataObj).email;
    textareaRef.value = JSON.parse(dataObj).message;
  }
}

function onBtnRefSubmit(e) {
  e.preventDefault();
  e.target.reset();
  localStorage.removeItem("formData");
}

saveData();
