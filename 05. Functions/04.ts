/*

    FUNCTION ARGUMENTS

    * ideal number of arguments is zero
    * one or two are acceptable
    * three or more should be avoided - > pass an object

*/

interface animal {
    species: string;
    mamal: boolean;
    color: string;
    name: string;
    pet: boolean;
}

class AnimalBetter {
    constructor(animal: animal) {}
}

let animal: animal = {
    species: 'skunk',
    mamal: true,
    color: 'black and white',
    name: 'Pepé Le Pew',
    pet: false,
};

let pepe = new AnimalBetter(animal);
