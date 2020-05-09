const { Client, Status } = require('@googlemaps/google-maps-services-js');
const geolib = require('geolib');

const APIKEY = 'AIzaSyB7opiAxIWR_L1w6bQSkWk_YwKuOZ8b2AA';

const getDistanceToNearestResponseUnit = (origin, destinations) => {
  const nearestResponseUnit = geolib.findNearest(origin, destinations);
  const client = new Client({});

  client.directions({
    params: {
      origin,
      destination: nearestResponseUnit,
      mode: 'driving',
      key: APIKEY
    }
  }).then((result) => {
    if (result.data.status === Status.OK) {
      return result.data.routes;
    }

    return result.data.status;
  })
    .catch((error) => error);
};

module.exports = getDistanceToNearestResponseUnit;
