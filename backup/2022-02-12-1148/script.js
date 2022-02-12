const gallery = document.getElementById("gallery");
const popup = document.getElementById("popup");
const slideNumber = document.getElementById("slideNumber");
const caption = document.getElementById("caption");
const selectedImage = document.getElementById("selectedImage");
const btnPrev = document.getElementById("btnPrev");
const btnNext = document.getElementById("btnNext");
const pathTitle = document.getElementById("pathTitle");
const gotoParent = document.getElementById("gotoParent");
const subFolders = document.getElementById("subFolder-container");

const imageList = galleryImages;
const dirList = galleryDirs;

const selectedIndex = null;

gotoParent.href = "./index.php?loc=" + galleryParent; // defined in php in index.php
gotoParent.append(galleryParent);

pathTitle.textContent = galleryNav; // defined in php in index.php

dirList.forEach((dir, i) => {
  const dirLink = document.createElement("a");
  let subURL = "./index.php?loc=" + galleryNav + "/" + dir;
  dirLink.href = subURL;
  dirLink.text = dir;
  dirLink.classList.add("subFolder");
  subFolders.appendChild(dirLink);
});

imageList.forEach((val, i) => {
  let imgFile = val;
  const image = document.createElement("img");
  image.src = `${pathTitle.textContent}/${imgFile}`;
  image.alt = `${imgFile}`;
  image.classList.add("galleryImg");

  image.addEventListener("click", () => {
    selectedImage.src = `${pathTitle.textContent}/${imgFile}`;
    slideNumber.innerText = `${i + 1}/${imageList.length}`;
    popup.style.transform = `translateY(0)`;
    caption.innerText = `${imgFile}`;
    caption.addEventListener("click", () => window.open(selectedImage.src));
  });
  gallery.appendChild(image);
});

function closeModal() {
  popup.style.transform = `translateX(-100%)`;
  popup.src = "";
  popup.alt = "";
}

function updatePic(x) {
  let currPicIndex = imageList.indexOf(caption.innerText);
  let newPicIndex = currPicIndex + x;

  if (newPicIndex < 0) {
    newPicIndex = imageList.length - 1;
  } else if (newPicIndex > imageList.length - 1) {
    newPicIndex = 0;
  }

  let newPicFile = imageList[newPicIndex];

  selectedImage.src = `${pathTitle.textContent}/${newPicFile}`;
  slideNumber.innerText = `${newPicIndex + 1}/${imageList.length}`;
  popup.style.transform = `translateY(0)`;
  caption.innerText = `${newPicFile}`;
  caption.addEventListener("click", () => window.open(selectedImage.src));
}
