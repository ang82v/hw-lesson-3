import React from 'react';
import ReactDOM from 'react-dom';

const name = 'Андрей Гусев'
const element = <h1>Hello World! Меня зовут {name}!</h1>

ReactDOM.render(element, document.getElementById('root'))