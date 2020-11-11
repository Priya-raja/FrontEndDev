/* add event listeners to prev and next button */ 

const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
let totalSlides = slides.length;

document.getElementById('carousel-button-next').addEventListener('click',moveToNext);
document.getElementById('carousel-button-prev').addEventListener('click',moveToPrev);

function hideAllSlides () {
    for (let slide of slides) {

        slide.classList.remove("carousel-item-visible");
        slide.classList.add("carousel-item-hidden");

    }
    
}

function moveToNext(){

    hideAllSlides()
    if(slidePosition === totalSlides - 1)
    {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    slides[slidePosition].classList.add("carousel-item-visible");

}

function moveToPrev() {
    hideAllSlides()

    if(slidePosition === 0){
        slidePosition = totalSlides - 1;
    }
    else {
        slidePosition--;
    }

    slides[slidePosition].classList.add("carousel-item-visible");

} 
