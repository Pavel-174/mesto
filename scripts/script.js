const buttonClose = document.querySelectorAll (".popup__close");
const popups = document.querySelectorAll (".popup");
const buttonShow = document.querySelectorAll (".button-show");
const formElement = document.querySelector ('.popup__form-profile');
const nameInput = document.querySelector ('#popup__name');
const jobInput = document.querySelector ('#popup__profession');
const profileName = document.querySelector ('.profile__name');
const profileProfession = document.querySelector ('.profile__profession');
const popupProfile = document.querySelector ('.popup_type_profile');
const popupPhotoAdd = document.querySelector ('.popup_type_photo');
const popupImage = document.querySelector ('.popup_type_image');
const cardNameInput = document.querySelector ('#popup__place');
const cardLinkInput = document.querySelector ('#popup__link');
const cardList = document.querySelector ('#element-ul');
const template = document.querySelector ('#template');
const modalImg = document.querySelector (".popup__image");
const captionText = document.querySelector (".popup__caption");
const buttonProfileOpen = document.querySelector ('.profile__button');
const buttonProfileClose = document.querySelector ('.button-close');
const buttonPhotoAddOpen = document.querySelector ('.profile__button-photo');
const buttonPhotoAddClose = document.querySelector ('.button-photo-close');

//Функция reset button
function resetButton (popup) {
  const submitButton = popup.querySelector('.popup__save');
  submitButton.setAttribute('disabled', true);
  submitButton.classList.remove('popup__save_valid');
  submitButton.classList.add('popup__save_invalid');
}

//Функция открытия попапа

function openPopup (popup) {
  popup.classList.add("popup_opened");
  document.addEventListener('keydown', closeByEsc);
} 

//Функция закрытия попапов
function closePopup (popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keydown', closeByEsc);
}

//Закрытие попапа через клавишу Esc
function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup); 
  }
}  

//Закрытие попапа кликом на оверлей
function closePopupOverlay (popup) {
  popup.addEventListener('click', (event) =>{
    if(event.target === event.currentTarget){
      closePopup(popup);
    }
  });
}
closePopupOverlay (popupPhotoAdd);
closePopupOverlay (popupProfile);
closePopupOverlay (popupImage);

//Отправка формы редактирования профиля

function handleSubmitProfileForm (evt) {
  evt.preventDefault ();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
  closePopup(popupProfile);
}

formElement.addEventListener ('submit', handleSubmitProfileForm);

//Открытие попапа редактирования профиля
  
buttonProfileOpen.addEventListener ('click', function(){
  openPopup (popupProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;;
});
  
//Закрытие попапа редактирования профиля

buttonProfileClose.addEventListener ('click', function(){
  closePopup (popupProfile);
});
  
//Открытие попапа добавки карточек
  
buttonPhotoAddOpen.addEventListener ('click', function(){
  openPopup (popupPhotoAdd);
});
  
//Закрытие попапа добавки карточек

buttonPhotoAddClose.addEventListener ('click', function(){
  closePopup (popupPhotoAdd);
});

// Функция создания карточки

function createCard (element){
  const item = template.content.cloneNode(true);
  const itemImage = item.querySelector ('.photo__image');
  
  item.querySelector ('.photo__text').textContent = element.title
  itemImage.src = element.link
  itemImage.alt = element.title

  //кнопка like
  const buttonLike = item.querySelector (".photo__like");
  buttonLike.addEventListener ('click', () => {
    buttonLike.classList.toggle ('photo__like_active');
  });

  // Удаление карточек
  const box = item.querySelector ('.photo__box');
  const buttonDelete = item.querySelector (".photo__delete");

  buttonDelete.addEventListener ('click', () => {
    box.remove(true);
  })

  //Open photo in popup

  itemImage.addEventListener ('click', function(){
    modalImg.src = element.link;
    modalImg.alt = element.title;
    captionText.textContent = element.title;
    openPopup (popupImage);
  });

  return item;
}
//Функция отправки формы
function renderCard(element) {
  cardList.prepend(createCard(element));
} 

// 6 card from box
initialCards.forEach ((element) => {
  renderCard (element);
});

// Photo-add
const formElementPhoto = document.querySelector('.popup__form-photo');

function handleSubmitPhotoForm (evt) {
  evt.preventDefault ();

  const newCards = {
    title: cardNameInput.value, 
    link: cardLinkInput.value
  }; 
    renderCard (newCards);

  closePopup(popupPhotoAdd);

  //Очистка input-ов вставки карточек
  cardNameInput.value = "";
  cardLinkInput.value = "";
  resetButton (popupPhotoAdd);
}

formElementPhoto.addEventListener ('submit', handleSubmitPhotoForm);

//Закрытие попапа с фото
const buttonImageClose = document.querySelector ('.button-image-close');

buttonImageClose.addEventListener ('click', function(){
  closePopup (popupImage);
});