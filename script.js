// const imgs = document.querySelectorAll(".header-slider ul img");
// const prev_btn = document.querySelector(".controlPrev");
// const next_btn = document.querySelector(".controlNext");

// let n = 0;

// function changeSlide(e){
//     for (let i = 0; i < imgs.length; i++) {
//         imgs[i].style.display = "none";
        
//     }
//     imgs[n].style.display = "block";

// }

// prev_btn.addEventListener('click',(e)=>{
// if(n>0){
//     n--;
// }else{
//     n = imgs.length-1
// }
// changeSlide();

// })
// next_btn.addEventListener('click',(e)=>{
// if(n<0){
//     n++;
// }else{
//     n = 0
// }
// changeSlide();

// })

const imgs = document.querySelectorAll(".header-slider ul img");
const prev_btn = document.querySelector(".controlPrev");
const next_btn = document.querySelector(".controlNext");

let n = 0;

function changeSlide() {
    // Hide all images
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = "none";
    }
    // Show the current image
    imgs[n].style.display = "block";
}

// Initialize the first slide
changeSlide();

prev_btn.addEventListener('click', (e) => {
    // Go to the previous image or loop back to the last one
    if (n > 0) {
        n--;
    } else {
        n = imgs.length - 1;
    }
    changeSlide();
});

next_btn.addEventListener('click', (e) => {
    // Go to the next image or loop back to the first one
    if (n < imgs.length - 1) {
        n++;
    } else {
        n = 0;
    }
    changeSlide();
});


const scroolContainer = document.querySelectorAll(".products")

for (const item of scroolContainer) {
    item.addEventListener('wheel',(e)=>{
        e.preventDefault();
        item.scrollLeft  += e.deltaY;
    })
}