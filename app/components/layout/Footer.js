import React from 'react';
import {
  Segment, Container, Grid, Header,
} from 'semantic-ui-react';

const styles = {
  wrapper: {
    padding: '5em 0em',
    marginTop: '4rem',
    backgroundColor: '#444',
    textAlign: 'center',
  },
};

const Footer = () => (
  <Segment
    inverted
    vertical
    style={styles.wrapper}
  >
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={16}>
            <Header as="h2" inverted>
              CRUD Admin
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

export default Footer;
