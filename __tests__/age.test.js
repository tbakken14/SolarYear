import { Age } from './../src/age.js';
import { Planet } from './../src/planet.js';

describe('constructor()', () => {
    test('Constructs age with property years set to first argument', () => {
        const age = new Age(1);
        expect(age.years).toEqual(1);
    });

    test('Enforces years as type number', () => {
        const age = new Age('Not a number');
        expect(age.years).toEqual(NaN);
    });

    test('Enforces years as positive', () => {
        const age = new Age(-1);
        expect(age.years).toEqual(1);
    });
});

describe('convertAgeToPlanetYears()', () => {
    const testCases = [[1, Planet.Mercury, 1 / .24], [1, Planet.Jupiter, 1 / 11.86]];

    test.each(testCases)('Converts Earth years, to planet years',
        (years, planet, result) => {
            const age = new Age(years);
            expect(age.convertAgeToPlanetYears(planet)).toBeCloseTo(result);
        });
});

describe('planetYearsSinceAge()', () => {
    const testCases = [[2, new Age(1), Planet.Mercury, 1 / .24], [2, new Age(1), Planet.Jupiter, 1 / 11.86]];

    test.each(testCases)('Age difference converted to planet years',
        (years, prevAge, planet, result) => {
            const age = new Age(years);
            expect(age.ageDifferenceToPlanetYears(prevAge, planet)).toBeCloseTo(result);
        });
});