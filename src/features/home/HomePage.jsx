import React from 'react';
import {
  Button,
  Container,
  Header,
  Icon,
  Segment,
  Image,
} from 'semantic-ui-react';

const HomePage = ({ history }) => {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container>
        <Header as="h1" inverted>
          <Image
            size="massive"
            src="/assets/logo.png"
            style={{ marginBottom: 12 }}
          />
          Re-events
        </Header>

        <Button size="huge" inverted onClick={() => history.push('/events')}>
          Get started
          <Icon name="right arrow" inverted />
        </Button>
      </Container>
    </Segment>
  );
};

export default HomePage;
