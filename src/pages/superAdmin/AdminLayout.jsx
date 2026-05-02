import React from 'react'
import AdminTopbar from './AdminTopbar'
import AdminSidebar from './AdminSidebar'

const AdminLayout = ({children}) => {
  return (
    <div className='flex h-screen bg-linear-to-br from-primary/5 via-background to-primary/10'>
        <AdminSidebar/>
    </div>
  )
}

export default AdminLayout