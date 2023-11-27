const axios = require('axios');
require('dotenv').config();

const API = process.env.API;

module.exports = {
  getBlogInformation = function(req, res) {
    axios.get(
      `${API}`
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
  }
}