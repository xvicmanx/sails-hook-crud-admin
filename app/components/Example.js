import React from 'react';
import { Container, Menu, Segment } from 'semantic-ui-react';
import { render } from 'react-dom';
import Service from '../services/Service';
import ModelCrud from './ModelCrud';
import { getModel } from '../helpers/models';
// Component's Base CSS
import './index.css';

const styles = {
  container: {
    margin: 'auto',
    width: 'fit-content',
  },
  segment: {
    width: '95%',
    margin: '3rem auto 0 auto',
    paddingBottom: '4rem',
    border: 0,
    boxShadow: 'none',
  },
};

const Example = ({ modelName }) => (
  <div style={styles.container}>
    <ModelCrud
      model={getModel(modelName)}
      service={Service(modelName)}
      caption={modelName}
    />
  </div>
);


const FixedMenuLayout = () => (
  <div>
    <Menu>
      <Container>
        <Menu.Item as='div' header>
          Admin
        </Menu.Item>
      </Container>
    </Menu>

    <Segment as="div" style={styles.segment}>
      <Example modelName={'foo'} />
    </Segment>
  </div>
)

if (typeof window !== 'undefined' &&
  typeof window.document !== 'undefined' &&
  window.document.getElementById('app')
) {
  render(<FixedMenuLayout />, window.document.getElementById('app'));
}



export default FixedMenuLayout;
