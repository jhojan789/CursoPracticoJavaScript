// console.log('Hello, world');

const h1 = document.querySelector('h1');
// const p = document.querySelector('p');
// const p = document.querySelectorAll('p');
const p = document.getElementsByTagName('p');
// const pclass = document.querySelector('.myClass');
const pclass = document.getElementsByClassName('myClass');
const pid = document.querySelector('#myId');
const input = document.querySelector('input');

const img = document.createElement('img');

const item1 = document.querySelector('.main-nav .item2');

img.setAttribute('scr', 'https://upload.wikimedia.org/wikipedia/commons/3/32/Platzi.jpg');
// pid.append(img);
pid.appendChild(img);

item1.innerText = 'Item2';
// console.log(h1);
// console.log(input.value);
console.log(
    h1,
    p,
    pclass,
    pid,
    input
);

h1.innerHTML = 'Patito <br> <p>Feo</p>'; // Adds HTML
h1.innerText = 'Patito <br> <p>Feo</p>'; // Adds only plain text 
console.log(h1.getAttribute('class')); // gets the attribute name
h1.setAttribute('class', 'h1');  //change or add the attribute value 
console.log(h1.getAttribute('class'))

h1.classList.add('rojo');   //add a class
h1.classList.remove('h1');  //remove a class
// h1.classListt.toggle('h1');  
// h1.classListt.contains('h1');
console.log(img);

input.value = '4440';

