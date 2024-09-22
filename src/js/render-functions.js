import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
let lightbox;

export function renderGallery(images) {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = ''; 

    if (images.length === 0) {
        iziToast.error({
            message: 'Sorry, there are no images matching <br>your search query. Please try again!',
            titleColor: 'white',
            title: 'ⓧ',
            titleSize: '22px',
            backgroundColor: "red",
            icon: "",
            messageColor: 'white',
            position: "topRight",
            theme: 'dark',
            class: 'toast-center',
        });
        return;
    }

    const markup = images.map(image => createImageCard(image)).join('');
    gallery.innerHTML = markup;
    
    if (!lightbox) {
        lightbox = new SimpleLightbox('.gallery a');
    } else {
        lightbox.refresh();
    }
}

function createImageCard({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) {
    return `
        <a href="${largeImageURL}">
            <div class="photo-card">
                <img width="360" height="152" src="${webformatURL}" class="photo-card-img" alt="${tags}" loading="lazy" />
                <div class="info">
                    <p><b>Likes</b> ${likes}</p>
                    <p><b>Views</b> ${views}</p>
                    <p><b>Comments</b> ${comments}</p>
                    <p><b>Downloads</b> ${downloads}</p>
                </div>
            </div>
        </a>
    `;
}


export function showLoader() {
    document.querySelector('.loader').classList.remove('hidden');
}

export function hideLoader() {
    document.querySelector('.loader').classList.add('hidden');
}