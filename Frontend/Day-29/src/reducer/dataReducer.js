const initialState = {}

const dataReducer = (state = initialState, action) => {
  if (action.type === 'UPDATE_WEATHER_DATA') {
    return action.payload
  }
}

export default dataReducer
