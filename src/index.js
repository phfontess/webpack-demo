import _ from 'lodash';
import './style.css'
import Icon from './icon.jpg';
import printMe from './print';

import { square } from './math';

const element = document.createElement('div');
function component() {
    element.innerHTML = _.join(['Hello', 'webpack', `3 at square is ${square(3)}`], ' ');
    element.classList.add('hello');
    buildIcon();
    buildButton();
    return element;
}

function buildIcon () {
    const myIcon = new Image()
    myIcon.src = Icon;
    appendComponent(myIcon)
}

function buildButton (){
    const btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe
    appendComponent(btn);
}

function appendComponent (component) {
    element.appendChild(component);
}

document.body.appendChild(component());
