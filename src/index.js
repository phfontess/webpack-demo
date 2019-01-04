import _ from 'lodash';
import printMe from './print';
import './style.css'
import Icon from './icon.jpg';

import { square } from './math';

function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack', `3 at square is ${square(3)}`], ' ');
    element.classList.add('hello');

    const myIcon = new Image()
    myIcon.src = Icon;

    element.appendChild(myIcon);

    const btn = document.createElement('button');
    btn.innerHTML = `Click me and see alert!`;
    btn.onclick = printMe;
    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());

if(module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('accepting the updated printMe module')
        printMe()
    })
}