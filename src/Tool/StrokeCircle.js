import AbstractTool from "../Component/AbstractTool.js";

/**
 * Stroke Circle tool.
 */
export default class StrokeCircle extends AbstractTool {
    constructor() {
        super();
        this._name = 'stroke-circle-tool';
    }

    draw() {
        this._context.strokeStyle = this._border_color;
        const circle = new Path2D();
        circle.arc(this._position.x + this._size.w/2, this._position.y + this._size.h/2, this._size.w*(Math.PI/2)/Math.PI, this._position.x, this._position.x + this._size.w);
        this._context.stroke(circle);
    }
}