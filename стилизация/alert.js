let div1 = document.querySelector('#div1');
let button1 = document.querySelector('#button1');
button1.addEventListener('click', function() {
    div1.style.width = '200px';
    div1.style.height = '100px';
    div1.style.border = '2px solid black';
});
console.log("следующее задание");

let div2 = document.querySelector('#div2');
let button2 = document.querySelector('#button2');
button2.addEventListener('click', function() {
    div2.style.fontSize = '20px';
    div2.style.borderTop = '3px solid blue';
    div2.style.backgroundColor = 'yellow';
});
console.log("следующее задание");

let list1 = document.querySelectorAll('#list1 li');
let button3 = document.querySelector('#button3');
button3.addEventListener('click', function() {
    for (let li of list1) {
        li.style.cssFloat = 'left';
    }
});
console.log("следующее задание");

let paragraph1 = document.querySelector('#paragraph1');
let button4 = document.querySelector('#button4');
let button5 = document.querySelector('#button5');
let button6 = document.querySelector('#button6');

button4.addEventListener('click', function() {
    paragraph1.classList.add('crossed');
});
button5.addEventListener('click', function() {
    paragraph1.classList.add('bold');
});
button6.addEventListener('click', function() {
    paragraph1.classList.add('red');
});
console.log("следующее задание");

console.log("Класс назван 'colored' а не 'green' потому что это позволяет легко изменить цвет в будущем без изменения JavaScript кода, просто поменяв CSS стили");
console.log("следующее задание");

let paragraph2 = document.querySelector('#paragraph2');
let button7 = document.querySelector('#button7');
let button8 = document.querySelector('#button8');
let button9 = document.querySelector('#button9');

button7.addEventListener('click', function() {
    paragraph2.classList.toggle('crossed');
});
button8.addEventListener('click', function() {
    paragraph2.classList.toggle('bold');
});
button9.addEventListener('click', function() {
    paragraph2.classList.toggle('red');
});
console.log("следующее задание");

let button10 = document.querySelector('#button10');
let elem = document.querySelector('#elem');
button10.addEventListener('click', function() {
    elem.classList.toggle('active');
});
console.log("следующее задание");