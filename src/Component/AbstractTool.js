import Color from "./Color.js";
import Size from "./Size.js";
import Position from "./Position.js";
import InvalidColorException from "../Exception/InvalidColorException.js";

/**
 * Abstract draw tool.
 */
export default class AbstractTool {
    constructor() {
        this._name = 'abstract-tool';
        this._context = null;
        this._bg_color = Color.WHITE;
        this._border_color = this._bg_color;
        this._size = new Size(0, 0);
        this._position = new Position(0, 0);
        this._text = null;
        this._font = "sans-serif";
        this._pt = 12;
        this._image = null;
    }

    /**
     *
     * @param {Color|string} color
     * @private
     * @throws InvalidColorException
     *
     * @returns {string}
     */
    _prepareColor(color) {
        let prepared_color;
        if (typeof color === 'string') {
            prepared_color = this._prepareStringColor(color);
        } else if (color instanceof Color) {
            prepared_color = color.toString();
        } else {
            throw new InvalidColorException("Invalid color given. Color must be of type Color or String only");
        }

        return prepared_color;
    }

    /**
     * Prepare string of color.
     *
     * @param {string} color
     * @private
     *
     * @returns {string}
     */
    _prepareStringColor(color) {
        return color[0] === '#' ? Color.fromHEX(color).toString() : color;
    }

    /**
     * Create font for context.
     *
     * @private
     *
     * @returns {string}
     */
    _createFont() {
        return `${this._pt}pt ${this._font}`;
    }

    /**
     * Set draw context.
     *
     * @param context Draw context
     *
     * @returns {AbstractTool}
     */
    setContext(context) {
        this._context = context;

        return this;
    }

    /**
     * Set background color.
     *
     * @param {Color|string} color Color
     *
     * @returns {AbstractTool}
     */
    setBgColor(color) {
        this._bg_color = this._prepareColor(color);

        return this;
    }

    /**
     * Set border color.
     *
     * @param {Color|string} color Color
     *
     * @returns {AbstractTool}
     */
    setBorderColor(color) {
        this._border_color = this._prepareColor(color);

        return this;
    }

    /**
     * Set size.
     *
     * @param {Size} size Size
     *
     * @returns {AbstractTool}
     */
    setSize(size) {
        this._size = size;

        return this;
    }

    /**
     * Set position.
     *
     * @param {Position} position Position
     *
     * @returns {AbstractTool}
     */
    setPosition(position) {
        this._position = position;

        return this;
    }

    /**
     * Set text.
     *
     * @param {Text} text Text
     *
     * @returns {AbstractTool}
     */
    setText(text) {
        this._text = text;

        return this;
    }

    /**
     * Set font and pt.
     *
     * @param {int|string} pt Font points
     * @param {string} font Font family
     *
     * @returns {AbstractTool}
     */
    setFont(pt, font) {
        this._pt = pt;
        this._font = font;

        return this;
    }

    /**
     * Set image.
     *
     * @param {HTMLImageElement|HTMLVideoElement|HTMLCanvasElement|string} image
     *
     * @returns {AbstractTool}
     */
    setImage(image) {
        if (typeof image === "string") {
            const img_obj = new Image();
            img_obj.src = image;
            this._image = img_obj;
        } else {
            this._image = image;
        }

        return this;
    }

    /**
     * Draw.
     */
    draw() {
        throw Error("Method draw must be override.");
    }

    /**
     * Get Name.
     *
     * @returns {string}
     */
    get name() {
        return this._name;
    }
}