const modalBtnOpenList = document.querySelectorAll(".plan .button");
const modal = document.querySelector(".modal");
const backdrop = document.querySelector(".backdrop");
const cancelModal = document.querySelector(".modal__action--negative");

const toggleVisible = element => element.classList.toggle("visible");

const modalHandler = () => {
  toggleVisible(backdrop);
  toggleVisible(modal);
}

for(let modalBtnOpen of modalBtnOpenList){
  modalBtnOpen.addEventListener("click", modalHandler);
}

backdrop.addEventListener("click", modalHandler);
cancelModal.addEventListener("click", modalHandler);