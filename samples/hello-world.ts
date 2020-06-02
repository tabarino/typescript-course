const message = 'Hello World';
const sayHello = message => console.log(message);
sayHello(message);

function Person(name) {
    this.name = name;
    this.sayHi = function () {
        // You can keep using the "this" when you use the arrow function
        // without adding the var self = this;
        setTimeout(() => {
            console.log(`Hello my name is ${ this.name }`);
        }, 1000)
    }
}

const person = new Person('Bob');
person.sayHi();
