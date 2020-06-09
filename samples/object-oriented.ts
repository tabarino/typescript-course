enum Editor {
    MARVEL,
    DC
}

class SuperHero {
    constructor(
        public name: string,
        public editor: Editor,
        public creationYear: number
    ) {
    }
}

const superman = new SuperHero('Superman', Editor.DC, 1938);
console.log('Superman: ', superman);
