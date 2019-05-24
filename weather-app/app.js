const request = require('request')

function getLatLong (location) {
    const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1Ijoia2FuZ3RoZWtpc3MiLCJhIjoiY2p3Mjc2djZ5MDE4aDN5cXBuYmVocW1wbiJ9.nhx8Bl9ZcH60DDevQMxGzA`

    request(geocodeURL, (err, res, body) => {
        if(err) throw err
    
        if(res.statusCode === 200){
            const data = JSON.parse(body)
            const latitude = data.features[0].center[1]
            const longitude = data.features[0].center[0]
            const placeName = data.features[0].place_name

            console.log('location: ', placeName)
            console.log('latitude: ', latitude)
            console.log('longitude', longitude)

            getWeather('si', latitude, longitude)
        } else {
            console.log('can not get lat long.')
            console.log('http status code: ', res.statusCode)
        }
    })
}

function getWeather(units = 'us', latitude, longitude) {
    const weatherURL = `https://api.darksky.net/forecast/642b43cdcbc0d4990b6857c0effc5b45/${latitude},${longitude}?units=${units}`

    request(weatherURL, (err, res, body) => {
        if(err) throw err
    
        if(res.statusCode === 200) {
            const data = JSON.parse(body)
            console.log('temperature: ', data.currently.temperature)
        } else {
            console.log('can not get weather.')
            console.log('http status code: ', res.statusCode)
        }
    })
}

getLatLong('usa')
