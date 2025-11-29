const reactions = document.querySelectorAll(".reaction");
const statusText = document.querySelector(".status");
const total = document.querySelector(".total");

let currentReaction = null;

reactions.forEach((element) => {
    element.addEventListener("click", () => {
        const type = element.dataset.type; 
        let spancount = element.querySelector("span")
        let count = parseInt(spancount.textContent);
        if(currentReaction === type){
               spancount.textContent = count - 1;
               element.classList.remove("active");
               currentReaction = null;
               statusText.textContent = "You have not reacted yet";
               updateTotal();
               return;
        }
        if(currentReaction !== type){
            const prev = document.querySelector(`.reaction[data-type="${currentReaction}"]`);
        if(prev){
            const prevSpan = prev.querySelector("span");
            prevSpan.textContent = parseInt(prevSpan.textContent) -1
            prev.classList.remove("active")
        }
    }
        element.classList.add("active");
        spancount.textContent = count+1;
        currentReaction = type;
        
        statusText.textContent = `You reacted with ${type}`
        updateTotal();
    });
});

function updateTotal(){
    let totalcount = 0 ;

    reactions.forEach(r=>{
        totalcount += parseInt(r.querySelector("span").textContent)

    })
    total.textContent = `Total reactions: ${totalcount}`;
}