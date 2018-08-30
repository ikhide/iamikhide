var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

//PROJECTS
router.get('/music', (req, res, next) => {
  res.redirect('http://musicianshangout.herokuapp.com');
});

router.get('/smiley', (req, res, next) => {
  res.redirect('http://smileyfacer.herokuapp.com');
});


//SOCIAL MEDIA

router.get('/gmail', (req, res, next) => {
  res.redirect('https://mail.google.com/mail/u/1/#inbox?compose=CllgCJZdkgzkkJhjqHNnvfwxswNmdxqBZrJWrMlSgPgQKvvzMPwdCtQdMKnZBMwqDRSRwdltFXB');
});

router.get('/facebook', (req, res, next) => {
  res.redirect('https://www.facebook.com/atakpu.ikhide');
});

router.get('/twitter', (req, res, next) => {
  res.redirect('https://twitter.com/AtakpuGodson');
});

router.get('/github', (req, res, next) => {
  res.redirect('https://github.com/ikhide');
});

router.get('/google', (req, res, next) => {
  res.redirect('https://plus.google.com/u/0/107701673017274036288');
});

router.get('/medium', (req, res, next) => {
  res.redirect('https://medium.com/@atakpuikhide');
});

router.get('/stackoverflow', (req, res, next) => {
  res.redirect('https://stackoverflow.com/users/10202375/atakpu-ikhide');
});

module.exports = router;

