let elem1 = document.querySelector('#elem1');
console.log('lastChild:', elem1.lastChild);
console.log('lastElementChild:', elem1.lastElementChild);
console.log("следующее задание");

let elem2 = document.querySelector('#elem2');
let firstChild2 = elem2.firstChild;
console.log('nextSibling:', firstChild2.nextSibling);
console.log('nextElementSibling:', firstChild2.nextElementSibling);
console.log("следующее задание");

let elem3 = document.querySelector('#elem3');
let lastChild3 = elem3.lastChild;
console.log('previousSibling:', lastChild3.previousSibling);
console.log('previousElementSibling:', lastChild3.previousElementSibling);
console.log("следующее задание");

let elem4 = document.querySelector('#elem4');
for (let node of elem4.childNodes) {
    console.log(node);
}
console.log("следующее задание");

let elem5 = document.querySelector('#elem5');
for (let node of elem5.childNodes) {
    console.log(node.nodeName);
}
console.log("следующее задание");

let elem6 = document.querySelector('#elem6');
for (let node of elem6.childNodes) {
    if (node.nodeType === 1 || node.nodeType === 3) {
        console.log(node);
    }
}
console.log("следующее задание");

let elem7 = document.querySelector('#elem7');
for (let node of elem7.childNodes) {
    console.log(node.textContent);
}
console.log("следующее задание");

let elem8 = document.querySelector('#elem8');
for (let node of elem8.childNodes) {
    if (node.nodeType === 3 || node.nodeType === 8) {
        console.log(node.textContent || node.data);
    }
}
console.log("следующее задание");

let elem9 = document.querySelector('#elem9');
for (let node of elem9.childNodes) {
    if (node.nodeType === 1 || node.nodeType === 3) {
        console.log(node.textContent);
    }
}
console.log("следующее задание");

let elem10 = document.querySelector('#elem10');
for (let node of elem10.childNodes) {
    node.textContent += ' [' + node.nodeType + ']';
}
console.log("следующее задание");