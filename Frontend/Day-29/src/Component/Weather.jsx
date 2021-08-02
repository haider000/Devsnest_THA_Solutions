import React, { useEffect } from 'react'
import './Weather.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { updateCityName, updateCityWeather } from '../action/action'

const Weather = () => {
  const cityName = useSelector((state) => state.cityReducer)
  const cityData = useSelector((state) => state.dataReducer)

  const dispatch = useDispatch()

  // useEffect(() => {
  //   handleSubmit()
  // }, [])

  return (
    <div className="container">
      <div>
        <input
          type="text"
          value={cityName}
          placeholder="Enter city"
          onChange={(e) => dispatch(updateCityName(e.target.value))}
        />
        <button
          onClick={(e) => {
            updateCityWeather(cityName)
          }}
        >
          Check now
        </button>
      </div>
      <div className="result">
        <img src={cityData.icon} alt="" />
        <h1>{cityData.temp}</h1>
        <p>{cityData.summary}</p>
        <h1>{cityData.city_name}</h1>
      </div>
      <div className="whp">
        <div className="simple">
          <h2>Wind Now</h2>
          <h2>{cityData.wind_speed}</h2>
        </div>
        <div className="simple">
          <h2>humidity</h2>
          <h2>{cityData.humidity}</h2>
        </div>
        <div className="simple">
          <h2>Percipitation</h2>
          <h2>{cityData.precipitation}</h2>
        </div>
      </div>
    </div>
  )
}

export default Weather
