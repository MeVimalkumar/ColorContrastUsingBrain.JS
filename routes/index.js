var express = require('express');
var router = express.Router();
var brain = require('brain.js')
const network = new brain.NeuralNetwork();

network.train([
  { input: { r: 0.62, g: 0.72, b: 0.88 }, output: { light: 1 } },
  { input: { r: 0.1, g: 0.84, b: 0.72 }, output: { light: 1 } },
  { input: { r: 0.33, g: 0.24, b: 0.29 }, output: { dark: 1 } },
  { input: { r: 0.74, g: 0.78, b: 0.86 }, output: { light: 1 } },
  { input: { r: 0.31, g: 0.35, b: 0.41 }, output: { dark: 1 } },
  { input: { r: 1, g: 0.99, b: 0 }, output: { light: 1 } },
  { input: { r: 1, g: 0.42, b: 52 }, output: { dark: 1 } },

]);


var result = network.run({ r: 1, g: 0.42, b: 52 });
console.log(result);

/* GET home page. */
router.get('/', function (req, res, next) {
  // res.render('index', { title: 'Express' });
});

module.exports = router;
