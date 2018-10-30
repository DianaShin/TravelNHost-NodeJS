import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../store/index';
import App from './App';

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
