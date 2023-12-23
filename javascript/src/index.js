import { mount, component } from '@rendrjs/core';
import App from './App';
import './index.css';

mount(document.querySelector('#root'), component(App));
