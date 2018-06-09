import React from 'react'
import { Grid, Header } from 'semantic-ui-react';
import LoginForm from '../components/forms/LoginForm';
import { Redirect } from 'react-router';
import AuthStore from '../AuthStore';

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

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }
  
  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/model"/>;
    }
    return (
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
            <LoginForm onSubmitSuccess={(res) => {
                AuthStore.storeTokenInfo(
                  res.token,
                  res.exp
                );
                AuthStore.storeUserData(res.userData);
                this.setState({ loggedIn: true });
              }}
            />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default LoginScreen;
