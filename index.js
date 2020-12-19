"use strict"

let index = 0;
const show = () => {
    let i = 0;
    const slides = document.getElementsByClassName('slide');
    for(i=0; i<slides.length; i++) {
        slides[i].style.display = "none";
    }

    index = index + 1;
    if(index > slides.length){
        index = 1;
    }
    slides[index-1].style.display="block";
    setTimeout(show, 2700);

}
show();

