export class Planet {
    static Mercury = new Planet(1 / .24);
    static Venus = new Planet(1 / .62);
    static Mars = new Planet(1 / 1.88);
    static Jupiter = new Planet(1 / 11.86);

    /**
     * Planet constructor
     * @param {number} solarYear Units: local years per earth year
     */
    constructor(solarYear) {
        this.solarYear = Math.abs(parseFloat(solarYear));
    }

    /**
     * Converts earth age to local age
     * @param {number} earthYears Units: earth years
     * @return {number} Units: local years
     */
    convertEarthYears(earthYears) {
        return earthYears * this.solarYear;
    }
}