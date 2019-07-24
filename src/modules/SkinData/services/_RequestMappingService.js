const _service = {
	mapSkinData: function mapSkinData(data) {
		return JSON.stringify({
                  location: data.location,
                  weather: data.weather,
                  temperature: data.temperature,
                  humidity: data.humidity,
                  pressure: data.pressure,
                  moisture: data.moisture,
                  oil: data.oil,
                  pore: data.pore,
                  skinTemperature: data.skinTemperature,
                  skinTone: data.skinTone,
                  wrinkle: data.wrinkle
		})
	}
}

export default _service
