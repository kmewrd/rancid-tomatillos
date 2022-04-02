const cleanMovieData = data => {
  const movie = data.movie;

  movie.genres = formatGenres(movie.genres);
  movie.release_date = formatDate(movie.release_date);
  movie.runtime = removeZeros(movie.runtime);
  movie.revenue = removeZeros(movie.revenue);
  movie.budget = removeZeros(movie.budget);

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

const removeZeros = data => {
  return data ? data : 'Unavailable';
}

export default cleanMovieData;