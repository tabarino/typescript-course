type HasName = {
    firstName?: string,
    lastName: string
}

type HasAddress = {
    streetName: string
}

type Person = {
    name: HasName,
    address?: HasAddress
}

let person: Person = {
    name: {
        lastName: 'Jordan'
    }
};

console.log(person);
