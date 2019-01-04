import _ from 'lodash';
import printMe from './print';
import './style.css'
import Icon from './icon.jpg';

function render() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    this.buildIcon();
    this.buildButton()

    this.buildIcon = function() {
        const myIcon = new Image()
        myIcon.src = Icon;
        this.appendComponent(myIcon)
    }
    
    this.buildButton = function(){
        const btn = document.createElement('button');
        btn.innerHTML = 'Click me and check the console!';
        btn.onclick = printMe;
        this.appendComponent(btn)
    }
    
    this.appendComponent = function(component) {
        element.appendChild(component);
    }

    return element;
}


document.body.appendChild(render());