let button1 = document.querySelector('#button1');
button1.addEventListener('click', function(event) {
    console.log(event);
});
console.log("следующее задание");

let coordinates = document.querySelector('#coordinates');
document.addEventListener('mousemove', function(event) {
    coordinates.textContent = `Coordinates: ${event.clientX} : ${event.clientY}`;
});
console.log("следующее задание");

let button2 = document.querySelector('#button2');
button2.addEventListener('click', function(event) {
    if (event.type === 'click') {
        this.style.backgroundColor = 'green';
    } else if (event.type === 'dblclick') {
        this.style.backgroundColor = 'red';
    }
});
button2.addEventListener('dblclick', function(event) {
    if (event.type === 'click') {
        this.style.backgroundColor = 'green';
    } else if (event.type === 'dblclick') {
        this.style.backgroundColor = 'red';
    }
});
console.log("следующее задание");

let elem4 = document.querySelector('#elem4');
elem4.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.textContent += '!';
    } else if (event.target.tagName === 'UL') {
        console.log('Click on UL');
    }
});
console.log("следующее задание");

let input1 = document.querySelector('#input1');
let keyOutput = document.querySelector('#keyOutput');
input1.addEventListener('keypress', function(event) {
    keyOutput.textContent = `Key: ${event.key}, Code: ${event.code}`;
});
console.log("следующее задание");

let input2 = document.querySelector('#input2');
let paragraph1 = document.querySelector('#paragraph1');
input2.addEventListener('keypress', function(event) {
    if (event.code === 'Enter') {
        paragraph1.textContent = this.value;
        this.value = '';
    }
});
console.log("следующее задание");

let elem5 = document.querySelector('#elem5');
elem5.addEventListener('click', function(event) {
    if (event.altKey) {
        this.style.backgroundColor = 'red';
    }
});
console.log("следующее задание");

let elem6 = document.querySelector('#elem6');
elem6.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        if (event.ctrlKey) {
            event.target.textContent += '1';
        } else if (event.shiftKey) {
            event.target.textContent += '2';
        }
    }
});
console.log("следующее задание");

let links = document.querySelectorAll('#link1, #link2');
for (let link of links) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        this.textContent += ` (${this.href})`;
    });
}
console.log("следующее задание");

let input3 = document.querySelector('#input3');
let input4 = document.querySelector('#input4');
let paragraph2 = document.querySelector('#paragraph2');
let link3 = document.querySelector('#link3');
link3.addEventListener('click', function(event) {
    event.preventDefault();
    let sum = Number(input3.value) + Number(input4.value);
    paragraph2.textContent = `Sum: ${sum}`;
});
console.log("следующее задание");

let elem7 = document.querySelector('#elem7');
let elem8 = document.querySelector('#elem8');
let elem9 = document.querySelector('#elem9');
elem7.addEventListener('click', function() {
    console.log('Level 1 clicked');
});
elem8.addEventListener('click', function() {
    console.log('Level 2 clicked');
});
elem9.addEventListener('click', function() {
    console.log('Level 3 clicked');
});
console.log("следующее задание");

let parent2 = document.querySelector('#parent2');
parent2.addEventListener('click', function(event) {
    console.log(`Clicked on: ${event.target.tagName}`);
});
console.log("следующее задание");

let list1 = document.querySelector('#list1');
list1.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.textContent += '!';
    } else if (event.target.tagName === 'UL') {
        console.log('UL clicked');
    }
});
console.log("следующее задание");

let parent3 = document.querySelector('#parent3');
let button3 = document.querySelector('#button3');
let block3 = document.querySelector('#block3');
button3.addEventListener('click', function(event) {
    event.stopPropagation();
    block3.classList.add('active');
});
parent3.addEventListener('click', function() {
    block3.classList.remove('active');
});
console.log("следующее задание");

let list2 = document.querySelector('#list2');
let button4 = document.querySelector('#button4');
function handler() {
    this.textContent += '!';
}
let items2 = list2.querySelectorAll('li');
for (let item of items2) {
    item.addEventListener('click', handler);
}
button4.addEventListener('click', function() {
    let item = document.createElement('li');
    item.textContent = 'item';
    item.addEventListener('click', handler);
    list2.appendChild(item);
});
console.log("следующее задание");

let list3 = document.querySelector('#list3');
let button5 = document.querySelector('#button5');
list3.addEventListener('click', function(event) {
    let li = event.target.closest('li');
    if (li) {
        li.innerHTML += '!';
    }
});
button5.addEventListener('click', function() {
    let item = document.createElement('li');
    item.innerHTML = 'item <i>italic</i> item';
    list3.appendChild(item);
});
console.log("следующее задание");