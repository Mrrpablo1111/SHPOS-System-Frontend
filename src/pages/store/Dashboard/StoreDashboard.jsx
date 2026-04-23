import React from 'react'
import DashboardState from './DashboardState'
import RecentSales from './RecentSales'
import SalesTrend from './SalesTrend'

const StoreDashboard = () => {
  return (
    <div className='space-y-6'>
        <h1 className='text-3xl font-bold tracking-right'>Dashboard</h1>
        <DashboardState/>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <RecentSales/>
            <SalesTrend/>
        </div>
    </div>
  )
}

export default StoreDashboard