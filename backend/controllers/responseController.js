const geolib = require('geolib');

const victimAndResponseUnit = (victimsCoordinate, emergencyResponseCoordinates) => `${geolib.getPreciseDistance(victimsCoordinate, geolib.findNearest(victimsCoordinate, emergencyResponseCoordinates)) / 1000}km`;

module.exports = victimAndResponseUnit;
