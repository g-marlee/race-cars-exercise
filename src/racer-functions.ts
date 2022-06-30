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

    if (racers.length === 0) {
        return 0;
    } else {
        racers.forEach(car => {
            speed += car.speed;
        });
    
        return speed/racers.length;
    }    
};

export function getFasterRacer(racerA: Racer, racerB: Racer): Racer|null {
    if (racerA.speed > racerB.speed) {
        return racerA;
    } else if (racerB.speed > racerA.speed) {
        return racerB;
    } else {
        return null;
    }
}