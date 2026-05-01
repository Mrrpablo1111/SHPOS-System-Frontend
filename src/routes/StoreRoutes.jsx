
import Alerts from '@/pages/store/Alert/Alerts'
import Branches from '@/pages/store/Branch/Branches'
import Categories from '@/pages/store/Category/Categories'
import StoreDashboard from '@/pages/store/Dashboard/StoreDashboard'
import StoreDashboardLayout from '@/pages/store/Dashboard/StoreDashboardLayout'
import StoreEmployee from '@/pages/store/Employee/StoreEmployee'
import Products from '@/pages/store/Product/Products'
import Reports from '@/pages/store/Report/Reports'
import Sales from '@/pages/store/Sale/Sales'
import Stores from '@/pages/store/Store/Stores'
import StoreInfo from '@/pages/store/StoreInfo/StoreInfo'
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
            <Route path='employees' element={<StoreEmployee/>}/>
            <Route path='alerts' element={<Alerts/>}/>
            <Route path='sales' element={<Sales/>}/>
            <Route path='reports' element={<Reports/>}/>
            <Route path='upgrade' element={<Upgradeplan/>}/>
            <Route path='setting' element={<StoreInfo/>}/>            
            
        </Route>
    </Routes>
  )
}

export default StoreRoutes