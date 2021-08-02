export const updateCityName = (newCity) => {
  return {
    type: 'UPDATE_CITY',
    payload: newCity,
  }
}

export const transformData = (data) => {
  return {
    icon: data.current.condition.icon,
    summary: data.current.condition.text,
    temp: data.current.temp_c,
    wind_speed: data.current.wind_kph,
    precipitation: data.current.precip_mm,
    humidity: data.current.humidity,
    city_name: data.location.name,
  }
}

export const getUrl = (city) => {
  return `http://api.weatherapi.com/v1/current.json?key=1a1202bad9e44bf885e185638213007&q=${city}`
}

export const updateCityWeather = (city) => {
  return async (dispatch) => {
    const response = await fetch(getUrl(city))
    const data = await response.json()
    const cityData = transformData(data)

    return dispatch({
      type: 'UPDATE_WEATHER_DATA',
      payload: cityData,
    })
  }
}
