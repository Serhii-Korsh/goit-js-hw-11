import { fetchImages } from './js/pixabay-api.js';
import { renderGallery, showLoader, hideLoader } from './js/render-functions.js';

const form = document.querySelector('#search-form');
const input = document.querySelector('input[name="query"]');

form.addEventListener('submit', onSearchSubmit);

async function onSearchSubmit(event) {
    event.preventDefault();
    const query = input.value.trim();

    if (!query) {
        iziToast.warning({
            title: 'Input Error',
            message: 'Please enter a search term!',
        });
        return;
    }

    showLoader();

    try {
        const images = await fetchImages(query);
        renderGallery(images);
    } catch (error) {
        iziToast.error({
            title: 'No Results',
            message: 'No images were found. Please try a different keyword.',
        });
    } finally {
        hideLoader();
    }
}