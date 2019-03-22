import { SFC } from "react";
import * as React from "react";
import { Header, Table } from "semantic-ui-react";

export const CreditsComponent: SFC<{
  movie: Movie;
}> = ({ movie }) => {
  return (
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
  );
};
