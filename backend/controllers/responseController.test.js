const victimAndResponseUnit = require('./responseController');


it('compute final distance between the victims location and the Response units array of locations', () => {
    expect(victimAndResponseUnit({ latitude: 52.456221, longitude: 12.63128 }, 
        [
                { latitude: 52.516272, longitude: 13.377722 },
                { latitude: 51.515, longitude: 7.453619 },
                { latitude: 51.503333, longitude: -0.119722 },
                { latitude: 55.751667, longitude: 37.617778 },
                { latitude: 48.8583, longitude: 2.2945 },
                { latitude: 59.3275, longitude: 18.0675 },
                { latitude: 59.916911, longitude: 10.727567 },
            ])).toEqual('51.145km')
    
    expect(victimAndResponseUnit({ latitude: 52.456221, longitude: 12.63128 }, 
        [{ latitude: 52.516272, longitude: 13.377722 }])).toEqual('51.145km') 
})

it('working with undefined and null input', () => {
    expect(victimAndResponseUnit(undefined, 
        undefined)).toEqual('Invalid input to victimAndResponseUnit.') 
    expect(victimAndResponseUnit(null, 
        undefined)).toEqual('Invalid input to victimAndResponseUnit.')
    expect(victimAndResponseUnit(null, 
        [])).toEqual('Invalid input to victimAndResponseUnit.')  
})

it('working with empty input', () => {
    expect(victimAndResponseUnit('', 
        '')).toEqual('Invalid input to victimAndResponseUnit.') 
    expect(victimAndResponseUnit(null, 
        undefined)).toEqual('Invalid input to victimAndResponseUnit.') 
})

it('working with integer and string input', () => {
    expect(victimAndResponseUnit('a', 
        'a')).toEqual('Invalid input to victimAndResponseUnit.') 
    expect(victimAndResponseUnit(null, 
        undefined)).toEqual('Invalid input to victimAndResponseUnit.') 
})

it('working with empty array of ERS coordinates', () => {
    expect(victimAndResponseUnit( 
        )).toEqual('Invalid input to victimAndResponseUnit.') 
    expect(victimAndResponseUnit({ latitude: 52.456221, longitude: 12.63128 }, 
        [])).toEqual('Invalid input to victimAndResponseUnit.') 
})


