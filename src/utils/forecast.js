const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=5166a4882b3b57f2219d44b153a40638&query=${latitude},${longitude}&units=m`

  request({ url, json: true }, (err, { body }) => {
    if (err) {
      callback('Unable to connect to weather service!', undefined)
    } else if (body.error) {
      callback('Unable to find location', undefined)
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out. The humidity is ${body.current.humidity} %.`
      )
    }
  })
}

module.exports = forecast
