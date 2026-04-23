import { useState } from 'react'

import './App.css'
import CashierRoutes from './routes/CashierRoutes'
import { Navigate, Route, Routes } from 'react-router-dom'
import BranchLayout from './pages/branch/BranchLayout/BranchLayout'
import BranchRoutes from './routes/BranchRoutes'
import StoreDashboardLayout from './pages/store/Dashboard/StoreDashboardLayout'
import StoreRoutes from './routes/StoreRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        {/* <Route path="/" element={<BranchLayout/>}/> */}
        {/* <Route path='/' element={<Navigate to="/cashier" replace/>}></Route> */}
        {/* <Route path='/' element={<Navigate to="/branch"/>}/> */}
        {/* <Route path='/' element={<Navigate to="/store"/>}/> */}
        {/* <Route path='/cashier/*' element={<CashierRoutes/>}/> */}
        {/* <Route path='/branch/*' element={<BranchRoutes/>}/> */}
        <Route path='/' element={<Navigate to="/store"/>}/>
        <Route path='/store/*' element={<StoreRoutes/>}/>
      </Routes>
    </>
  )
}

export default App
