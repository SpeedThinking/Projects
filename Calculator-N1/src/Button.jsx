import { useState } from 'react'
import './App.css'

function Buttons() {
  const [count, setCount] = useState(0)

  return ( 
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
           {count}
        </button>
      </div>
  )
}

export default Buttons
