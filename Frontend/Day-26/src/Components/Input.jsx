import React from 'react'
import { useSelector } from 'react-redux'
import { updateName, updateEmail } from '../action/action'
// import userReducer from '../reducer/userReducer'
import { useDispatch } from 'react-redux'

function Input() {
  const state = useSelector((state) => state.userReducer)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Input</h1>
      <label htmlFor="Name">Name</label>
      <input
        type="text"
        id="Name"
        value={state.name}
        onChange={(e) => dispatch(updateName(e.target.value))}
      />
      <label htmlFor="Email">Email</label>
      <input
        type="email"
        id="Email"
        value={state.email}
        onChange={(e) => dispatch(updateEmail(e.target.value))}
      />
    </div>
  )
}

export default Input
