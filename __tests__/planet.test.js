import { Planet } from './../src/planet.js';

describe('Planet', () => {
    let planet;

    beforeEach(() => {
        planet = new Planet(1);
    })

    test('Constructor makes planet with property solarYear set to first argument', () => {
        expect(planet.solarYear).toEqual(1);
    });

})