class SuperCharacter {
    constructor(public name: string) {
    }
}

class Hero extends SuperCharacter {
    
}

class Villain extends SuperCharacter {
    
}

class SuperTeam<T extends SuperCharacter> {
    constructor(public members: T[], public leader: T) {
    }
}

// Because of T(Generics) extends SuperCharacter the Super Team of Numbers are not allowed
// const numbers = new SuperTeam([0, 1, 2], 0);

const captainAmerica = new Hero('Captain America');
const thor = new Hero('Thor');
const ironMan = new Hero('Iron Man  ');

const avengers = new SuperTeam([captainAmerica, thor, ironMan], captainAmerica);
const avengersMembers = avengers.members;

const luthor = new Villain('Luthor');
const bizarro = new Villain('Bizarro');
const captainCold = new Villain('Captain Cold');

const legionOfDoom = new SuperTeam([luthor, bizarro, captainCold], luthor);
const legionMembers = legionOfDoom.members;

const megaCrossoverTeam = new SuperTeam([
    captainAmerica, thor, ironMan, luthor, bizarro, captainCold
], captainAmerica);
