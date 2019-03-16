var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
   modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
   if (event.target === modal) {
       toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);


//var trigger = document.querySelector("#m");
//for (var i = 0; i < btn.length; i++) {
  //var thistrigger = trigger[i];
  //thistrigger.addEventListener("click", toggleModal)
  //} 
