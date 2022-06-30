import { GasCar } from "../src/gas-car"
import { Racer } from "../src/racer"
import { SolarCar } from "../src/solar-car"
import { findRacersWithEmptyFuel } from "../src/racer-functions";

describe("findRacersWithEmptyFuel", () => {
    test("Array of GasCar where some have no fuel", () => {
        let racerArray: Racer[] = [];
        let car1: GasCar = new GasCar("Gas cars", 10);
        let car2: GasCar = new GasCar("Gas cars", 0);
        let car3: GasCar = new GasCar("Gas cars", 15);
        let car4: GasCar = new GasCar("Gas cars", 0);

        racerArray.push(car1, car2, car3, car4);

        let emptyCars = findRacersWithEmptyFuel(racerArray);

        expect(emptyCars).toEqual([car2, car4]);
    });

    test("Array of GasCar where all have no fuel", () => {
        let racerArray: Racer[] = [];
        let car1: GasCar = new GasCar("Gas cars", 0);
        let car2: GasCar = new GasCar("Gas cars", 0);
        let car3: GasCar = new GasCar("Gas cars", 0);
        let car4: GasCar = new GasCar("Gas cars", 0);

        racerArray.push(car1, car2, car3, car4);

        let emptyCars = findRacersWithEmptyFuel(racerArray);

        expect(emptyCars).toEqual([car1, car2, car3, car4]);
    });

    test("Array of GasCar none have no fuel", () => {
        let racerArray: Racer[] = [];
        let car1: GasCar = new GasCar("Gas cars", 10);
        let car2: GasCar = new GasCar("Gas cars", 20);
        let car3: GasCar = new GasCar("Gas cars", 15);
        let car4: GasCar = new GasCar("Gas cars", 30);

        racerArray.push(car1, car2, car3, car4);

        let emptyCars = findRacersWithEmptyFuel(racerArray);

        expect(emptyCars).toEqual([]);
    });

    test("Array of SolarCar", () => {
        let racerArray: Racer[] = [];
        let car1: SolarCar = new SolarCar("Solar car");
        let car2: SolarCar = new SolarCar("Solar car");
        let car3: SolarCar = new SolarCar("Solar car");
        let car4: SolarCar = new SolarCar("Solar car");

        racerArray.push(car1, car2, car3, car4);

        let emptyCars = findRacersWithEmptyFuel(racerArray);

        expect(emptyCars).toEqual([]);
    });

    test("Array with SolarCar and GasCar", () => {
        let racerArray: Racer[] = [];
        let car1: SolarCar = new SolarCar("Solar car");
        let car2: SolarCar = new SolarCar("Solar car");
        let car3: GasCar = new GasCar("Gas car", 15);
        let car4: GasCar = new GasCar("Gas car", 0);

        racerArray.push(car1, car2, car3, car4);

        let emptyCars = findRacersWithEmptyFuel(racerArray);

        expect(emptyCars).toEqual([car4]);
    });

    test("Empty array", () => {
        let racerArray: Racer[] = [];

        let emptyCars = findRacersWithEmptyFuel(racerArray);

        expect(emptyCars).toEqual([]);
    });
});