import { Fragment, SFC } from "react";
import * as React from "react";
import { Header, Icon, Input, Segment } from "semantic-ui-react";

export const HeaderComponent: SFC<{
  header: string;
  subHeader: string;
}> = ({ header, subHeader }) => {
  return (
    <Fragment>
      <Segment>
        <Header as="h2" block={true}>
          <Icon name="video play" />
          <Header.Content>
            {header}
            <Header.Subheader>{subHeader}</Header.Subheader>
          </Header.Content>
        </Header>
        <Header floated="right">
          <Input icon={true} placeholder="Search...">
            <input />
            <Icon name="search" />
          </Input>
        </Header>
      </Segment>
    </Fragment>
  );
};
