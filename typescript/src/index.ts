import { mount, rendr } from '@rendrjs/core';
import App from './App.js';
import './index.css';

mount(document.querySelector('#root')!, rendr(App));
