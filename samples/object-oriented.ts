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
    // private createMessage() {
    createMessage() {
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
    fly(message: string) {
        console.log(message);
    }
}

const superman = new FlyingHero('Superman', Editor.DC, 1938);
console.log('Superman: ', superman);
console.log(superman.createMessage());
superman.fly('Up and Away!!!');

const greenLantern = new FlyingHero('Green Lantern', Editor.DC, 1959);
console.log('Green Lantern: ', greenLantern);
console.log(greenLantern.createMessage());
