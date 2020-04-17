const selectPlanButtons = document.querySelectorAll(".plan .button");
const modal = document.querySelector(".modal");
const backdrop = document.querySelector(".backdrop");
const cancelModal = document.querySelector(".modal__action--negative");

const toggleVisible = element => element.classList.toggle("visible");

const modalHandler = () => {
  toggleVisible(backdrop);
  toggleVisible(modal);
}

for (let i = 0; i < selectPlanButtons.length; i++){
  selectPlanButtons[i].addEventListener("click", modalHandler);
}

// for(let selectPlanButton of selectPlanButtons){
//   selectPlanButton.addEventListener("click", modalHandler);
// }

// selectPlanButtons.forEach(selectPlanButton => selectPlanButton.addEventListener("click", modalHandler));

// let i = 0;
// while (i < selectPlanButtons.length){
//   selectPlanButtons[i].addEventListener("click", modalHandler);
//   i++;
// }

backdrop.addEventListener("click", modalHandler);
cancelModal.addEventListener("click", modalHandler);