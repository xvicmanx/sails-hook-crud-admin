import Constants from './constants';


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
    if(!tokenInfo || !tokenInfo.exp || !token.value) {
      return true;
    }
    return tokenInfo.exp < Math.floor(new Date().getTime()/1000);
  },
  getRights() {
    const userData = readValue(KEYS.USER_DATA);
    if(!userData || !userData.rights) {
      return [];
    }
    return userData.rights;
  },
  canAccessPermissionsArea() {
    const rights = AuthStore.getRights();
    return rights.reduce((result, right) => {
      return result || permissionAreaRights.indexOf(right) > -1;
    }, false);
  },
  clear() {
    storeValue(KEYS.USER_DATA, null);
    storeValue(KEYS.TOKEN_INFO, null);
  },
};

export default AuthStore;