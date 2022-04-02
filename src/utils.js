const cleanMovieData = data => {
  const movie = data.movie;

  movie.genres = formatGenres(movie.genres);
  movie.release_date = formatDate(movie.release_date);

  if (!movie.runtime) {
    movie.runtime = 'Unavailable';
  }
  if (!movie.revenue) {
    movie.revenue = 'Unavailable';
  }
  if (!movie.budget) {
    movie.budget = 'Unavailable';
  }

  return movie;
}

const formatGenres = genres => {
  if (!genres.length) {
    return 'Unavailable';
  } else if (genres.length > 1) {
    return genres.join(', ');
  } else {
    return genres.join('');
  }
}

const formatDate = date => {
  if (!date) {
    return 'Unavailable'
  } else {
    date = new Date(date);
    return date.getFullYear();
  }
}

export default cleanMovieData;