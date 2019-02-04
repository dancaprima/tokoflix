export const convertToPath = (movieId, movieName) => {
  const splittedMovieName = movieName.split(' ');
  const joinedMovieName = splittedMovieName.join('-');
  const result = `${movieId}-${joinedMovieName}`;
  return result;
};

export const getIdFromPath = path => {
  const result = path.split('-');
  return Number(result[0]);
};
