import { useState } from 'react'
import './App.css'
import Navagation from './Navagation'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
      <Navagation />
   </div>
  )
}

export default App
