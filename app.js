const gallery = document.getElementById("gallery");
const popup = document.getElementById("popup");
const selectedImage = document.getElementById("selectedImage");

const imageIndexes = [1, 3, 4, 5, 6];
const selectedIndex = null;

imageIndexes.forEach((v,i) => {
  const image = document.createElement('img');
  image.src = `/images/Pets (${v}).jpg`;
  image.alt = `Pet picture ${v}`;
  image.classList.add('galleryImg');
  image.classList.add('mySlides');
  image.addEventListener('click', () => {
    selectedImage.src = `/images/pets${v}.webp`;
    popup.style.transform = `translateY(0)`;
  });
  gallery.appendChild(image);
})

popup.addEventListener('click', () => {
  popup.style.transform = `translateX(-100%)`;
  popup.src = '';
  popup.alt = '';
})

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function changeSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  console.log(slides);
  // var slides = document.getElementsByClassName("galleryImg");
  //var dots = document.getElementsByClassName("demo");
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
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex - 1].style.display = "block";
  //dots[slideIndex - 1].className += " active";
  // captionText.innerHTML = dots[slideIndex - 1].alt;
}