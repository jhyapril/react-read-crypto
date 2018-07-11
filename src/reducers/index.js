import { combineReducers } from 'redux';
import cryptos             from './cryptoReducer';

const rootReducer = combineReducers({
  cryptos
});

export default rootReducer;
