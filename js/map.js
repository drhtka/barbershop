/********** MAP *************/

var mapLink = document.querySelector(".contacts-button-map")
var mapPopup = document.querySelector(".modal-map")
var mapClose = mapPopup.querySelector(".modal-close")

mapLink.addEventListener("click", function(evt){

  evt.preventDefault();
  alert('Hello')
  mapPopup.classList.add('modal-show')
})

mapClose.addEventListener('click', function(evt){
  alert('Hello-2')
  evt.preventDefault();
  mapPopup.classList.remove("modal-show")
})

window.addEventListener("keydown", function(evt){
  if(evt.keyCode === 27){
    if (mapPopup.classList.contains("modal-show")){
      evt.preventDefault();
      mapPopup.classList.remove("modal-show")
    }
  }
})
