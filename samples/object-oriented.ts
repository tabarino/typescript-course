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
}

const superman = new SuperHero('Superman', Editor.DC, 1938);
console.log('Superman: ', superman);
