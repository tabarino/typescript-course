interface Player {
    firstName: string;
    lastName: string;
}

interface Person {
    firstName: string;
    lastName: string;
}

let person: Person = { firstName: 'Johnny', lastName: 'Bravo' };

let player: Player = person;
