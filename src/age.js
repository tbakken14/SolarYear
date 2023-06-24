export class Age {
    /**
     * Age constructor
     * @param {number} years Units: earth years
     */
    constructor(years) {
        this.years = Math.abs(parseFloat(years));
    }
}