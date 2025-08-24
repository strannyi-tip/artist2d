import AbstractTool from "../Component/AbstractTool.js";

/**
 * Image tool.
 */
export default class ImageTool extends AbstractTool {
    draw() {
        this._image.onload = () => {
            this._context.drawImage(this._image, this._position.x, this._position.y, this._size.w, this._size.h);
        };
    }
}