const cleanMovieData = data => {
  const movie = data.movie;

  if (!movie.genres.length) {
    movie.genres = ['Unavailable'];
  }
  if (!movie.runtime) {
    movie.runtime = 'Unavailable';
  }
  if (!movie.revenue) {
    movie.revenue = 'Unavailable';
  }
  if (!movie.budget) {
    movie.budget = 'Unavailable';
  }
  if (!movie.release_date) {
    movie.release_date = 'Unavailable'
  }

  return movie;
}

export default cleanMovieData;