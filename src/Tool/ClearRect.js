import AbstractTool from "../Component/AbstractTool.js";

/**
 * Clear rect tool.
 */
export default class ClearRect extends AbstractTool {
    constructor() {
        super();
        this._name = 'clear-rect-tool';
    }

    draw() {
        this._context.clearRect(this._position.x, this._position.y, this._size.w, this._size.h);
    }
}