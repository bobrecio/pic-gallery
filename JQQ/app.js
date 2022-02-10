const gallery = document.getElementById("gallery");
const popup = document.getElementById("popup");
const slideNumber = document.getElementById("numbertext");
const caption = document.getElementById("caption");
const selectedImage = document.getElementById("selectedImage");
const btnPrev = document.getElementById("btnPrev");
const btnNext = document.getElementById("btnNext");

const imageList = [1, 3, 4, 5, 6];
const selectedIndex = null;

imageList.forEach((v, i) => {
  const image = document.createElement('img');
  image.src = `./images/pets${v}.webp`;
  image.alt = `Pet picture ${v}`;
  image.classList.add('galleryImg');
  //image.classList.add('mySlides');
  image.addEventListener('click', () => {
    selectedImage.src = `./images/pets${v}.webp`;
    slideNumber.innerText = `${i+1}/${imageList.length}`;
    popup.style.transform = `translateY(0)`;
  });
  gallery.appendChild(image);
})

btnPrev.addEventListener('click', () => {
  let thisSlide = slideNumber.innerText.split("/")[0];
  selectedImage.src = `./images/pets${thisSlide-1}.webp`;
  slideNumber.innerText = `${thisSlide-1}/${imageList.length}`;
})
btnNext.addEventListener('click', () => {
  let thisSlide = slideNumber.innerText.split("/")[0];
  selectedImage.src = `./images/pets${thisSlide-1}.webp`;
  slideNumber.innerText = `${thisSlide-1}/${imageList.length}`;
})

popup.addEventListener('click', () => {
  popup.style.transform = `translateX(-100%)`;
  popup.src = '';
  popup.alt = '';
})

const openModal = () => {
  document.getElementById("myModal").style.display = "block";
}

const closeModal = () => {
  document.getElementById("myModal").style.display = "none";
}

// let slideIndex = 1;
// showSlides(slideIndex);

// const changeSlide = (n) => {
//   showSlides(slideIndex += n);
// }

// const currentSlide = (n) => {
//   showSlides(slideIndex = n);
// }

// const showSlides = (n) => {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("demo");
//   var captionText = document.getElementById("caption");
//   if (n > slides.length) {
//     slideIndex = 1
//   }
//   if (n < 1) {
//     slideIndex = slides.length
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
//   captionText.innerHTML = dots[slideIndex - 1].alt;
// }
