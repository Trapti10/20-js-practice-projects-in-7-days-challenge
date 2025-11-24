const openModal = document.querySelector(".Open")
const overlay = document.querySelector(".modal-overlay")
const Close = document.querySelector(".Close-btn")

openModal.addEventListener("click", ()=>{
    overlay.classList.add('.openModel')
})