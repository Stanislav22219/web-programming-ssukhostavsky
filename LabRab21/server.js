const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use('/', express.static('public'));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})
.post("/", (req, res) => {
    res.send
})

app.listen(process.env.PORT || 3000);
