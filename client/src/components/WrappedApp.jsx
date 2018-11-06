import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../store/index';
import App from './App';

import setAuthToken from '../utils/session_api_util';
import jwt_decode from "jwt-decode";
import { setCurrentUser, logoutUser } from '../actions/session/index';

if (localStorage.jwtToken) {
  const store = configureStore();
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  }
}

const WrappedApp = ({ store }) => {
  return (
    <Provider store={configureStore()}>
      <HashRouter>
        <Route path="" component={App}/>
      </HashRouter>
    </Provider>
  )
}

export default WrappedApp;
