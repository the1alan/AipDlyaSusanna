function func() {
    console.log(this.value);
}

let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');

func.call(elem1);
func.call(elem2);
func.call(elem3);
console.log("следующее задание");

let elem4 = document.querySelector('#elem4');
elem4.addEventListener('blur', func2);

function func2() {
    let self = this;
    
    function square() {
        return self.value * self.value;
    }
    
    alert(square());
}
console.log("Ошибка возникла потому, что внутренняя функция square не имеет доступа к this внешней функции. В строгом режиме this внутри square будет undefined, что приводит к ошибке при попытке обратиться к undefined.value");
console.log("следующее задание");

let elem5 = document.querySelector('#elem5');
elem5.addEventListener('blur', func3);

function func3() {
    square2(this);
    
    function square2(param) {
        return param.value * param.value;
    }
}
console.log("следующее задание");

let elem6 = document.querySelector('#elem6');
elem6.addEventListener('blur', func4);

function func4() {
    let square3 = () => {
        return this.value * this.value;
    }
    
    alert(square3());
}
console.log("следующее задание");

let elem7 = document.querySelector('#elem7');

function func5(surname, name) {
    console.log(this.value + ', ' + name + ' ' + surname);
}

func5.call(elem7, 'Smit', 'John');
console.log("следующее задание");

function func6(surname, name) {
    console.log(this.value + ', ' + surname + ' ' + name);
}

func6.apply(elem7, ['Smit', 'John']);
console.log("следующее задание");

function func7(name, surname) {
    console.log(this.value + ', ' + name + ' ' + surname);
}

func7 = func7.bind(elem7);

func7('John', 'Smit');
func7('Eric', 'Luis');
console.log("следующее задание");