import { Racer } from "./racer";

export function findRacersWithEmptyFuel(racers: Racer[]): Racer[] {
    let emptyFuelRacers: Racer[] = [];

    racers.forEach(racer => {
        if (racer.isFuelEmpty() === true) {
            emptyFuelRacers.push(racer);
        }
    });

    return emptyFuelRacers;
};