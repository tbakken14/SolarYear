import { Age } from './../src/age.js';

describe('Age()', () => {
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