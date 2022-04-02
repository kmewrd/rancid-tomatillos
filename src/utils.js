const cleanMovieData = data => {
  const movie = data.movie;

  if (!movie.genres.length) {
    movie.genres = ['Unavailable'];
  } else if (movie.genres.length > 1) {
    movie.genres = movie.genres.join(', ');
  } else {
    movie.genres = movie.genres.join('');
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