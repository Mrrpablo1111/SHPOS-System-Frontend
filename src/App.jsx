import { useState } from 'react'

import './App.css'
import CreateOrderPage from './pages/cashier/CreateOrderPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <CreateOrderPage/>
      </div>
    </>
  )
}

export default App
