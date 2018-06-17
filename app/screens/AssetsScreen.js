import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Divider, Loader, Header, Message } from 'semantic-ui-react';
import Service from '../services/Service';
import loggedInProtected from '../components/high-order/LoggedInProtected';
import Constants from '../constants';
import LayoutMain from '../components/layout/Main';
import UploadAssetModal from '../components/modals/UploadAssetModal';
import AssetsList from '../components/general/AssetsList';
import AuthStore from '../AuthStore';

const Main = loggedInProtected(LayoutMain);

const styles = {
  pane: { border: 0 },
};

const service = Service('crudasset');

class Assets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true,
    };
    this.loadItems = this.loadItems.bind(this);
  }

  loadItems() {
    service.fetchAssets({
      type: this.props.type,
    })
      .then((items) => {
        this.setState({ items, loading: false });
      });
  }
  
  componentDidMount() {
    const canView = AuthStore.canViewAssets();
    if (canView) {
      this.loadItems();
    } else {
      this.setState({ loading: false });
    }
  }

  render() {
    const { type } = this.props;
    
    if (this.state.loading) return <Loader active />;
    
    const canUpload = AuthStore.canUploadAssets();
    const canView = AuthStore.canViewAssets();
    return (
      <div>
        {canUpload && (
          <UploadAssetModal
            type={type}
            onSuccess={this.loadItems}
          />
        )}
        <Divider hidden />
        {canView && (
          <AssetsList
            type={type}
            items={this.state.items}
          />
        )}
        {!canView && (
          <Message
            warning
            icon="warning"
            content="You do not have permission for viewing assets!"
          />
        )}
      </div>
    );
  }
}



const panes = [
  {
    menuItem: 'Pictures',
    render: () => (
      <Tab.Pane style={styles.pane}>
        <Assets type={Constants.ASSETS_TYPES.PICTURE} />
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'Files',
    render: () => (
      <Tab.Pane style={styles.pane}>
        <Assets type={Constants.ASSETS_TYPES.FILE} />
      </Tab.Pane>
    ),
  },
];

const AssetsScreen = props => {
  return (
    <Main>
      <Header as="h1" content="Assets" />
      <Tab
        menu={{ pointing: true }}
        panes={panes}
      />
    </Main>
  );
};

AssetsScreen.propTypes = {};

export default AssetsScreen;
