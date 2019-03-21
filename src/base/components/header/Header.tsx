import { Fragment, SFC } from "react";
import * as React from "react";
import { Header, Icon, Input, Segment } from "semantic-ui-react";

export const HeaderComponent: SFC<{
  header: string;
  subHeader: string;
  setSearchText: (keyword: string) => void;
  fetchMovie: () => void;
}> = ({ header, subHeader, setSearchText, fetchMovie }) => {
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
            <input onChange={e => setSearchText(e.target.value)} />
            <Icon
              name="search"
              link={true}
              onClick={() => fetchMovie()}
              bordered={true}
            />
          </Input>
        </Header>
      </Segment>
    </Fragment>
  );
};
