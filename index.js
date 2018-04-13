var app = require('express')();
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', upload.array(), (req, res, next) => {
  console.log(req.body);
  res.json(req.body);
});

app.listen(3000, () => console.log('Listening on port: 3000'))
