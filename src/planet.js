export class Planet {
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