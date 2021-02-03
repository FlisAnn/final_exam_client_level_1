import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios'

axios.defaults.baseURL = "https://content.viaplay.se/pc-se/serier/samtliga"
const store = configureStore()
window.store = store

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
