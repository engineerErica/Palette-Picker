import { v4 as uuidv4 } from 'uuid';
import './style.css';
import { getPalettes } from './data-store'

console.log('Hello World', uuidv4());
console.log(getPalettes());

const makeCard = (obj) => {
    return `<div>${obj.palettetitle}</div>`;
}

const handleEvent = (e) => {
    e.preventDefault();
    const form = document.querySelector('#palette-form');
    const formData = new FormData(form)
    const obj = Object.fromEntries(formData)
    console.log(obj.color2);
    
    const li = document.createElement('li');
    li.innerHTML = makeCard(obj)
    
    const ul = document.querySelector('#palette-list');
    
    ul.append(li);
}

const button = document.querySelector('.button');

button.addEventListener("click", handleEvent);
