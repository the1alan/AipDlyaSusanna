let elem1 = document.querySelector('#elem1');
let firstChild1 = elem1.firstElementChild;
firstChild1.classList.add('red-text');
console.log("следующее задание");

let elem2 = document.querySelector('#elem2');
let lastChild2 = elem2.lastElementChild;
lastChild2.classList.add('red-text');
console.log("следующее задание");

let elem3 = document.querySelector('#elem3');
let children3 = elem3.children;
for (let child of children3) {
    child.textContent += '!';
}
console.log("следующее задание");

let elem4 = document.querySelector('#elem4');
let parent4 = elem4.parentElement;
parent4.classList.add('border-red');
console.log("следующее задание");

let elem5 = document.querySelector('#elem5');
let closestDiv5 = elem5.closest('div');
console.log(closestDiv5);
console.log("следующее задание");

let elem6 = document.querySelector('#elem6');
let closestWww6 = elem6.closest('.www');
console.log(closestWww6);
console.log("следующее задание");

let elem7 = document.querySelector('#elem7');
let prevSibling7 = elem7.previousElementSibling;
prevSibling7.textContent += '!';
console.log("следующее задание");

let elem8 = document.querySelector('#elem8');
let nextSibling8 = elem8.nextElementSibling;
nextSibling8.textContent += '!';
console.log("следующее задание");

let elem9 = document.querySelector('#elem9');
let nextNextSibling9 = elem9.nextElementSibling.nextElementSibling;
nextNextSibling9.textContent += '!';
console.log("следующее задание");

let elem10 = document.querySelector('#elem10');
let prevSibling10 = elem10.previousElementSibling;
let nextSibling10 = elem10.nextElementSibling;
let tempText = prevSibling10.textContent;
prevSibling10.textContent = nextSibling10.textContent;
nextSibling10.textContent = tempText;
console.log("следующее задание");

let elem11 = document.getElementById('elem11');
elem11.textContent = 'Some text';
console.log("следующее задание");

let listItems12 = document.getElementsByTagName('li');
for (let item of listItems12) {
    item.classList.add('red-text');
}
console.log("следующее задание");

let wwwElements13 = document.getElementsByClassName('www');
for (let elem of wwwElements13) {
    elem.classList.add('red-text');
}
console.log("следующее задание");

let parent14 = document.querySelector('#parent');
let elems1 = parent14.querySelectorAll('.www');
let elems2 = parent14.querySelectorAll('.ggg');
console.log(elems1);
console.log(elems2);
console.log("следующее задание");