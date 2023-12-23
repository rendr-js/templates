import { mount, component } from '@rendrjs/core';
import App from './App.js';
import './index.css';

mount(document.querySelector('#root')!, component(App));
