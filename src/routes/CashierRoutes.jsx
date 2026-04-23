import CashierDashboardLayout from '@/pages/cashier/CashierDashboardLayout'
import CreateOrderPage from '@/pages/cashier/CreateOrderPage'
import CustomerLookUp from '@/pages/cashier/CustomerManager/CustomerLookUp'
import OrderHistoryPage from '@/pages/cashier/OrderHistory/OrderHistoryPage'
import ReturnPage from '@/pages/cashier/return /ReturnPage'
import ShiftSummaryPage from '@/pages/cashier/ShiftReport/ShiftSummaryPage'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const CashierRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<CashierDashboardLayout />}>
                <Route index element={<CreateOrderPage/>} />
                <Route path='orders' element={<OrderHistoryPage />} />
                <Route path='customers' element={<CustomerLookUp />} />
                <Route path='returns' element={<ReturnPage />} />
                <Route path='shift-summary' element={<ShiftSummaryPage />} />
            </Route>

        </Routes>
    )
}

export default CashierRoutes