import BranchLayout from '@/pages/branch/BranchLayout/BranchLayout'
import Customers from '@/pages/branch/Customers/Customers'
import Dashboard from '@/pages/branch/Dashboard/Dashboard'
import BranchEmployee from '@/pages/branch/Employee/BranchEmployee'
import Inventory from '@/pages/branch/Inventory/Inventory'
import Orders from '@/pages/branch/Orders/Order'
import Refunds from '@/pages/branch/Refunds/Refunds'
import ReportEmployee from '@/pages/branch/ReportEmployee/ReportEmployee'
import Setting from '@/pages/branch/Settings/Settings'
import Transactions from '@/pages/branch/Transactions/Transactions'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const BranchRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<BranchLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='orders' element={<Orders/>}/>
            <Route path='refunds' element={<Refunds/>}/>
            <Route path='transactions' element={<Transactions/>}/>
            <Route path='employees' element={<BranchEmployee/>}/>
            <Route path='customers' element={<Customers/>}/>
            <Route path='inventory' element={<Inventory/>}/>
            <Route path='settings' element={<Setting/>}/>
            <Route path='reports' element={<ReportEmployee/>}/>
        </Route>
    </Routes>
  )
}

export default BranchRoutes