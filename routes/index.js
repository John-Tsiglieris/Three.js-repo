var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Three.js Demos' });
});


/* GET demo */
//1
router.get('/Demos/demo', function(req, res, next) {
  res.sendFile(path.join(__dirname, 'public', 'demo.html'));
});
//2
router.get('/Demos/demo1.html', function(req, res, next) {
  res.sendFile(path.join(__dirname, 'public', 'demo1.html'));
});
//3
router.get('/Demos/Text_Geometry/textGeo1.html', function(req, res, next) {
  res.sendFile(path.join(__dirname, 'public', 'textGeo1.html'));
});
//4
router.get('/Demos/webgl_effects_ascii.html', function(req, res, next) {
  res.sendFile(path.join(__dirname, 'public', 'webgl_effects_ascii.html'));
});
//5
router.get('/Demos/CSS2D_examples/CSS2D_example1.html', function(req, res, next) {
  res.sendFile(path.join(__dirname, 'public', 'CSS2D_example1.html'));
});
//6
router.get('/Demos/CSS2D_examples/css2d_label.html', function(req, res, next) {
  res.sendFile(path.join(__dirname, 'public', 'css2d_label.html'));
});
//7
router.get('/Demos/CSS2D_examples/css2d_label.html', function(req, res, next) {
  res.sendFile(path.join(__dirname, 'public', 'css2d_label.html'));
});
//8
router.get('/Demos/CSS2D_examples/css2d_label.html', function(req, res, next) {
  res.sendFile(path.join(__dirname, 'public', 'css2d_label.html'));
});


module.exports = router;
