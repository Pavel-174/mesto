let buttonShow = document.querySelector ('.button-show');
let buttonClose = document.querySelector ('.button-close');
let popup = document.querySelector ('.popup')
let formElement = document.querySelector ('.popup__form')
let nameInput = document.querySelector ('.popup__name') 
let jobInput = document.querySelector ('.popup__profession')
let Close = function() {
  popup.classList.remove('popup__opened')
  }

nameInput.value = document.querySelector ('.profile__name').textContent;
jobInput.value = document.querySelector ('.profile__profession').textContent;

buttonShow.addEventListener ('click', function(evt) {
  popup.classList.add('popup__opened');
  })

buttonClose.addEventListener ('click', Close)

function formSubmitHandler (evt) {
    evt.preventDefault();
document.querySelector ('.profile__name').textContent = nameInput.value;
document.querySelector ('.profile__profession').textContent = jobInput.value;
}

formElement.addEventListener('submit', Close);

formElement.addEventListener('submit', formSubmitHandler); 