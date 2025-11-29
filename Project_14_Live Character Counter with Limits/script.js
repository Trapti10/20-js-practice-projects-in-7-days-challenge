const textarea= document.getElementById("tweetInput")
const linkwarn = document.querySelector(".link-warn")
const mentionwarn = document.querySelector(".mention-warn")
const hashwarn = document.querySelector(".hash-warn")
const charcount = document.querySelector(".char-count")
const wordcount = document.querySelector(".word-count")
const clearBtn = document.querySelector(".clear-btn")
const postBtn = document.querySelector(".post-btn")


textarea.addEventListener("input", ()=>{

    const text = textarea.value;
    const words = countWord(text);
    const characters = text.length;
   
    charcount.textContent = `${characters}/280`;
    wordcount.textContent = `${words} words`;
    
    warnings(text);
    
    if(characters>0 && characters<281){
        postBtn.style.background = "#0771cdff";
    }
    else{
        postBtn.style.background = "#70c0f2";
        
    }
    
    if(characters <=200 ){
        charcount.style.color = "green";
    }
    else if(characters <=260 ){
        charcount.style.color = "orange";
    }
    else if(characters <=280 ){
        charcount.style.color = "red";
    }
    else{
        let extra = characters-280;
        charcount.textContent = `-${extra}`
        charcount.style.color  = "red";
    }
    
    
});



function countWord(text){
    text = text.trim();
    if(text == "") return 0;
    return text.split(/\s+/).length;
    
}

function warnings(text){
    
    if (text.includes("@")) {
        mentionwarn.classList.remove("hide");
    } else {
        mentionwarn.classList.add("hide");
    }
    
    if (text.includes("#")) {
        hashwarn.classList.remove("hide");
    } else {
        hashwarn.classList.add("hide");
    }
    
    if (text.includes("http") || text.includes("www")) {
        linkwarn.classList.remove("hide");
    } else {
        linkwarn.classList.add("hide");
    }
    
}

postBtn.addEventListener("click", ()=>{
    const texts = textarea.value;
    const char = texts.length;
    if(char>0 && char<281){
        postBtn.disabled = false;
        let message = texts;
        alert(message);
        textarea.value = "";   
         charcount.textContent = `0/280`;
         wordcount.textContent = `0 words`;
         
        }
        
    else{
        postBtn.disabled = true;
    }
    

})

clearBtn.onclick= ()=>{
    textarea.value = "";   
     charcount.textContent = `0/280`;
     wordcount.textContent = `0 words`;  
}