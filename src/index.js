import React from 'react';
import ReactDOM from 'react-dom';

const template = React.createElement('p', {}, 'Hello React!');
ReactDOM.render(template, document.getElementById('root'));