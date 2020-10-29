import React from 'react';

import Routes from './routes';
import {BrowserRouter} from 'react-router-dom';
import Header from './Components/Header'

import {Provider } from 'react-redux';
import store from './store';



export default function src() {
 return (
   <Provider store={store}>
   <BrowserRouter>
   <Header/>
  <Routes/>
   </BrowserRouter>
   </Provider>
 );
}
