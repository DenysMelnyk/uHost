const selectPlanButtons = document.querySelectorAll(".plan .button");
const modal = document.querySelector(".modal");
const backdrop = document.querySelector(".backdrop");
const cancelModal = document.querySelector(".modal__action--negative");
const mobileButtonNavBtn = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

const toggleVisible = element => {
  backdrop.classList.toggle("visible");
  element.classList.toggle("visible");
};

const modalHandler = () => {
  toggleVisible(modal);
}

const mobileNavHandler = () => {
  toggleVisible(mobileNav);
}

const backdropHandler = () => {
  backdrop.classList.remove("visible");
  modal.classList.remove("visible");
  mobileNav.classList.remove("visible");
}

for (let i = 0; i < selectPlanButtons.length; i++){
  selectPlanButtons[i].addEventListener("click", modalHandler);
}

backdrop.addEventListener("click", backdropHandler);
cancelModal.addEventListener("click", modalHandler);
mobileButtonNavBtn.addEventListener("click", mobileNavHandler);
