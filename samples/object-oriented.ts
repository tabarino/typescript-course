enum Editor {
    MARVEL,
    DC
}

// An interface can be applied only with public properties
interface Hero {
    name: string;
}

const batman: Hero = {
    name: 'Batman'
}

abstract class SuperHero implements Hero{
    private static readonly STATIC_SUPERHERO3_LABEL = 'Superhero3:';

    // An interface can be applied only with public properties
    constructor(
        // Public is accessible outside this class and can be changed
        public name: string,
        // Readonly is accessible outside this class and cannot be changed
        readonly editor: Editor,
        // Private is not accessible outside this class
        private creationYear: number,
        public _editor2: Editor
    ) {
    }

    // The default Access Modifiers of a function is public
    // You can use private createMessage() and it will be available only inside of this class
    // If we use protected, all classes that inherits this one will be available to see the function
    // However, if you try to access from somewhere else, it won't be available
    protected createMessage() {
        return `
            Superhero:
            ${ this.name }
            ${ Editor[this.editor] }
            ${ this.creationYear }
        `;
    }

    abstract createMessage2(): string;

    static createMessage3(hero: SuperHero): string {
        return `
            ${ SuperHero.STATIC_SUPERHERO3_LABEL }
            ${ hero.name }
            ${ Editor[hero.editor] }
            ${ hero.creationYear }
        `;
    }
}

interface CanFly {
    fly(message: string): void;
}

// FlyingHero inherits SuperHero
class FlyingHero extends SuperHero implements CanFly {
    // We can also override the parent method
    protected createMessage() {
        return `
            Superhero Overridden:
            ${ this.name }
            ${ Editor[this.editor] }
        `;
    }

    // You need to implement all abstract functions of the parent class
    createMessage2() {
        return `
            Superhero 2 - Implement Abstract Function:
            ${ this.name }
            ${ Editor[this.editor] }
        `;
    }

    get message() {
        return `
            Superhero - Using the get keyword:
            ${ this.name }
            ${ Editor[this.editor] }
        `;
    }

    get editor2(): string {
        return Editor[this._editor2];
    }

    set editor2(editorName: string) {
        this._editor2 = (<any>Editor)[editorName];
    }

    fly(message: string) {
        console.log(message);

        const superman = new FlyingHero('Superman', Editor.DC, 1938, Editor.DC);
        console.log(superman.createMessage());
        console.log(superman.createMessage2());
    }
}

const superman = new FlyingHero('Superman', Editor.DC, 1938, Editor.DC);
console.log('Superman: ', superman);
// console.log(superman.createMessage());
superman.fly('Up and Away!!!');

const greenLantern = new FlyingHero('Green Lantern', Editor.DC, 1959, Editor.DC);
console.log('Green Lantern: ', greenLantern);
// console.log(greenLantern.createMessage());
console.log(greenLantern.message);
console.log('Editor: ', greenLantern.editor2);
greenLantern.editor2 = 'MARVEL';
console.log('Editor: ', greenLantern.editor2);

console.log(SuperHero.createMessage3(superman));
