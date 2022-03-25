const fetchAPI = {
  fetchMovies() {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies').then((response) => response.json());
  },
  fetchSingleMovie(id) {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`).then((response) => response.json());
  }
}

export default fetchAPI;