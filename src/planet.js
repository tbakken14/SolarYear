export class Planet {
    /**
     * Planet constructor
     * @param {number} solarYear local years per earth year
     */
    constructor(solarYear) {
        this.solarYear = Math.abs(parseFloat(solarYear));
    }
}