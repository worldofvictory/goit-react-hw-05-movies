const API_KEY ='76adc9c81926b23ecb40fbae47c771a2'
const BASE_URL = 'https://api.themoviedb.org/3';

export function getTrendingMovies() {
    return  fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
    .then(response => response.json())
}

export function getDetails(id) {
    return fetch(`${BASE_URL}/movie/${id}?language=en-US&api_key=${API_KEY}`)
    .then(response => response.json())
}

export function getCast(id) {
    return fetch(`${BASE_URL}/movie/${id}/credits?language=en-US&api_key=${API_KEY}`)
    .then(response => response.json())
}

export function getReviews(id) {
    return fetch(`${BASE_URL}/movie/${id}/reviews?language=en-US&api_key=${API_KEY}`)
    .then(response => response.json())
}

export function getMoviesByKeyword(searchQuery) {
    return fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}`)
        .then(response => response.json())
  
}