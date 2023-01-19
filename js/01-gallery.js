import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryImageMarkap(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);

function createGalleryImageMarkap(items) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}

function onGalleryContainerClick(event) {
  event.preventDefault();
  const isGalleryImage = event.target.classList.contains('gallery__image');
  if (!isGalleryImage) {
    return;
  }

  const currentImgUrl = event.target.dataset.source;

  const instance = basicLightbox.create(`<img src="${currentImgUrl}" width="1280" height="auto">`);
  instance.show();
}
