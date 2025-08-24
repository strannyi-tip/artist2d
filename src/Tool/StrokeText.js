import AbstractTool from "../Component/AbstractTool.js";

/**
 * Stroke Text tool.
 */
export default class StrokeText extends AbstractTool {
    constructor() {
        super();
        this._name = 'stroke-text-tool';
    }

    draw() {
        this._context.font = this._createFont();
        this._context.textAlign = this._text.alignH;
        this._context.textBaseline = this._text.alignV;
        this._context.direction = this._text.direction;
        this._context.strokeStyle = this._border_color;
        this._context.strokeText(this._text.text, this._position.x, this._position.y, this._size.w);
    }
}