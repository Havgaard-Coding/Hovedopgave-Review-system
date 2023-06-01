/* Modal */
const modal = document.querySelector(".modal");
const openMaterialModal = document.querySelector(".modal__open-btn");
const closeMaterialModal = document.querySelector(".modal__close-btn");

openMaterialModal.addEventListener("click", () => {
  modal.showModal();
});

closeMaterialModal.addEventListener("click", () => {
  modal.close();
});
