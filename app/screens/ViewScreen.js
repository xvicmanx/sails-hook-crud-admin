import React from 'react';
import PropTypes from 'prop-types';
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

class ViewScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
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
    service.viewContent({ viewName, data }).then(({ content }) => {
      this.setState({ content });
    }).catch(() => {
      this.setState({ content: '<h1>Error!</h1>' });
    });
  }

  render() {
    const { content } = this.state;
    const { match } = this.props;
    const { viewName } = match.params;
    return (
      <Main>
        <MainBreadcrumb
          area="views"
          modelName={viewName}
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
