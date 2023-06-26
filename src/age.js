export class Age {
    /**
     * Age constructor
     * @param {number} years Units: earth years
     */
    constructor(years) {
        this.years = Math.abs(parseFloat(years));
    }

    /**
     * Age constructor
     * @param {Planet} planet the planet to convert to
     * @return @return {number} Units: planet years
     */
    convertAgeToPlanetYears(planet) {
        return planet.convertEarthYears(this.years);
    }

    ageDifferenceToPlanetYears(age, planet) {
        const years = this.years - age.years;
        return planet.convertEarthYears(years);
    }
}