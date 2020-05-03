const geolib = require('geolib');

const victimAndResponseUnit = (victimsCoordinate, emergencyResponseCoordinate) => {
  if (!victimsCoordinate || !emergencyResponseCoordinate) {
    return 'Invalid input to victimAndResponseUnit.';
  }
  if (typeof (victimsCoordinate) !== 'object' || typeof (emergencyResponseCoordinate) !== 'object') {
    return 'Invalid input to victimAndResponseUnit.';
  }
  return (`${ geolib.getPreciseDistance(victimsCoordinate, geolib.findNearest(victimsCoordinate, emergencyResponseCoordinate)) / 1000}km`);
};

module.exports = victimAndResponseUnit;
