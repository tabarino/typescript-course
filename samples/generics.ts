class SuperCharacter {
    constructor(public name: string) {
    }
}

class Hero extends SuperCharacter {
    
}

class Villain extends SuperCharacter {
    
}

class SuperTeam<T> {
    constructor(public members: T[], public leader: T) {
    }
}

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
