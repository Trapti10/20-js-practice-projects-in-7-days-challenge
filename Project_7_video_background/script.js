const video = document.querySelector(".bg-video")

const btn  = document.querySelector(".switch-btn")

const preloader = document.querySelector(".preloader")

btn.addEventListener("click", function(){
    if(!btn.classList.contains('slide')){
        btn.classList.add('slide')
        video.pause()
    }
    else{
        
        btn.classList.remove('slide')
        video.play()
    }
})

// preloader

window.addEventListener('load',function(){
    preloader.classList.add("hide-preloader");
})