import * as cryptoApi from '../api/api';
import * as types     from './actionTypes';

export function loadCryptosSuccess(allCryptos) {
  return {type: types.LOAD_CRYPTOS_SUCCESS, payload: {allCryptos}};
}

export function loadCryptos(currency) {
  return (dispatch) => {
    return cryptoApi.getCryptoData(currency).then(cryptos => {
      dispatch(loadCryptosSuccess(cryptos));
    }).catch(error => {
      throw(error);
    });
  };
}
