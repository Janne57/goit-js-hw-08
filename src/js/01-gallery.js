import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


const containerGallery = document.querySelector('.gallery');
const insertImg = createGallery(galleryItems);
containerGallery.insertAdjacentHTML('beforeend', insertImg);


function createGallery(imgList) {
    const createImg = imgList.map(({preview, original, description}) => { //рендер разметки
        return `
        <li class="gallery__item">   
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
             </a>
        </li>
        `;
        })
        .join('');
    return createImg;
};

var lightbox = new SimpleLightbox('.gallery a', {'captionsData': 'alt', 'captionsDelay': 250});
