const API_KEY = '46054358-74185f2755c78a9980c41a2df'; 
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
    const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.hits.length === 0) {
            throw new Error('No images found.');
        }
        return data.hits;
    } catch (error) {
        console.error('Error fetching images:', error);
        return [];
    }
}