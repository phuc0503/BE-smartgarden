const express = require('express')
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8081;
const hostname = process.env.HOST_NAME;

//config template engine
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // res.render('sample.ejs');
  res.send('hehehe');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})