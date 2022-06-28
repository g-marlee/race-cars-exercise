import { SolarCar } from "../src/solar-car";

describe("SolarCar", () => {
    test("The team property is set from the constructor parameter", () => {
        const teamName = "Solar Car"
        
        const solarCar = new SolarCar(teamName);

        expect(solarCar.team).toBe(teamName);
    });

    test("The speed property starts at 0", () => {
        const teamName = "Solar Car"
        
        const solarCar = new SolarCar(teamName);

        expect(solarCar.speed).toBe(0);
    });

    test("Calling accelerate once brings speed to 1", () => {
        const teamName = "Solar Car"
        
        const solarCar = new SolarCar(teamName);
        solarCar.accelerate();

        expect(solarCar.speed).toBe(1);
    });

    test("Calling accelerate twice brings speed to 2", () => {
        const teamName = "Solar Car"
        
        const solarCar = new SolarCar(teamName);
        solarCar.accelerate();
        solarCar.accelerate();

        expect(solarCar.speed).toBe(2);
    });

    test("isFuelEmpty returns false.", () => {
        const teamName = "Solar Car"
        
        const solarCar = new SolarCar(teamName);

        expect(solarCar.isFuelEmpty()).toBe(false);
    });
});