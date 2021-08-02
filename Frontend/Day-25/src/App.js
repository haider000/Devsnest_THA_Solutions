import React, { useState } from 'react'
import { Card, MainCard } from './Card'
export default function App() {
  const [items, setItems] = useState([])
  //   console.log(items)
  const onEdit = (index, newVal) => {
    setItems(
      items.map((obj, idx) => {
        if (idx === index) {
          console.log(obj)
          return { ...obj, ...newVal }
        }
        return obj
      }),
    )
  }

  const onDelete = (index) => {
    setItems(items.filter((_, idx) => idx !== index))
  }
  return (
    <div className="container d-flex flex-column align-items-center">
      <div>
        <MainCard items={items} setItems={setItems} />
      </div>

      <div
        className="d-flex flex-column"
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'scroll',
        }}
      >
        {items.map((item, idx) => (
          <Card
            key={idx}
            item={item}
            idx={idx}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  )
}
