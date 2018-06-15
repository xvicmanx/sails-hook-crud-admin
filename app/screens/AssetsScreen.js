import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Divider } from 'semantic-ui-react';
import loggedInProtected from '../components/high-order/LoggedInProtected';
import LayoutMain from '../components/layout/Main';
import UploadAssetModal from '../components/modals/UploadAssetModal';
import AssetsList from '../components/general/AssetsList';

const Main = loggedInProtected(LayoutMain);

const styles = {
  pane: {
    border: 0,
  },
};

const panes = [
  {
    menuItem: 'Pictures',
    render: () => (
      <Tab.Pane style={styles.pane}>
        <UploadAssetModal type="picture" />
        <Divider hidden />
        <AssetsList type="picture" />
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'Files',
    render: () => (
      <Tab.Pane style={styles.pane}>
        <UploadAssetModal type="file" />
        <Divider hidden />
        <AssetsList type="file" />
      </Tab.Pane>
    ),
  },
];

const AssetsScreen = props => {
  return (
    <Main>
      <Tab menu={{ pointing: true }} panes={panes} />
    </Main>
  );
};

AssetsScreen.propTypes = {};

export default AssetsScreen;
