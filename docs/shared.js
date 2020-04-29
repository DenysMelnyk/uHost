const selectPlanButtons = document.querySelectorAll(".plan .button");
const backdrop = document.querySelector(".backdrop");
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");
let modal = document.querySelector(".modal");
let cancelModal = document.querySelector(".modal__action--negative");

const toggleVisible = element => {
  backdrop.classList.toggle("open");
  element.classList.toggle("open");
};

const modalHandler = () => {
  toggleVisible(modal);
}

const mobileNavHandler = () => {
  toggleVisible(mobileNav);
}

const backdropHandler = () => {
  backdrop.classList.remove("open");
  mobileNav.classList.remove("open");
  if (modal) {
    modal.classList.remove("open");
  } else {
    return;
  }
}

for (let i = 0; i < selectPlanButtons.length; i++){
  selectPlanButtons[i].addEventListener("click", modalHandler);
}

backdrop.addEventListener("click", backdropHandler);
toggleButton.addEventListener("click", mobileNavHandler);
cancelModal ? cancelModal.addEventListener("click", modalHandler) : cancelModal = null;
