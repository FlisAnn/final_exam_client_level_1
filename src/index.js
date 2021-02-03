import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './state/store/configureStore'
import 'semantic-ui-css/semantic.min.css'
import './index.css';
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';
import axios from 'axios'

axios.defaults.baseURL = "https://content.viaplay.se/pc-se/serier/samtliga"

window.store = store

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
