/**
 * Color.
 */
export default class Color {
    static WHITE = "rgba(255, 255, 255, 1)";
    static BLACK = "rgba(0, 0, 0, 1)";
    static RED = "rgba(255, 0, 0, 1)";
    static GREEN = "rgba(0, 255, 0, 1)";
    static BLUE = "rgba(0, 0, 255, 1)";
    static TRANSPARENT = "rgba(0, 0, 0, 0)";

    /**
     * Constructor.
     *
     * @param {number} r Red value
     * @param {number} g Green value
     * @param {number} b Blue value
     * @param {number} a Alpha value
     */
    constructor(r, g, b, a = 1) {
        this._r = r;
        this._g = g;
        this._b = b;
        this._a = a;
    }

    /**
     * HEX to RGB convert.
     *
     * @param {string} hex HEX color
     * @private
     *
     * @returns {number[]}
     */
    static _hexToRgb(hex) {
        hex = hex.replace('#', '');
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);

        return [r, g, b];
    }

    /**
     * Create instance from HEX color.
     *
     * @param {string} hex HEX color
     *
     * @returns {Color}
     */
    static fromHEX(hex) {
        const rgb = Color._hexToRgb(hex);

        return new Color(rgb[0], rgb[1], rgb[2]);
    }

    /**
     * To string.
     *
     * @returns {string}
     */
    toString() {
        return `rgba(${this._r}, ${this._g}, ${this._b}, ${this._a})`;
    }

    /**
     * Get r value.
     *
     * @returns {number}
     */
    get r() {
        return this._r;
    }

    /**
     * Get g value.
     *
     * @returns {number}
     */
    get g() {
        return this._g;
    }

    /**
     * Get b value.
     *
     * @returns {number}
     */
    get b() {
        return this._b;
    }

    /**
     * Get a value.
     *
     * @returns {number}
     */
    get a() {
        return this._a;
    }

    /**
     * Set r value.
     *
     * @param {number} r
     */
    set r(r) {
        this._r = r;
    }

    /**
     * Set g value.
     *
     * @param {number} g
     */
    set g(g) {
        this._g = g;
    }

    /**
     * Set b value.
     *
     * @param {number} b
     */
    set b(b) {
        this._b = b;
    }

    /**
     * Set a value.
     *
     * @param {number} a
     */
    set a(a) {
        this._a = a;
    }
}