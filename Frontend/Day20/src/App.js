import { object } from 'prop-types'
import { useState } from 'react'
import './App.css'
import Card from './Card'
function App() {
  let data = [
    { name: 'Pizza', calorie: 30 },
    { name: 'Pazta', calorie: 90 },
    { name: 'Rajma Chawal', calorie: 70 },
    { name: 'Butter Chicken', calorie: 150 },
    { name: 'Fried Rice', calorie: 130 },
  ]

  const [FoodData, setFoodData] = useState(data)
  console.log(FoodData)

  const onDelete = (n) => {
    console.log(n)
    setFoodData(
      FoodData.filter((element) => {
        return element.name != n
      }),
    )
  }

  return (
    <div className="App">
      <div className="containe">
        <header className="mt-2 mb-5 text-center">
          <h1>Calorie Counter</h1>
        </header>
        {FoodData.map((obj, idx) => (
          <Card
            name={obj.name}
            calorie={obj.calorie}
            idx={idx}
            onDelete={onDelete}
            key={idx}
          />
        ))}
      </div>
    </div>
  )
}

export default App
