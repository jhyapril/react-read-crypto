/* eslint-disable import/default */
import React                      from 'react';
import { render }                 from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes                     from './routes';
import configureStore             from "./store/configureStore.dev";
import { Provider }               from "react-redux";
import { loadCryptos }            from "./actions/cryptoActions";
import 'babel-polyfill';
import './styles/index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();
store.dispatch(loadCryptos());

render(
  <Provider store={store}>
    <Router browserHistory={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);

