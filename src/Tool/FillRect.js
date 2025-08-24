import AbstractTool from "../Component/AbstractTool.js";

/**
 * Fill Rect tool.
 */
export default class FillRect extends AbstractTool {
    constructor() {
        super();
        this._name = 'fill-rect-tool';
    }

    draw() {
        this._context.fillStyle = this._bg_color;
        this._context.fillRect(this._position.x, this._position.y, this._size.w, this._size.h);
    }
}