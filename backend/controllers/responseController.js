const geolib = require('geolib');

const victimAndResponseUnit = (victimsCoordinate, emergencyResponseCoordinates) => {
  if (!victimsCoordinate || !emergencyResponseCoordinates) {
    return 'Invalid input to victimAndResponseUnit.';
  }
  if (typeof (victimsCoordinate) !== 'object' || typeof (emergencyResponseCoordinates) !== 'object') {
    return 'Invalid input to victimAndResponseUnit.';
  }
  if (!emergencyResponseCoordinates.length) {
    return 'Invalid input to victimAndResponseUnit.';
  }
  return `${geolib.getPreciseDistance(victimsCoordinate, geolib.findNearest(victimsCoordinate, emergencyResponseCoordinates)) / 1000}km`;
};

module.exports = victimAndResponseUnit;
