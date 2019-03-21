interface AppState {
  movieState: MovieState;
}

interface MovieState {
  movie: Movie;
  loading: boolean;
  searchKeyWord: string;
}
