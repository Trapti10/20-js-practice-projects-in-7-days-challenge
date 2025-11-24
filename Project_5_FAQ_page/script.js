const answerBtn = document.querySelectorAll('.questions > div');

answerBtn.forEach(box => {
   const plus  = box.querySelector('.plus-btn');
   const minus  = box.querySelector('.minus-icon');
   const answerbox  = box.querySelector('.answer');

   plus.addEventListener("click", ()=>{
       answerbox.classList.add("show"); 
        plus.style.display = "none";
        minus.style.display = "block";
   })

     minus.addEventListener("click", () => {
        answerbox.classList.remove("show");
        plus.style.display = "block";
        minus.style.display = "none";
    });
});
