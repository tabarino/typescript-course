interface HasName {
    firstName: string,
    lastName: string
}

interface HasAddress {
    address: string
}

type Player = (HasName & HasAddress) | null;

const player: Player = {
    firstName: "Magic",
    lastName: "Johnson",
    address: "Staples"
};

console.log(player);

let myVar: any;
myVar = undefined;

let counter = 0; // It is a number by type inference
counter = myVar;

let str: string = 'test';
str = myVar;
