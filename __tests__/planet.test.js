import { Planet } from './../src/planet.js';

describe('Planet', () => {

    test('Constructor makes planet with property solarYear set to first argument', () => {
        const planet = new Planet(1);
        expect(planet.solarYear).toEqual(1);
    });

    test('Constructor enforces solarYear as type number', () => {
        const planet = new Planet('Not a number');
        expect(planet.solarYear).toEqual(NaN);
    });

    test('Constructor enforces solarYear as positive ratio', () => {
        const planet = new Planet(-1);
        expect(planet.solarYear).toEqual(1);
    })

})