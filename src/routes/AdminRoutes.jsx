
import AdminLayout from '@/pages/superAdmin/AdminLayout'
import AdminDashboard from '@/pages/superAdmin/Dashboard/AdminDashboard'
import PendingRequest from '@/pages/superAdmin/PendingRequest/PendingRequest'
import { Setting } from '@/pages/superAdmin/Setting/Setting'
import Store from '@/pages/superAdmin/Store/Store'
import Subscription from '@/pages/superAdmin/Subscription/Subscription'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const AdminRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<AdminLayout/>}>
            <Route index element={<AdminDashboard/>}/>
            <Route path='dashboard' element={<AdminDashboard/>}/>
            <Route path='stores' element={<Store/>}/>
            <Route path='subscriptions' element={<Subscription/>}/>
            <Route path='requests' element={<PendingRequest/>}/>
            <Route path='settings' element={<Setting/>}/>
        </Route>
    </Routes>
  )
}

export default AdminRoutes