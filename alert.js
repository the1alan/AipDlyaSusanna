let elem1 = document.querySelector('#elem1');
let li1 = document.createElement('li');
li1.textContent = 'item';
elem1.appendChild(li1);
console.log("следующее задание");

let elem2 = document.querySelector('#elem2');
let button1 = document.querySelector('#button1');
button1.addEventListener('click', function() {
    let li = document.createElement('li');
    li.textContent = 'item';
    elem2.appendChild(li);
});
console.log("следующее задание");

let elem3 = document.querySelector('#elem3');
let button2 = document.querySelector('#button2');
button2.addEventListener('click', function() {
    let li = document.createElement('li');
    li.textContent = 'item';
    li.addEventListener('click', function() {
        this.textContent += '!';
    });
    elem3.appendChild(li);
});
console.log("следующее задание");

let elem4 = document.querySelector('#elem4');
for (let i = 1; i <= 10; i++) {
    let li = document.createElement('li');
    li.textContent = i;
    elem4.appendChild(li);
}
console.log("следующее задание");

let parent1 = document.querySelector('#parent1');
let output1 = document.querySelector('#output1');
for (let i = 1; i <= 5; i++) {
    let input = document.createElement('input');
    input.addEventListener('blur', function() {
        output1.textContent = this.value;
    });
    parent1.appendChild(input);
}
console.log("следующее задание");

let list1 = document.querySelectorAll('#list1 li');
for (let li of list1) {
    li.addEventListener('click', function() {
        this.remove();
    });
}
console.log("следующее задание");

let parent2 = document.querySelector('#parent2');
let button3 = document.querySelector('#button3');
button3.addEventListener('click', function() {
    let lastChild = parent2.lastElementChild;
    if (lastChild) {
        lastChild.remove();
    }
});
console.log("следующее задание");

let elem5 = document.querySelector('#elem5');
let startLi = document.createElement('li');
startLi.textContent = 'start';
elem5.prepend(startLi);

let finishLi = document.createElement('li');
finishLi.textContent = 'finish';
elem5.append(finishLi);
console.log("следующее задание");

let parent3 = document.querySelector('#parent3');
let elem6 = document.querySelector('#elem6');
let newLi = document.createElement('li');
newLi.textContent = 'new';
parent3.insertBefore(newLi, elem6);
console.log("следующее задание");

let elem7 = document.querySelector('#elem7');
let p1 = document.createElement('p');
p1.textContent = '!!!';
elem7.insertAdjacentElement('beforeBegin', p1);
console.log("следующее задание");

let elem8 = document.querySelector('#elem8');
let p2 = document.createElement('p');
p2.textContent = '!!!';
elem8.insertAdjacentElement('afterEnd', p2);
console.log("следующее задание");

let elem9 = document.querySelector('#elem9');
let p3 = document.createElement('p');
p3.textContent = '!!!';
elem9.insertAdjacentElement('afterBegin', p3);
console.log("следующее задание");

let elem10 = document.querySelector('#elem10');
let p4 = document.createElement('p');
p4.textContent = '!!!';
elem10.insertAdjacentElement('beforeEnd', p4);
console.log("следующее задание");

let elem11 = document.querySelector('#elem11');
let htmlString = '<div class="www"><p>text</p><p>text</p><input></div>';
elem11.insertAdjacentHTML('beforeBegin', htmlString);
console.log("следующее задание");

let input1 = document.querySelector('#input1');
let button4 = document.querySelector('#button4');
button4.addEventListener('click', function() {
    let clone = input1.cloneNode(true);
    document.body.appendChild(clone);
});
console.log("следующее задание");

let elem12 = document.querySelector('#elem12');
let hasClass = elem12.matches('.www');
console.log(hasClass);
console.log("следующее задание");

let elem13 = document.querySelector('#elem13');
let isParagraph = elem13.matches('p');
console.log(isParagraph);
console.log("следующее задание");

let elem14 = document.querySelector('#elem14');
let elem15 = document.querySelector('#elem15');
let contains = elem14.contains(elem15);
console.log(contains);
console.log("следующее задание");