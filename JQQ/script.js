const gallery = document.getElementById("gallery");
const popup = document.getElementById("popup");
const slideNumber = document.getElementById("numbertext");
const caption = document.getElementById("caption");
const selectedImage = document.getElementById("selectedImage");
const btnPrev = document.getElementById("btnPrev");
const btnNext = document.getElementById("btnNext");
const pathTitle = document.getElementById("pathTitle");

const imageList = [1, 3, 4, 5, 6];
const selectedIndex = null;

pathTitle.textContent = "images";

// imageList.forEach((v, i) => {
//   const image = document.createElement('img');
//   image.src = `./images/pets${v}.webp`;
//   image.alt = `Pet picture ${v}`;
//   image.classList.add('galleryImg');

//   image.addEventListener('click', () => {
//     selectedImage.src = `./images/pets${v}.webp`;
//     slideNumber.innerText = `${i+1}/${imageList.length}`;
//     popup.style.transform = `translateY(0)`;
//   });
//   gallery.appendChild(image);
// })

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