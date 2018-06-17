import Constants from './constants';
import { getModels, NON_CRUD_MODELS_FILTER } from './helpers/models';

const storeValue = (key, value) => {
  if (typeof(Storage) !== 'undefined') {
    window.localStorage.setItem(
      key,
      JSON.stringify(value),
    );
  }
};

const readValue = (key) => {
  if (typeof(Storage) !== 'undefined') {
    const value = window.localStorage.getItem(key);
    if (!value) return null;
    return JSON.parse(value);
  }
};

const KEYS = {
  TOKEN_INFO: 'tokenInfo',
  USER_DATA: 'userData',
};

const permissionAreaRights = [
  '*::*',
  'read::*',
];

Constants.CRUD_MODELS.forEach(c => {
  permissionAreaRights.push(
    `*::${c}`
  );
  permissionAreaRights.push(
    `read::${c}`
  );
});


const AuthStore = {
  storeTokenInfo(value, exp) {
    storeValue(KEYS.TOKEN_INFO, {
      value, exp,
    });
  },
  storeUserData(userData) {
    storeValue(KEYS.USER_DATA, userData);
  },
  isTokenExpired() {
    const tokenInfo = readValue(KEYS.TOKEN_INFO);
    if(!tokenInfo || !tokenInfo.exp || !tokenInfo.value) {
      return true;
    }
    return tokenInfo.exp < Math.floor(new Date().getTime()/1000);
  },
  getUserName() {
    const userData = readValue(KEYS.USER_DATA);
    return userData && userData.name || '';
  },
  getToken() {
    const tokenInfo = readValue(KEYS.TOKEN_INFO);
    return tokenInfo && tokenInfo.value;
  },
  getRights() {
    const userData = readValue(KEYS.USER_DATA);
    if(!userData || !userData.rights) {
      return [];
    }
    return userData.rights;
  },
  hasAnyOfRights(expectedRights) {
    const rights = AuthStore.getRights();
    return rights.reduce((result, right) => {
      return result || expectedRights.indexOf(right) > -1;
    }, false);
  },
  canAccessPermissionsArea() {
    return AuthStore.hasAnyOfRights(permissionAreaRights);
  },
  canUploadAssets() {
    const expectedRights = [
      '*::*',
      'upload-assets::*',
    ];
    const models = Object.keys(getModels());
    models.filter(NON_CRUD_MODELS_FILTER)
      .forEach(m => {
        expectedRights.push(`*::${m}`);
        expectedRights.push(`upload-assets::${m}`);
      });
    return AuthStore.hasAnyOfRights(expectedRights);
  },
  canUploadAssetsForModel(model) {
    const expectedRights = [
      '*::*',
      'upload-assets::*',
      `*::${model}`,
      `upload-assets::${model}`
    ];
    return AuthStore.hasAnyOfRights(expectedRights);
  },
  canViewAssets() {
    const expectedRights = [
      '*::*',
      'view-assets::*',
    ];
    const models = Object.keys(getModels());
    models.filter(NON_CRUD_MODELS_FILTER)
      .forEach(m => {
        expectedRights.push(`*::${m}`);
        expectedRights.push(`view-assets::${m}`);
      });
    return AuthStore.hasAnyOfRights(expectedRights);
  },
  canViewAssetsForModel(model) {
    const expectedRights = [
      '*::*',
      'view-assets::*',
      `*::${model}`,
      `view-assets::${model}`
    ];
    return AuthStore.hasAnyOfRights(expectedRights);
  },
  clear() {
    storeValue(KEYS.USER_DATA, null);
    storeValue(KEYS.TOKEN_INFO, null);
  },
};

export default AuthStore;