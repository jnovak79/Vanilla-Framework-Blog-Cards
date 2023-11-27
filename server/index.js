const express = require('express');
const path = require('path');
require('dotenv').config();
const app = express();
const requests = require('./controller.js');

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/blogs', function(req, res) {
  requests.getBlogInformation(req, res);
});

let port = process.env.SERVER_PORT;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});