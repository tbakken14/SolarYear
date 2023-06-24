import { Age } from './../src/age.js';

describe('Age()', () => {
    test('Constructs age with property years set to first argument', () => {
        const age = new Age(1);
        expect(age.years).toEqual(1);
    });
});