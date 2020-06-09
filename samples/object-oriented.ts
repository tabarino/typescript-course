enum Editor {
    MARVEL,
    DC
}

class SuperHero {
    constructor(
        // Public is accessible outside this class and can be changed
        public name: string,
        // Readonly is accessible outside this class and cannot be changed
        readonly editor: Editor,
        // Private is not accessible outside this class
        private creationYear: number
    ) {
    }

    // The default Access Modifiers of a function is public
    // You can use private createMessage() and it will be available only inside of this class
    // If we use protected, all classes that inherits this one will be available to see the function
    // However, if you try to access from somewhere else, it won't be available
    protected createMessage() {
        return `
            Superhero:
            ${this.name}
            ${Editor[this.editor]}
            ${this.creationYear}
        `;
    }
}

// FlyingHero inherits SuperHero
class FlyingHero extends SuperHero {
    // We can also override the parent method
    protected createMessage() {
        return `
            Superhero Overridden:
            ${this.name}
            ${Editor[this.editor]}
        `;
    }

    fly(message: string) {
        console.log(message);

        const superman = new FlyingHero('Superman', Editor.DC, 1938);
        console.log(superman.createMessage());
    }
}

const superman = new FlyingHero('Superman', Editor.DC, 1938);
console.log('Superman: ', superman);
// console.log(superman.createMessage());
superman.fly('Up and Away!!!');

const greenLantern = new FlyingHero('Green Lantern', Editor.DC, 1959);
console.log('Green Lantern: ', greenLantern);
// console.log(greenLantern.createMessage());
