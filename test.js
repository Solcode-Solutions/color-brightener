var colorBrightener = require('./index')
colorBrightener = new colorBrightener()

const testHex = '#f54842'

console.log('source hex: ' + testHex)
console.log('bright color: ' + colorBrightener.modifyColorBrightnessShort(testHex, 20))
console.log('dark color: ' + colorBrightener.modifyColorBrightnessShort(testHex, -20))
