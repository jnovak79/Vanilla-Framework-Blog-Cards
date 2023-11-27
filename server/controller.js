const axios = require('axios');
require('dotenv').config();

const API = process.env.API;

module.exports = {
  getBlogInformation: function(req, res) {
    axios.get(
      `${API}`
    )
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      res.status(500).send('error retrieving information');
    })
  }
}