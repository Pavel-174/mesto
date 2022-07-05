let buttonClose = document.querySelectorAll(".popup__close");
let popups = document.querySelectorAll(".popup");
let buttonShow = document.querySelectorAll(".button-show");
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('#popup__name');
const jobInput = document.querySelector('#popup__profession');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const popupProfile = document.querySelector('.popup_type_profile');
const popupPhotoAdd = document.querySelector('.popup_type_photo');
const cardNameInput = document.querySelector('#popup__place');
const cardLinkInput = document.querySelector('#popup__link');
const cardList = document.querySelector('#element-ul');
const template = document.querySelector('#template');
const initialCards = [
  { link: "https://kudann.ru/uploads/29aa4243cab801472fa13993d11909ec.jpeg", title: "Нижний Новгород" },
  { link: "https://www.syl.ru/misc/i/ai/378308/2436551.jpg", title: "Калининград" },
  { link: "https://s.mediasalt.ru/images/375/375941/original.jpg", title: "Байкал" },
  { link: "https://1001bus-ufa.ru/images/1001/sankt1.jpg", title: "Санкт-Петербург" },
  { link: "https://mediasole.ru/data/images/468/468254/43s.jpg", title: "Екатеринбург" },
  { link: "https://tripplanet.ru/wp-content/uploads/europe/russia/chelyabinsk/kirovka.jpg", title: "Челябинск" }
]; 


//Закрытие попапов(кроме попапа с фото)

function removePopup(){
  let index = Array.from(buttonClose).indexOf(this);
  popups[index].classList.remove("popup_opened");
}

buttonClose.forEach( btn => btn.addEventListener( 'click', removePopup ) );

// Открытие попапов(кроме попапа с фото)

function togglePopup(){
  let index = Array.from(buttonShow).indexOf(this);
  popups[index].classList.toggle("popup_opened");
}

buttonShow.forEach( btn => btn.addEventListener( 'click', togglePopup ) );

//Поля попапа редактирования профиля
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;

//Отправка формы редактирования профиля

function handleSubmitProfileForm(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
  popupProfile.classList.remove('popup_opened');
}

formElement.addEventListener('submit', handleSubmitProfileForm); 

// 6 card from box

initialCards.forEach (function (element) {
const item = template.content.cloneNode(true);

item.querySelector('h2').textContent = element.title
item.querySelector('img').src = element.link
item.querySelector('img').alt = item.querySelector('#element-h2').textContent

cardList.prepend(item);

//Delete card
let box = document.querySelector('.photo__box')
const del = document.querySelector(".photo__delete")

del.addEventListener('click', () => {
   box.remove(true);
})

//Open photo in popup
const popupImage = document.querySelector('.popup_type_image');

const image = document.querySelector('#element-img');
const modalImg = document.querySelector("#img1");
const captionText = document.querySelector("#caption");
image.addEventListener('click', function(){
popupImage.classList.add('popup_opened');
modalImg.src = image.src;
captionText.innerHTML = image.alt;
});

//кнопка like
const button = document.querySelector(".photo__like");

button.addEventListener('click', () => {
    button.classList.toggle('photo__like_active');
})
});

// Photo-add
let formElementPhoto = document.querySelector('.popup__form-photo');

function handleSubmitPhotoForm(evt) {
    evt.preventDefault();

    item = template.content.cloneNode(true);

    item.querySelector('h2').textContent = document.querySelector('#popup__place').value;
    item.querySelector('img').src = document.querySelector('#popup__link').value;
    item.querySelector('img').alt = item.querySelector('#element-h2').textContent
    cardList.prepend(item);

    popupPhotoAdd.classList.remove('popup_opened');

    //кнопка like
    const button = document.querySelector(".photo__like")
    button.addEventListener('click', () => {
        button.classList.toggle('photo__like_active');
    })

    //Открытие попапа с фото
    let popupImage = document.querySelector('.popup_type_image');

    const image = document.querySelector('#element-img');
    const modalImg = document.querySelector("#img1");
    const captionText = document.querySelector("#caption");
    image.addEventListener('click', function(){
    popupImage.classList.add('popup_opened');
    modalImg.src = image.src;
    captionText.innerHTML = image.alt;
    });
    
    //Очистка input-ов вставки карточек
    cardNameInput.value = "";
    cardLinkInput.value = "";

    // Удаление карточек
    const box = document.querySelector('.photo__box');
    const del = document.querySelector(".photo__delete");

    del.addEventListener('click', () => {
       box.remove(true);
    })
}
  
  formElementPhoto.addEventListener('submit', handleSubmitPhotoForm);