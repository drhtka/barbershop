var loginLink = document.querySelector(".login-link")
var loginPopup = document.querySelector(".modal-login")
var loginClose = document.querySelector(".modal-close")
var loginLogin = loginPopup.querySelector("[name=login]")
var loginPassword = loginPopup.querySelector("[name=password]")
var loginForm = loginPopup.querySelector("form")
// var storage = localStorage.getItem("loginLogin")

// не все браузера подерживают раьботоспособность поэтому проверим работоспособность
var isStorageSupport = true;
var storage = "";
try {
  storage = localStorage.getItem("loginLogin");
} catch (err) {
  isStorageSupport = false;
}

loginLink.addEventListener("click", function(evt){ // по клику создвем функцию останылываем переход
  evt.preventDefault(); // отменяем действие по умолчанию,  нашем случае не перходить по ссылке
  // console.log("Колик по ссылке вход");
  loginPopup.classList.add("modal-show") // классу modal-login добавляем класс modal-show
  loginLogin.focus();

  if (storage){// если поле не пустое,
    loginLogin.value = storage;// тогда сразу запишем в поле логина
    loginPassword.focus();// сместим фокус на поле пароля
  } else {
    loginLogin.focus
  }
});

loginClose.addEventListener("click", function(evt){
  evt.preventDefault();
  loginPopup.classList.remove("modal-show")
  loginPopup.classList.remove("modal-error");
  // lloginLogin.focus();
});

loginForm.addEventListener("submit", function(evt){

  if (!loginLogin.value || !loginPassword.value){// если поля пустые
    evt.preventDefault();// отменяем отправку
    loginPopup.classList.remove("modal-error");
    loginPopup.offsetWidth = loginPopup.offsetWidth;// повторене встряски
		loginPopup.classList.add("modal-error");
    // console.log("Нужно ввести логин или пароль");
  }else{
    if (isStorageSupport)// проверим запись логина в локальное хранилище на работоспособность
    localStorage.setItem("loginLogin", loginLogin.value)// в случае заполенния всех записываем локальное хранилище
  }

  // console.log("Отправляем форму");
  // console.log("loginLogin");
  // console.log("loginPassword");
})

// добавим обработчик событий, который будет отлавливать надатие Esc и в случае, если модаоьное окно открвто зыкрывает его
window.addEventListener("keydown", function (evt){
  if (evt.keyCode === 27){
    if(loginPopup.classList.contains("modal-show")){
      evt.preventDefault();
      loginPopup.classList.remove("modal-show");
      loginPopup.classList.remove("modal-error");
    }
  }
});



