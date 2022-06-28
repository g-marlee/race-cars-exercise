import { Racer } from "./racer";

export class SolarCar implements Racer {
    speed: number = 0;

    constructor(public team: string) {}

    accelerate(): void {
        this.speed++;
    }

    isFuelEmpty(): boolean {
        return false;
    }
}