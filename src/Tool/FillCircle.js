import AbstractTool from "../Component/AbstractTool.js";

/**
 * Fill Circle tool.
 */
export default class FillCircle extends AbstractTool {
    constructor() {
        super();
        this._name = 'fill-circle-tool';
    }

    draw() {
        this._context.fillStyle = this._bg_color;
        const circle = new Path2D();
        circle.arc(this._position.x + this._size.w/2, this._position.y + this._size.h/2, this._size.w*(Math.PI/2)/Math.PI, this._position.x, this._position.x + this._size.w);
        this._context.fill(circle);
    }
}