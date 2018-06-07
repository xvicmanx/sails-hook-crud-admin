import React from 'react'
import { Grid, Header } from 'semantic-ui-react';
import LoginForm from '../components/forms/LoginForm';

const styles = {
  container: {
    height: '100vh',
    position: 'relative',
    width: '100%',
  },
  grid: {
    height: '100vh',
    width: '100%',
  },
  loginWrapper: {
    maxWidth: 450,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
};

const LoginScreen = () => (
  <div style={styles.container}>
    <Grid
      textAlign='center'
      style={styles.grid}
      verticalAlign='middle'
    >
      <Grid.Column style={styles.loginWrapper}>
        <Header
          as='h2'
          color='teal'
          textAlign='center'
        >
          Login
        </Header>
        <LoginForm />
      </Grid.Column>
    </Grid>
  </div>
)

export default LoginScreen;
