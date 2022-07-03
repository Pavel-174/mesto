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
  popupContainer.classList.add('popup__container_open');
  })

buttonClose.addEventListener ('click', popupClose);

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler); 

buttonPhotoShow.addEventListener ('click', function() {
  popupPhoto.classList.add('popup_opened');
})

function popupPhotoClose () {
  popupPhoto.classList.remove('popup_opened');
  }
buttonPhotoClose.addEventListener ('click', popupPhotoClose);

// 6 card from box

const ul = document.querySelector('#element-ul');
const template = document.querySelector('#template');
let item = template.content.cloneNode(true);
const button = document.querySelector(".photo__like")


{item.querySelector('h2').textContent = 'Екатеринбург'
item.querySelector('img').src = "https://mediasole.ru/data/images/468/468254/43s.jpg"
item.querySelector('img').alt = item.querySelector('#element-h2').textContent
ul.prepend(item);

let box = document.querySelector('.photo__box')
    const del = document.querySelector(".photo__delete")
    
    del.addEventListener('click', () => {
       box.remove(true);
    })
}

item = template.content.cloneNode(true);

{item.querySelector('h2').textContent = 'Челябинск'
item.querySelector('img').src = "https://geocaching.su/photos/areas/63865.jpg"
item.querySelector('img').alt = item.querySelector('#element-h2').textContent
ul.prepend(item);

let box = document.querySelector('.photo__box')
    const del = document.querySelector(".photo__delete")
    
    del.addEventListener('click', () => {
       box.remove(true);
    })
}

item = template.content.cloneNode(true);

{item.querySelector('h2').textContent = 'Санкт-Петербург'
item.querySelector('img').src = "https://1001bus-ufa.ru/images/1001/sankt1.jpg"
item.querySelector('img').alt = item.querySelector('#element-h2').textContent
ul.prepend(item);

let box = document.querySelector('.photo__box')
    const del = document.querySelector(".photo__delete")
    
    del.addEventListener('click', () => {
       box.remove(true);
    })
}

item = template.content.cloneNode(true);

{item.querySelector('h2').textContent = 'Байкал'
item.querySelector('img').src = "https://s.mediasalt.ru/images/375/375941/original.jpg"
item.querySelector('img').alt = item.querySelector('#element-h2').textContent
ul.prepend(item);

let box = document.querySelector('.photo__box')
    const del = document.querySelector(".photo__delete")
    
    del.addEventListener('click', () => {
       box.remove(true);
    })
}

item = template.content.cloneNode(true);

{item.querySelector('h2').textContent = 'Калининград'
item.querySelector('img').src = "https://www.syl.ru/misc/i/ai/378308/2436551.jpg"
item.querySelector('img').alt = item.querySelector('#element-h2').textContent
ul.prepend(item);

let box = document.querySelector('.photo__box')
    const del = document.querySelector(".photo__delete")
    
    del.addEventListener('click', () => {
       box.remove(true);
    })
}

item = template.content.cloneNode(true);

{item.querySelector('h2').textContent = 'Нижний Новгород'
item.querySelector('img').src = "https://kudann.ru/uploads/29aa4243cab801472fa13993d11909ec.jpeg"
item.querySelector('img').alt = item.querySelector('#element-h2').textContent
ul.prepend(item);

let box = document.querySelector('.photo__box')
    const del = document.querySelector(".photo__delete")
    
    del.addEventListener('click', () => {
       box.remove(true);
    })
}

//Like button
const likeButtons = document.querySelectorAll(".photo__like");

   likeButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
       button.classList.toggle("photo__like_active");
      });
    });
  

// Photo-add
let formElementPhoto = document.querySelector('.popup__form-photo');

function formSubmitPhotoHandler(evt) {
    evt.preventDefault();

    item = template.content.cloneNode(true);

    item.querySelector('h2').textContent = document.querySelector('#popup__place').value;
    item.querySelector('img').src = document.querySelector('#popup__link').value;
    item.querySelector('img').alt = item.querySelector('#element-h2').textContent
    ul.prepend(item);

    popupPhoto.classList.remove('popup_opened');

    const button = document.querySelector(".photo__like")
    button.addEventListener('click', () => {
        button.classList.toggle('photo__like_active');
    })

    // Открытие фото в попапе
    let popupImage = document.querySelector('.popup_image');

    const image = document.querySelector('#element-img');
    const modalImg = document.querySelector("#img1");
    const captionText = document.querySelector("#caption");
    image.addEventListener('click', function(){
    popupImage.classList.add('popup_opened');
    modalImg.src = image.src;
    captionText.innerHTML = image.alt;
    });
    
    //Очистка input-ов вставки карточек
    document.querySelector('#popup__place').value = "";
    document.querySelector('#popup__link').value = "";

    // Удаление карточек
    let box = document.querySelector('.photo__box')
    const del = document.querySelector(".photo__delete")
    
    del.addEventListener('click', () => {
       box.remove(true);
    })
}
  
  formElementPhoto.addEventListener('submit', formSubmitPhotoHandler); 

//Закрытие попапа с фото

let buttonImageClose = document.querySelector('.button-image-close');
let popupImage = document.querySelector('.popup_image');

function popupImageClose () {
  popupImage.classList.remove('popup_opened');
  }

buttonImageClose.addEventListener ('click', popupImageClose);

// Открытие ранее добавленных фото в попапе

let popupIm = document.querySelector('.popup_image');

const allImages = document.querySelectorAll('#element-img');

const modalIm = document.querySelector("#img1");
const captText = document.querySelector("#caption");

allImages.forEach((allImages, index) => {
      allImages.addEventListener("click", () => {
        popupIm.classList.add('popup_opened');
        modalIm.src = allImages.src;
        captText.innerHTML = allImages.alt;
    });
      });
   