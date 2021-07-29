import React, { useState } from 'react'
import useWindowSize from './CustomHooks/useWindowSize'
export default function App() {
  const [width, height] = useWindowSize()

  return (
    <div className="container d-flex flex-column align-items-center">
      <h1>
        Current window size is {width}x{height}
      </h1>
    </div>
  )
}
