 // Этот код открытия закрытия попапа
let buttonShow = document.querySelector ('.button-show');
let buttonHide = document.querySelector ('.button-hide');
let buttonClose = document.querySelector ('.button-close');
let popup = document.querySelector ('.popup');

buttonShow.addEventListener ('click', function(evt) {
  evt.preventDefault();
  popup.classList.add('popup__opened');
  })

buttonHide.addEventListener ('click', function() {
  popup.classList.remove('popup__opened');
  })
buttonClose.addEventListener ('click', function() {
  popup.classList.remove('popup__opened');
  })
  
//Закрытие-открытие попапа через клавишу Esc
document.addEventListener ('keydown', function(evt) {
  if(evt.keyCode == 27) {
  popup.classList.remove('popup__opened');
  }
})

 
 // Этот код отправки формы

document.querySelector('.popup__save').onclick = myClick
function myClick() {
    let a = document.querySelector('.popup__name').value;
    let b = document.querySelector('.popup__profession').value;
    console.log(a);
    console.log(b)
    document.querySelector('.profile__name').innerHTML = a;
    document.querySelector('.profile__profession').innerHTML = b;
}

let formElement = document.querySelector('.popup__container')

function formSubmitHandler (evt) {
    evt.preventDefault(); 
}
formElement.addEventListener('submit', formSubmitHandler); 