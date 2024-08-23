const form = document.querySelector('form');
const gallery = document.querySelector('.image-container');
const searchInput = form.querySelector('.search-input');
let timeoutId;

// Debouncing the search input
searchInput.addEventListener('input', () => {
    clearTimeout(timeoutId); // Clear the previous timeout
    timeoutId = setTimeout(() => {
        let query = searchInput.value.trim();
        if (query === '') {
            query = 'nothing';
        }
        tvMazeApi(query);
    }, 500); // Set the delay to 500ms (adjust as needed)
});

async function tvMazeApi(query) {
    const res = await fetch(`https://www.omdbapi.com/?apikey=591d3e4b&s=${query}`);
    const shows = await res.json();
    
    makeImages(shows);
}

function makeImages(shows) {
    gallery.innerHTML = '';
    for (let show of shows.Search) {
        if (show.Poster) {
            const div = document.createElement('div');
            div.innerHTML = `<img src=${show.Poster} onclick=openMovie('${show.imdbID}')>`
            gallery.append(div);
        }
    }
}

function openMovie(id){
    alert(id);
}