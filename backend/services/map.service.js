const { Client, Status } = require('@googlemaps/google-maps-services-js');
const geolib = require('geolib');

const getDistanceToNearestResponseUnit = (origin, destinations) => {
  const nearestResponseUnit = geolib.findNearest(origin, destinations);
  const client = new Client({});

  return new Promise(((resolve, reject) => {
    client.directions({
      params: {
        origin,
        destination: nearestResponseUnit,
        mode: 'driving',
        key: process.env.API_KEY
      }
    }).then((result) => {
      if (result.data.status === Status.OK) {
        resolve(result.data.routes);
      }

      resolve(result.data.status);
    })
      .catch((error) => reject(error));
  }));
};

module.exports = {
  getDistanceToNearestResponseUnit
};
