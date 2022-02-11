const gallery = document.getElementById("gallery");
const popup = document.getElementById("popup");
const slideNumber = document.getElementById("numbertext");
const caption = document.getElementById("caption");
const selectedImage = document.getElementById("selectedImage");
const btnPrev = document.getElementById("btnPrev");
const btnNext = document.getElementById("btnNext");
const pathTitle = document.getElementById("pathTitle");
const gotoParent = document.getElementById("gotoParent");
const subFolders = document.getElementById("subFolders");

const imageList = galleryImages;
const dirList = galleryDirs;

const selectedIndex = null;

gotoParent.href = "./index.php?loc=" + galleryParent;
gotoParent.append(galleryParent);

pathTitle.textContent = galleryNav;

dirList.forEach ((dir,i) => {
  const dirLink = document.createElement("a");
  let subURL = "./index.php?loc=" + galleryNav + "/" + dir;
  dirLink.href = subURL;
  dirLink.text = (subFolders.childElementCount > 0) ? " | " + dir : dir;
  dirLink.classList.add('subDirLink');
  subFolders.appendChild(dirLink);
})

imageList.forEach((v, i) => {
  const image = document.createElement('img');
  image.src = `${pathTitle.textContent}/${v}`;
  image.alt = `${v}`;
  image.classList.add('galleryImg');

  image.addEventListener('click', () => {
    selectedImage.src = `${pathTitle.textContent}/${v}`;
    slideNumber.innerText = `${i+1}/${imageList.length}`;
    popup.style.transform = `translateY(0)`;
  });
  gallery.appendChild(image);
})

btnPrev.addEventListener('click', () => {
  let thisSlide = slideNumber.innerText.split("/")[0];
  selectedImage.src = `${thisSlide-1}`;
  slideNumber.innerText = `${thisSlide-1}/${imageList.length}`;
})
btnNext.addEventListener('click', () => {
  let thisSlide = slideNumber.innerText.split("/")[0];
  selectedImage.src = `${thisSlide-1}`;
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