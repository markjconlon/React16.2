import React from 'react';
import { render } from 'react-dom';
import StorePicker from './components/StorePicker';
import './css/style.css';

// component to be rendered and where to mount it to
render(<StorePicker/>, document.querySelector('#main'));