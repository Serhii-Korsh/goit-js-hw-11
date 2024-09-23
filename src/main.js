import { fetchImages } from './js/pixabay-api.js';
import { renderGallery, showNoResultsMessage, showErrorMessage } from './js/render-functions.js';

const form = document.querySelector('#search-form');
const loader = document.querySelector('.loader'); 

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const searchQuery = form.querySelector('input').value.trim();
    
    if (!searchQuery || searchQuery === '') {
        showErrorMessage('The search field cannot be empty!');
        return;
    }

    loader.style.display = 'block'; 
    try {
        const data = await fetchImages(searchQuery);
        loader.style.display = 'none'; 

        if (data.hits.length === 0) {
            showNoResultsMessage();
        } else {
            renderGallery(data.hits);
        }
    } catch (error) {
        loader.style.display = 'none';
        showErrorMessage('The request failed. Please try again later.');
    }
});



