import { Racer } from "./racer";

export class GasCar implements Racer {
    speed: number = 0;
    constructor(public team: string, public fuel: number = 10) {    };

    accelerate(): void {
        this.speed += 2;
        this.fuel--;
    };

    isFuelEmpty(): boolean {
        return this.fuel <= 0;
    };
}