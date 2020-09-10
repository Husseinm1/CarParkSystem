const express = require('express');
const app = express();

app.get('/', function (req, res) {  res.sendFile(`${base}/index.html`);});
const port = 3000;
const base = `${__dirname}/car`;
app.listen(port, () => {console.log(`listening on port ${port}`);});


app.use(express.static('car'));