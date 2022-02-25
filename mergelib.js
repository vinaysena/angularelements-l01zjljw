const concat = require('concat');

const es5 = ['./dist/weather-element/runtime-es5.js','./dist/weather-element/polyfills-es5.js','./dist/weather-element/main-es5.js'];
const es2015= ['./dist/weather-element/runtime-es2015.js','./dist/weather-element/polyfills-es2015.js','./dist/weather-element/main-es2015.js'];
concat(es5, './dist/weather-element/elements-es5.js');
concat(es2015, './dist/weather-element/elements-es2015.js');
console.info('file generated');
