const buttonClose = document.querySelectorAll (".popup__close");
const popups = document.querySelectorAll (".popup");
const buttonShow = document.querySelectorAll (".button-show");
const formElement = document.querySelector ('.popup__form');
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
const initialCards = [
  { link: "https://kudann.ru/uploads/29aa4243cab801472fa13993d11909ec.jpeg", title: "Нижний Новгород" },
  { link: "https://www.syl.ru/misc/i/ai/378308/2436551.jpg", title: "Калининград" },
  { link: "https://s.mediasalt.ru/images/375/375941/original.jpg", title: "Байкал" },
  { link: "https://1001bus-ufa.ru/images/1001/sankt1.jpg", title: "Санкт-Петербург" },
  { link: "https://mediasole.ru/data/images/468/468254/43s.jpg", title: "Екатеринбург" },
  { link: "https://tripplanet.ru/wp-content/uploads/europe/russia/chelyabinsk/kirovka.jpg", title: "Челябинск" }
]

//Функция открытия попапа

function openPopup (popup) {
  popup.classList.add("popup_opened");
} 

//Функция закрытия попапов
function closePopup (popup) {
  popup.classList.remove("popup_opened");
}

//Отправка формы редактирования профиля

function handleSubmitProfileForm (evt) {
  evt.preventDefault ();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
  closePopup(popupProfile);
}

formElement.addEventListener ('submit', handleSubmitProfileForm);

//Открытие попапа редактирования профиля

const buttonProfileOpen = document.querySelector ('.profile__button');
  
buttonProfileOpen.addEventListener ('click', function(){
openPopup (popupProfile);
nameInput.value = profileName.textContent;
jobInput.value = profileProfession.textContent;;
});
  
//Закрытие попапа редактирования профиля

const buttonProfileClose = document.querySelector ('.button-close');

buttonProfileClose.addEventListener ('click', function(){
closePopup (popupProfile);
});
  
//Открытие попапа добавки карточек

const buttonPhotoAddOpen = document.querySelector ('.profile__button-photo');
  
buttonPhotoAddOpen.addEventListener ('click', function(){
openPopup (popupPhotoAdd);
});
  
//Закрытие попапа добавки карточек

const buttonPhotoAddClose = document.querySelector ('.button-photo-close')

buttonPhotoAddClose.addEventListener ('click', function(){
closePopup (popupPhotoAdd);
});

// Функция создания карточки

function createCard (element){
  item = template.content.cloneNode (true);
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
  const image = item.querySelector ('.photo__image');
  const modalImg = document.querySelector (".popup__image");
  const captionText = document.querySelector (".popup__caption");

  image.addEventListener ('click', function(){
  openPopup (popupImage);
  modalImg.src = image.src;
  captionText.textContent = image.alt;
  });
}
//Функция отправки формы

function renderCard (item) {
  cardList.prepend (item);
}

// 6 card from box

initialCards.forEach ((element) => {
  createCard (element);
  renderCard (item);
});
// Photo-add
const formElementPhoto = document.querySelector('.popup__form-photo');

function handleSubmitPhotoForm (evt) {
  evt.preventDefault ();

  const newCards = {
    title: cardNameInput.value, 
    link: cardLinkInput.value
  }; 
    createCard (newCards);
    renderCard (item);

  closePopup(popupPhotoAdd);
  //Очистка input-ов вставки карточек

  cardNameInput.value = "";
  cardLinkInput.value = "";
}

formElementPhoto.addEventListener ('submit', handleSubmitPhotoForm);

  //Закрытие попапа с фото
  const buttonImageClose = document.querySelector ('.button-image-close');

  buttonImageClose.addEventListener ('click', function(){
    closePopup (popupImage);
    });