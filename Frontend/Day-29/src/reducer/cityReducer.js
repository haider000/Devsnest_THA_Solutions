const initialState = 'Delhi'

const cityReducer = (state = initialState, action) => {
  if (action.type === 'UPDATE_CITY') {
    return action.payload
  }

  return state
}

export default cityReducer
