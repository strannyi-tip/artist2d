import AbstractTool from "../Component/AbstractTool.js";

/**
 * Border Rect tool.
 */
export default class BorderRect extends AbstractTool {
    constructor() {
        super();
        this._name = 'border-rect-tool';
    }

    draw() {
        this._context.fillStyle = this._bg_color;
        this._context.fillRect(this._position.x, this._position.y, this._size.w, this._size.h);
        this._context.strokeStyle = this._border_color;
        const rect = new Path2D();
        rect.rect(this._position.x, this._position.y, this._size.w, this._size.h);
        this._context.stroke(rect);
    }
}