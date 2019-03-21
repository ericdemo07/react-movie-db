export const apifetchMovies = async ({
  searchKeyWord
}: {
  searchKeyWord: string;
}): Promise<Movie> => {
  return fetch(
    `http://www.omdbapi.com/?apikey=&t=${searchKeyWord}`
  ).then(response => {
    return response.json();
  });
};
