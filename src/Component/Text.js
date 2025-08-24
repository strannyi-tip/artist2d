export default class Text {
    /**
     * Horizontal alignment.
     *
     * @type {{Start: string, End: string, Left: string, Right: string, Center: string}}
     */
    static AlignH = {
        Start: "start",
        End: "end",
        Left: "left",
        Right: "right",
        Center: "center",
    };

    /**
     * Vertical alignment.
     *
     * @type {{Top: string, Hanging: string, Middle: string, Alphabetic: string, Ideographic: string, Bottom: string}}
     */
    static AlignV = {
        Top: "top",
        Hanging: "hanging",
        Middle: "middle",
        Alphabetic: "alphabetic",
        Ideographic: "ideographic",
        Bottom: "bottom",
    };

    /**
     * Direction.
     *
     * @type {{Ltr: string, Rtl: string, Inherit: string}}
     */
    static Direction = {
        Ltr: "ltr",
        Rtl: "rtl",
        Inherit: "inherit",
    };

    /**
     * Constructor.
     *
     * @param {object} options Initializing options
     */
    constructor(options) {
        this._text = options.text ?? "";
        this._align_h = options.align_h ?? Text.AlignH.Start;
        this._align_v = options.align_v ?? Text.AlignV.Alphabetic;
        this._direction = options.direction ?? Text.Direction.Inherit;
    }

    get text() {
        return this._text;
    }

    get alignH() {
        return this._align_h;
    }

    get alignV() {
        return this._align_v;
    }

    get direction() {
        return this._direction;
    }
}