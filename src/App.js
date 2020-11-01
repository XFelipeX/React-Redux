import React from 'react';

import Routes from './routes';
import {Router} from 'react-router-dom';
import Header from './Components/Header'

import {Provider } from 'react-redux';
//history precisa ficar antes da store
import history from './services/history'
import store from './store';


export default function src() {
 return (
   <Provider store={store}>
   <Router history={history}>
   <Header/>
  <Routes/>
   </Router>
   </Provider>
 );
}
