var appointment = document.querySelector(".button-appointment");

var popup = document.querySelector(".modal");
var form = popup.querySelector(".appointment-form");

var dateArrive = popup.querySelector("[name=date-arrive]");
var dateLeave = popup.querySelector("[name=date-leave]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("grownup");
} catch (err) {
  isStorageSupport = false;
}

try {
  storage = localStorage.getItem("children");
} catch (err) {
  isStorageSupport = false;
}

popup.classList.add("modal-show");

appointment.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
  popup.classList.remove("modal-error");
  dateArrive.focus();
  if(storage){
    grownup.value = storage;
    children.value = storage;
  }
});

form.addEventListener("submit", function (evt) {
  if (!dateArrive.value || !dateLeave.value) {
  evt.preventDefault();
  popup.classList.add("modal-error");
 } else {
    if (isStorageSupport) {
    localStorage.setItem("grownup", grownup.value);
    localStorage.setItem("children", children.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
