const formAddCard = document.querySelector('.popup__form-photo');
const formUser = document.querySelector('.popup__form-profile');

validateForm(formAddCard);
validateForm(formUser);

formAddCard.addEventListener('input', handlerInputForm);
formUser.addEventListener('input', handlerInputForm);

function handlerInputForm (event) {
  const currentForm = event.currentTarget;
  
  validateForm(currentForm);
  validateInput(event.target);
}

function validateForm(form) {
  const submitButton = form.querySelector('.popup__save');

  if(form.checkValidity()) {
    submitButton.removeAttribute('disabled');
    submitButton.classList.add('popup__save_valid');
    submitButton.classList.remove('popup__save_invalid');
  }
  else {
    submitButton.setAttribute('disabled', true);
    submitButton.classList.remove('popup__save_valid');
    submitButton.classList.add('popup__save_invalid');
  }
}

function validateInput(input) {
  const errorElement = input.parentNode.querySelector(`#${input.id}-error`)

  errorElement.textContent = input.validationMessage
  
  if(input.checkValidity()) {
    input.classList.remove('popup__text_type_error');
  }
  else {
    input.classList.add('popup__text_type_error');
  }
}