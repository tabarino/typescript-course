import { buildPersonData } from './build-person-data';

const message = 'Hello World';
const sayHello = (message: string) => console.log(message);
sayHello(message);

function Person(name: string) {
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

const partialAddress = ['Street Name', 'Number'];

const firstName = 'Michael',
    lastName = 'Jordan';

const personData = {
    firstName,
    lastName
}

const address = [
    ...partialAddress,
    'Staples Center'
];

console.log(buildPersonData(personData, address));
