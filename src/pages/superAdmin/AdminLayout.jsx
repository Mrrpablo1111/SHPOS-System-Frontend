import React from 'react'
import AdminTopbar from './AdminTopbar'
import AdminSidebar from './AdminSidebar'
import { Outlet } from 'react-router-dom'

const AdminLayout = ({children}) => {
  return (
    <div className='flex h-screen bg-linear-to-br from-primary/5 via-background to-primary/10'>
        <AdminSidebar/>
        <div className='flex-1 flex flex-col'>
            <AdminTopbar/>
            <main className='flex-1 overflow-auto p-8 md:p-10 lg:p-12 m-4'>
                {children || <Outlet/>}
            </main>
        </div>
    </div>
  )
}

export default AdminLayout