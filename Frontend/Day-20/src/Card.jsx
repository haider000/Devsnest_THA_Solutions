import React from 'react'

export default function Card({ name, calorie, idx, onDelete }) {
  return (
    <div
      style={{
        backgroundColor: 'blueviolet',
        borderRadius: '25px',
        height: '100px ',
        width: '460px',
        margin: '5px 3px',
      }}
    >
      <div className="d-flex justify-content-between pt-2 mb-2 mx-2 px-2">
        <h3 className="pl-2">{name}</h3>

        <button
          className="btn btn-success mt-1 mr-5"
          onClick={() => onDelete(name)}
        >
          Delete
        </button>
      </div>
      <div className="mt-2 mb-1 text-center text-white">
        <h4> you have consumed {calorie} cals today</h4>
      </div>
    </div>
  )
}
