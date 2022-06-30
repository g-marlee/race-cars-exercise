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

export function findAverageSpeed(racers: Racer[]): number {
    let speed = 0;
    racers.forEach(car => {
        speed += car.speed;
    });

    return speed/racers.length;
};