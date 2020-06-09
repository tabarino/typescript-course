interface HasName {
    name: string;
}

function cloneArray<T>(array: T[]): T[] {
    return array.slice(0);
}

const heroes: HasName[] = [
    { name: "Superman" },
    { name: "Batman" },
    { name: "Green Lantern" },
    { name: "Wonder Woman" },
    { name: "Flash" }
];

const numbers = [0, 1, 2];

const cloneHeroes = cloneArray(heroes);

const cloneNumbers = cloneArray(numbers);

console.log('Clones', cloneHeroes);
console.log('Clones', cloneNumbers);
