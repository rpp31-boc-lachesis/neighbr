const axios = require('axios');
const querystring = require('querystring');

const { MAPBOX_API_KEY } = process.env;

module.exports.locationSearch = (req, res) => {
  const { text, proximity } = req.body;
  const urlParams = { access_token: MAPBOX_API_KEY };
  if (proximity) {
    urlParams.proximity = `${proximity[0]},${proximity[1]}`;
  }

  axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${text}.json?${querystring.stringify(urlParams)}`, { headers: { 'content-type': 'application/x-www-form-urlencoded' } })
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.error(err.request);
      res.status(500).send(err.toJSON());
    });
};
