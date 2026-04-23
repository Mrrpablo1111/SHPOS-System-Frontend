
import Alerts from '@/pages/store/Alert/Alerts'
import Branches from '@/pages/store/Branch/Branches'
import Categories from '@/pages/store/Category/Categories'
import StoreDashboard from '@/pages/store/Dashboard/StoreDashboard'
import StoreDashboardLayout from '@/pages/store/Dashboard/StoreDashboardLayout'
import Employees from '@/pages/store/Employee/Employees'
import Products from '@/pages/store/Product/Products'
import Reports from '@/pages/store/Report/Reports'
import Sales from '@/pages/store/Sale/Sales'
import Setting from '@/pages/store/Setting/Setting'
import Stores from '@/pages/store/Store/Stores'
import Upgradeplan from '@/pages/store/UpgradePlan/Upgradeplan'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const StoreRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<StoreDashboardLayout/>}>
            <Route index element={<StoreDashboard/>}/>
            <Route path='dashboard' element={<StoreDashboard/>}/>
            <Route path='stores' element={<Stores/>}/>
            <Route path='branches' element={<Branches/>}/>
            <Route path='products' element={<Products/>}/>
            <Route path='categories' element={<Categories/>}/>
            <Route path='employees' element={<Employees/>}/>
            <Route path='alerts' element={<Alerts/>}/>
            <Route path='sales' element={<Sales/>}/>
            <Route path='reports' element={<Reports/>}/>
            <Route path='upgrade' element={<Upgradeplan/>}/>
            <Route path='setting' element={<Setting/>}/>            
            
        </Route>
    </Routes>
  )
}

export default StoreRoutes