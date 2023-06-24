import { Planet } from './../src/planet.js';

describe('constructor()', () => {
    test('Constructs planet with property solarYear set to first argument', () => {
        const planet = new Planet(1);
        expect(planet.solarYear).toEqual(1);
    });

    test('Enforces solarYear as type number', () => {
        const planet = new Planet('Not a number');
        expect(planet.solarYear).toEqual(NaN);
    });

    test('Enforces solarYear as positive ratio', () => {
        const planet = new Planet(-1);
        expect(planet.solarYear).toEqual(1);
    });
});

describe('convertEarthYears()', () => {
    const testCases = [[1.1, 1, 1.1], [1, 1.1, 1.1], [1.1, 1.1, 1.21]];

    test.each(testCases)('Converts %i earth years, with local year ratio %i, to local years %i',
        (earthYears, solarYearRatio, result) => {
            let planet = new Planet(solarYearRatio);
            expect(planet.convertEarthYears(earthYears)).toBeCloseTo(result);
        });
});