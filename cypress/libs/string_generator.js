const randomstring = require('randomstring');

export function generateString() {
    //generaring 6 letters series
    const randomStr = randomstring.generate({
        length: 6,
        charset: 'uppercase'
    });
    return randomStr.toUpperCase();
}