/**
 * Angle.
 */
export default class Angle {
    /**
     * Constructor.
     *
     * @param {int} deg
     */
    constructor(deg) {
        this._deg = deg;
    }

    get deg() {
        return this._deg;
    }
}