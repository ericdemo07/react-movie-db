import { Fragment, SFC } from "react";
import * as React from "react";
import { Grid, Header, Image, List, Segment, Table } from "semantic-ui-react";

export const MovieComponent: SFC<{
  movie: Movie;
}> = ({ movie }) => {
  const imdbLink = `https://m.imdb.com/title/${movie.imdbID}`;
  const { Ratings } = movie;
  return (
    <Fragment>
      <Segment.Group>
        <Segment compact={true} size="large">
          <Image src={movie.Poster} size="medium" floated="left" />
          <a href={imdbLink} target="_blank">
            <h3>{movie.Title}</h3>
          </a>
          <br />
          {movie.Plot}
          <br />
          <Table basic="very" celled={true} collapsing={true}>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Header as="h4">
                    <Header.Content>Director</Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>{movie.Director}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Header as="h4">
                    <Header.Content>Writer</Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>{movie.Writer}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Header as="h4">
                    <Header.Content>Actors</Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>{movie.Actors}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <br />
          <Grid columns={2}>
            {Ratings.map(rating => (
              <Grid.Row key={rating.Source}>
                <Grid.Column>{rating.Source}</Grid.Column>
                {rating.Value}
              </Grid.Row>
            ))}
          </Grid>
        </Segment>
        <Segment>
          <List horizontal={true} divided={true} relaxed="very">
            <List.Item>{movie.Released}</List.Item>
            <List.Item>{movie.Runtime}</List.Item>
            <List.Item>{movie.Genre} </List.Item>
            <List.Item>{movie.Production} </List.Item>
            <List.Item>{movie.Language} </List.Item>
            <List.Item>{movie.Country} </List.Item>
          </List>
        </Segment>
        <Segment>{movie.Awards}</Segment>
      </Segment.Group>
    </Fragment>
  );
};
