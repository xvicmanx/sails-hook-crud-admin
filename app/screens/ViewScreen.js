import React from 'react';
import PropTypes from 'prop-types';
import { Loader, Dimmer } from 'semantic-ui-react';
import queryString from 'query-string';
import LayoutMain from '../components/layout/Main';
import MainBreadcrumb from '../components/layout/MainBreadcrumb';
import loggedInProtected from '../components/high-order/LoggedInProtected';
import Service from '../services/Service';

const Main = loggedInProtected(LayoutMain);

const service = Service();

const styles = {
  container: {
    margin: 'auto',
    width: 'fit-content',
  },
};

const LoadingIndicator = ({ active }) => (
  <Dimmer active={active} inverted>
    <Loader inverted>
      Loading
    </Loader>
  </Dimmer>
);

class ViewScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      loading: false,
    };
  }

  componentDidMount() {
    const { match, location } = this.props;
    const { viewName } = match.params;
    const data = queryString.parse(location.search);
    this.loadContent({ data, viewName });
  }

  componentWillReceiveProps(nextProps) {
    const { match, location } = this.props;
    const { viewName } = match.params;
    const nextSearch = nextProps.location.search;
    const nextViewName = nextProps.match.params.viewName;
    if (
      location.search !== nextSearch
      || nextViewName !== viewName
    ) {
      const data = queryString.parse(nextSearch);
      this.loadContent({ data, viewName: nextViewName });
    }
  }

  loadContent({ viewName, data }) {
    this.setState({ loading: true });
    service.viewContent({ viewName, data }).then(({ content }) => {
      this.setState({ content, loading: false });
    }).catch(() => {
      this.setState({
        content: '<h1>Error!</h1>',
        loading: false,
      });
    });
  }

  render() {
    const { content, loading } = this.state;
    const { match } = this.props;
    const { viewName } = match.params;
    return (
      <Main>
        <MainBreadcrumb
          area="views"
          modelName={viewName}
        />
        <LoadingIndicator
          active={loading}
        />
        <div
          style={styles.container}
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      </Main>
    );
  }
}


ViewScreen.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
};

export default ViewScreen;
