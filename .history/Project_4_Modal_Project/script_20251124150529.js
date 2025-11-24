const openModal = document.querySelector(".Open")
const overlay = document.querySelector(".modal-overlay")
const Close = document.querySelector(".Close-btn")

openModal.addEventListener("click", ()=>{
    console.log("Button clicked");
    overlay.classList.add('openModal');
})

Close.addEventListener("click", ()=>{
    overlay.classList.remove('openModel');
})