interface AppState {
  movie: MovieState;
}

interface MovieState {
  movies: Movie[];
  name: string;
}
