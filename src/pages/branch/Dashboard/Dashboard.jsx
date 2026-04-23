import React from 'react'
import TodayOverview from './TodayOverview'
import PaymentBreakdown from './PaymentBreakdown'
import SalesChart from './SalesChart'
import TopProduct from './TopProduct'
import CashierPerformance from './CashierPerformance'
import RecentOrders from './RecentOrders'

const branch = {name: "senghong"}
const Dashboard = () => {
  return (
    <div className='space-y-6'>
        <div className='flex justify-between items-center'>
            <h1 className='text-3xl font-bold tracking-tight'>Branch Dashboard</h1>
            <p className='text-gray-500'>{branch?.name|| "Loading branch..."}</p>
        </div>
        <TodayOverview/>
        <PaymentBreakdown/>
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
            <SalesChart/>
            <TopProduct/>
        </div>
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
            <CashierPerformance/>
            <RecentOrders/>
        </div>
    </div>
  )
}

export default Dashboard