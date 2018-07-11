import initialState from './initialState';
import * as types   from '../actions/actionTypes';

export default function cryptoReducer(state = initialState.cryptos, action) {
  switch(action.type) {
    case types.LOAD_CRYPTOS_SUCCESS:
      return action.payload.allCryptos;
    default:
      return state;
  }
}
