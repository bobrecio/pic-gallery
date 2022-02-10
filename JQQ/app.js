const gallery = document.getElementById("gallery");
const popup = document.getElementById("popup");
const selectedImage = document.getElementById("selectedImage");

const imageIndexes = [1, 3, 4, 5, 6];
const selectedIndex = null;

imageIndexes.forEach((v,i) => {
  const image = document.createElement('img');
  image.src = `./images/pets${v}.webp`;
  image.alt = `Pet picture ${v}`;
  image.classList.add('galleryImg');
  image.classList.add('mySlides');
  image.addEventListener('click', () => {
    selectedImage.src = `./images/pets${v}.webp`;
    popup.style.transform = `translateY(0)`;
  });
  gallery.appendChild(image);
})

popup.addEventListener('click', () => {
  popup.style.transform = `translateX(-100%)`;
  popup.src = '';
  popup.alt = '';
})
