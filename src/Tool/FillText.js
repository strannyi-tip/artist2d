import AbstractTool from "../Component/AbstractTool.js";

/**
 * Fill Text tool.
 */
export default class FillText extends AbstractTool {
    constructor() {
        super();
        this._name = 'fill-text-tool';
    }

    draw() {
        this._context.font = this._createFont();
        this._context.textAlign = this._text.alignH;
        this._context.textBaseline = this._text.alignV;
        this._context.direction = this._text.direction;
        this._context.fillStyle = this._bg_color;
        this._context.fillText(this._text.text, this._position.x, this._position.y, this._size.w);
    }
}