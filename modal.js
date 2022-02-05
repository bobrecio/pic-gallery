const picArray = ["pets1.webp","pets3.webp","pets4.webp","pets5.webp","pets6.webp"];
const gallery = document.getElementById('gallery');
const pictureContainer = document.getElementById('pictureContainer');
const thumbsContainer = document.getElementById('thumbsContainer');

setUpGallery;

function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}

function setUpGallery(){
    for (let i = 0; i < picArray.length; i++) {
        // <div class="mySlides">
        //     <div class="numbertext">1 / 4</div>
        //     <img src="images/pets1.webp" style="width:100%">
        // </div>
        const mySlides = document.createElement('div');
        mySlides.classList.add("mySlides");

        const numberText = document.createElement('div');
        numberText.classList.add("numberText");

        const image = document.createElement('img');
        image.src = `./images/${picArray[i]}`;
        image.style.width = "100%";

        mySlides.appendChild(numberText);
        mySlides.appendChild(image);




        const thumb = document.createElement(div)
        
    }

}