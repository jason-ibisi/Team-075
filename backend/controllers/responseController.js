const geolib = require('geolib');



// const victimsLocation = { latitude: 52.456221, longitude: 12.63128 } //Victims loaction received from the front-end

// const emergencyResponseLocation =  [ // All the Emergency Response units in that location (state) in an array.
//     { latitude: 52.516272, longitude: 13.377722 },
//     { latitude: 51.515, longitude: 7.453619 },
//     { latitude: 51.503333, longitude: -0.119722 },
//     { latitude: 55.751667, longitude: 37.617778 },
//     { latitude: 48.8583, longitude: 2.2945 },
//     { latitude: 59.3275, longitude: 18.0675 },
//     { latitude: 59.916911, longitude: 10.727567 },
// ]


const victimeAndResponseUnit = (victimsCoordinate, emergencyResponseCoordinates) => {
    return `${geolib.getPreciseDistance(victimsCoordinate, geolib.findNearest(victimsCoordinate, emergencyResponseCoordinates))/1000}km`
}

console.log(victimeAndResponseUnit(victimsLocation, emergencyResponseLocation))

module.exports = {
    victimeAndResponseUnit: victimeAndResponseUnit
}