import { SFC } from "react";
import * as React from "react";
import { List } from "semantic-ui-react";

export const ExtrasComponent: SFC<{
  movie: Movie;
}> = ({ movie }) => {
  return (
    <List horizontal={true} divided={true} relaxed="very">
      <List.Item>{movie.Released}</List.Item>
      <List.Item>{movie.Runtime}</List.Item>
      <List.Item>{movie.Genre} </List.Item>
      <List.Item>{movie.Production} </List.Item>
      <List.Item>{movie.Language} </List.Item>
      <List.Item>{movie.Country} </List.Item>
    </List>
  );
};
