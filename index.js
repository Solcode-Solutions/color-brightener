let defaultOptions = {
    outputFormat: 'hex' // todo make support for other output formats
}

/**
 * Constructor.
 * @param color
 * @param options
 */
function colorBrightener (hexColor = '', options = defaultOptions) {
    this.inputedColor = hexColor
    this.sourceColor = hexColor
    this.options = options
}

/**
 * Method that restores inputed color.
 */
colorBrightener.prototype.restoreColor = function () {
    this.sourceColor = this.inputedColor
}

/**
 * Method that modifies color's brightness. Supports positive and negative values.
 * Inspired from: https://css-tricks.com/snippets/javascript/lighten-darken-color/
 * @param amt
 * @returns {string}
 */
colorBrightener.prototype.modifyColorBrightness = function (amt) {
    var col = this.sourceColor
    var usePound = false;

    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }

    var num = parseInt(col,16);

    var r = (num >> 16) + amt;

    if (r > 255) r = 255;
    else if  (r < 0) r = 0;

    var b = ((num >> 8) & 0x00FF) + amt;

    if (b > 255) b = 255;
    else if  (b < 0) b = 0;

    var g = (num & 0x0000FF) + amt;

    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    var colorOutput = (usePound?"#":"") + String("000000" + (g | (b << 8) | (r << 16)).toString(16)).slice(-6)
    this.sourceColor = colorOutput

    if (this.options.outputFormat === 'hex')
        return colorOutput
    else
        return colorOutput
}

/**
 * Shorthand wrapper for getting color brightness from 2 function parameters.
 * @param color
 * @param amt
 * @returns {string}
 */
colorBrightener.prototype.modifyColorBrightnessShort = function (color, amt) {
    this.sourceColor = color
    return this.modifyColorBrightness(amt)
}

module.exports = colorBrightener
