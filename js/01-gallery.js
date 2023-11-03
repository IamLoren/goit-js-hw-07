import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');
const instance = basicLightbox.create(`
    <img class="modal" src="assets/images/image.png" width="800" height="600">
`);

const gallery = galleryItems.map(({preview, original, description}) => {
    return `
    <li class="gallery__item">
    <a class="gallery__link" href=''>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>
    `
}).join('');

galleryList.insertAdjacentHTML('beforeend', gallery);

galleryList.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        event.preventDefault();
        instance.show();
        document.querySelector('.modal').src = event.target.dataset.source;
      
    }
})




