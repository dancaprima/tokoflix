export const convertToPath = (movieId, movieName) => {
  let splittedMovieName = movieName.split(' ');
  let joinedMovieName = splittedMovieName.join('-');
  let result = `${movieId}-${joinedMovieName}`;
  return result;
};
