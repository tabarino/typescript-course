enum PlayerPosition {
    Guard,
    Forward,
    Center
}

interface Player {
    name: string
    position: PlayerPosition
}

let michael: Player | null | undefined = {
    name: 'Michael',
    position: PlayerPosition.Forward
};

michael = undefined;

console.log(michael);
