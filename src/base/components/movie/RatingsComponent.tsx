import { SFC } from "react";
import * as React from "react";
import { Grid } from "semantic-ui-react";

export const RatingsComponent: SFC<{
  Ratings: Ratings[];
}> = ({ Ratings }) => {
  return (
    <Grid columns={2}>
      {Ratings.map(rating => (
        <Grid.Row key={rating.Source}>
          <Grid.Column>{rating.Source}</Grid.Column>
          {rating.Value}
        </Grid.Row>
      ))}
    </Grid>
  );
};
