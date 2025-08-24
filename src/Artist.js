import Position from "./Component/Position.js";
import Size from "./Component/Size.js";
import FillRect from "./Tool/FillRect.js";
import StrokeRect from "./Tool/StrokeRect.js";
import ClearRect from "./Tool/ClearRect.js";
import BorderRect from "./Tool/BorderRect.js";
import FillCircle from "./Tool/FillCircle.js";
import StrokeCircle from "./Tool/StrokeCircle.js";
import BorderCircle from "./Tool/BorderCircle.js";
import StrokeText from "./Tool/StrokeText.js";
import FillText from "./Tool/FillText.js";
import BorderText from "./Tool/BorderText.js";
import ImageTool from "./Tool/ImageTool.js";
import Color from "./Component/Color.js";

/**
 * Artist.
 */
export default class Artist {

    /**
     * Draw context.
     *
     * @type {string}
     * @private
     */
    static _CONTEXT = "2d";

    /**
     * Constructor.
     *
     * @param options {object} Initialize options
     */
    constructor(options = {canvas_id : "canvas"}) {
        /**
         * Canvas element.
         *
         * @type {HTMLElement}
         * @private
         */
        this._canvas = document.getElementById(options.canvas_id);

        /**
         * Draw context.
         *
         * @private
         */
        this._context = this._canvas?.getContext(Artist._CONTEXT);

        /**
         * Tools container.
         *
         * @type {object}
         * @private
         */
        this._tools = {
            FillRect: new FillRect(),
            StrokeRect: new StrokeRect(),
            ClearRect: new ClearRect(),
            BorderRect: new BorderRect(),
            FillCircle: new FillCircle(),
            StrokeCircle: new StrokeCircle(),
            BorderCircle: new BorderCircle(),
            StrokeText: new StrokeText(),
            FillText: new FillText(),
            BorderText: new BorderText(),
            ImageTool: new ImageTool(),
        };

        /**
         * Selected tool.
         *
         * @type {AbstractTool|null}
         * @private
         */
        this._tool = null;
    }

    /**
     * Save context state.
     *
     * @private
     */
    _saveState() {
        this._context.save();
    }

    /**
     * Select tool.
     *
     * @param {AbstractTool} tool Draw tool
     *
     * @returns {Artist}
     */
    selectTool(tool) {
        this._tool = tool;

        return this;
    }

    /**
     * Draw.
     *
     * @param {number} x X coordinate
     * @param {number} y Y coordinate
     * @param {number} w Width
     * @param {number} h Height
     * @param {Color|string} bg_color Color
     * @param {Color|string} border_color Color
     *
     * @returns {Artist}
     */
    draw(x, y, w, h, bg_color = Color.TRANSPARENT, border_color = bg_color) {
        this._context.restore();
        this._tool
            .setContext(this._context)
            .setPosition(new Position(x, y))
            .setSize(new Size(w, h))
            .setBgColor(bg_color)
            .setBorderColor(border_color)
            .draw();

        return this;
    }

    get Tool() {
        return this._tools;
    }

    /**
     * Translate.
     *
     * @param {Position} position
     *
     * @returns {Artist}
     */
    translate(position) {
        this._saveState();
        this._context.translate(position.x, position.y);

        return this;
    }

    /**
     * Rotate.
     *
     * @param {Angle} angle
     * @returns {Artist}
     */
    rotate(angle) {
        this._saveState();
        this._context.rotate((Math.PI / 180) * angle.deg);

        return this;
    }

    /**
     * Scale.
     *
     * @param {Position} position
     */
    scale(position) {
        this._saveState();
        this._context.scale(position.x, position.y);
    }

    /**
     * Transform.
     *
     * @param {int} a
     * @param {int} b
     * @param {int} c
     * @param {int} d
     * @param {int} e
     * @param {int} f
     */
    transform(a, b, c, d, e, f) {
        this._saveState();
        this._context.transform(a, b, c, d, e, f);
    }

    /**
     * Context.
     *
     * @constructor
     *
     * @returns {*}
     *
     */
    get Context() {
        return this._context;
    }
}