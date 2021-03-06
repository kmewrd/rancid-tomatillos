const fetchMovieData = id => {
  if (id) {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`).then((response) => response.json());
  } else {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies').then((response) => response.json());
  }
}

export default fetchMovieData;
