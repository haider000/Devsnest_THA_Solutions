import React, { useState } from 'react'

const Card = ({ item, idx, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false)
  return (
    <div>
      {!isEditing ? (
        <div className="d-flex flex-column mx-2 my-2">
          <h5 className="m-2">{item.itemName}</h5>
          <h5 className="m-2">You have consumed {item.calorie} calories</h5>

          <div className="d-flex p-2 mr-2">
            <button
              className="btn btn-danger"
              onClick={(e) => {
                onDelete(idx)
              }}
            >
              Delete
            </button>
            <button
              className="btn btn-primary p-2 mx-2"
              onClick={(e) => {
                setIsEditing(!isEditing)
              }}
            >
              Edit
            </button>
          </div>
        </div>
      ) : (
        <div className="d-flex flex-column mx-2 my-2">
          <div className="d-flex  mx-2 my-2">
            <input
              type="text"
              name="itemName"
              className="mx-2"
              value={item.itemName}
              onChange={(e) => {
                onEdit(idx, { itemName: e.target.value })
              }}
            />
            <input
              type="number"
              name="calorie"
              value={item.calorie}
              onChange={(e) => {
                onEdit(idx, { calorie: e.target.value })
              }}
            />
          </div>

          <div className="d-flex m-2">
            <button
              className="btn btn-danger p-2 mx-2"
              onClick={(e) => {
                onDelete(idx)
              }}
            >
              Delete
            </button>

            <button
              className="btn btn-primary p-2 mx-2"
              onClick={(e) => {
                setIsEditing(!isEditing)
              }}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

const MainCard = ({ items, setItems }) => {
  const [data, setData] = useState({
    itemName: '',
    calorie: '',
  })

  return (
    <div className="container-fluid mt-5 mb-2">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          console.log(data.itemName)
          console.log(data.calorie)
          setItems([...items, data])
          setData({ itemName: '', calorie: '' })
        }}
      >
        <div className="d-flex">
          <input
            className="mx-2"
            type="text"
            name="itemName"
            placeholder="Item Name"
            value={data.itemName}
            required
            onChange={(e) => setData({ ...data, itemName: e.target.value })}
          />
          <input
            type="number"
            name="calorie"
            placeholder="Calorie Amount"
            value={data.calorie}
            required
            onChange={(e) => setData({ ...data, calorie: e.target.value })}
          />
        </div>
        <div className="my-2  d-flex justify-content-center align-content-center align-items-center">
          <button className="btn btn-primary ml-5" type="submit">
            Add Item
          </button>
        </div>
      </form>
    </div>
  )
}

export { MainCard, Card }
