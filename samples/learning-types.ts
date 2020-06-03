interface HasName {
    firstName: string,
    lastName: string
}

interface HasAddress {
    address: string
}

type Player = (HasName & HasAddress) | null;

const player = {
    firstName: "Magic",
    lastName: "Johnson",
    address: "Staples"
};

console.log(player);
