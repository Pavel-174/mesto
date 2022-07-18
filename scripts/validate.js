const settings = {
  popupFormElement: '.popup__form',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_invalid',
  activeButtonClass: 'popup__save_valid',
  errorInput: 'popup__text_type_error'
};

const showInputError = (formElement, inputElement, errorMessage, {errorInput}) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(errorInput);
  errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement, {errorInput}) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(errorInput);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, {errorInput}) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, {errorInput});
  } else {
    hideInputError(formElement, inputElement, {errorInput});
  }
};

const setEventListeners = (formElement, {inputSelector, submitButtonSelector, inactiveButtonClass, activeButtonClass, errorInput}) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);

  toggleButtonState (inputList, buttonElement, {inactiveButtonClass, activeButtonClass})
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, {errorInput});
      toggleButtonState (inputList, buttonElement, {inactiveButtonClass, activeButtonClass})
    });
  });
};

function enableValidation({popupFormElement, inputSelector, submitButtonSelector, inactiveButtonClass, activeButtonClass, errorInput}){
  const formList = Array.from(document.querySelectorAll(popupFormElement));
  formList.forEach((formElement) => {
    setEventListeners(formElement, {inputSelector, submitButtonSelector, inactiveButtonClass, activeButtonClass, errorInput});
});
}

enableValidation (settings);

function toggleButtonState (inputList, buttonElement, {inactiveButtonClass, activeButtonClass}) {
  if (hasInvalidInput(inputList)) {
  buttonElement.setAttribute('disabled', true);;
  buttonElement.classList.remove(activeButtonClass);
  buttonElement.classList.add(inactiveButtonClass);
} else {
  buttonElement.removeAttribute('disabled');
  buttonElement.classList.add(activeButtonClass);
  buttonElement.classList.remove(inactiveButtonClass);
} 
}
function hasInvalidInput(inputList){
  return inputList.some((inputElement) => {
  return !inputElement.validity.valid;
}); 
}