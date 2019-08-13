import React from 'react';
import { render } from 'react-dom';
import Picker from './components/Picker';
import App from './App';
import './index.css';

render(
  <App />,document.getElementById('root'),
  <Picker/>, docuement.getElementById('main')
);
