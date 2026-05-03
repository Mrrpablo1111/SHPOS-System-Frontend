import React from 'react'
import AdminDashboardOverview from './AdminDashboardOverview'
import StoreRegistrationChart from './chart/StoreRegistrationChart'
import StoreStatusChart from './chart/StoreStatusChart'

const AdminDashboard = () => {
  return (
    <div>
      <div className='pb-5'>
        <h1 className='font-bold text-3xl'>Admin Dashoard</h1>
        <p className='text-muted-foreground'>Overviews of all stores and system statistics</p>
      </div>
      <AdminDashboardOverview/>
      <div className='grid md:grid-cols-2 gap-4 py-4'>
        <StoreRegistrationChart/>
        <StoreStatusChart/>
        
      </div>
    </div>
  )
}

export default AdminDashboard