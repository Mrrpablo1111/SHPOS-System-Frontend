import React from 'react'
import AdminDashboardOverview from './AdminDashboardOverview'

const AdminDashboard = () => {
  return (
    <div>
      <div className='pb-5'>
        <h1 className='font-bold text-3xl'>Admin Dashoard</h1>
        <p className='text-muted-foreground'>Overviews of all stores and system statistics</p>
      </div>
      <AdminDashboardOverview/>
    </div>
  )
}

export default AdminDashboard