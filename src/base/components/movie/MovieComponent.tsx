import { Fragment, SFC } from "react";
import * as React from "react";
import { Image, Segment } from "semantic-ui-react";
import { CreditsComponent } from "./CreditsComponent";
import { ExtrasComponent } from "./ExtrasComponent";
import { RatingsComponent } from "./RatingsComponent";

export const MovieComponent: SFC<{
  movie: Movie;
}> = ({ movie }) => {
  const imdbLink = `https://m.imdb.com/title/${movie.imdbID}`;
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
          <CreditsComponent movie={movie} />
          <br />
          <RatingsComponent Ratings={movie.Ratings} />
        </Segment>
        <Segment>
          <ExtrasComponent movie={movie} />
        </Segment>
        <Segment>{movie.Awards}</Segment>
      </Segment.Group>
    </Fragment>
  );
};
