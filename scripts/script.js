let buttonShow = document.querySelector('.button-show');
let buttonClose = document.querySelector('.button-close');
let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('#popup__name');
let jobInput = document.querySelector('#popup__profession');
let profileName = document.querySelector('.profile__name')
let profileProfession = document.querySelector('.profile__profession')
let popupPhoto = document.querySelector('.popup_photo');
let buttonPhotoShow = document.querySelector('.button-photo-show')
let buttonPhotoClose = document.querySelector('.button-photo-close');

function popupClose () {
  popup.classList.remove('popup_opened');
  }

buttonShow.addEventListener ('click', function() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
  popup.classList.add('popup_opened');
  })

buttonClose.addEventListener ('click', popupClose);

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
  popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler); 

buttonPhotoShow.addEventListener ('click', function() {
  popupPhoto.classList.add('popup_opened');
})

function popupPhotoClose () {
  popupPhoto.classList.remove('popup_opened');
  }
buttonPhotoClose.addEventListener ('click', popupPhotoClose);