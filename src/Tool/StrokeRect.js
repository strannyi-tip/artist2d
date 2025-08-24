import AbstractTool from "../Component/AbstractTool.js";

/**
 * Stroke Rect tool.
 */
export default class StrokeRect extends AbstractTool {
    constructor() {
        super();
        this._name = 'stroke-rect-tool';
    }

    draw() {
        this._context.strokeStyle = this._bg_color;
        this._context.strokeRect(this._position.x, this._position.y, this._size.w, this._size.h);
    }
}