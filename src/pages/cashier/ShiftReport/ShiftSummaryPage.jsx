import React from 'react'
import ShiftReportHeader from './ShiftReportHeader'
import ShiftInfo from './ShiftInfo'
import SaleSummaryCard from './SaleSummaryCard'
import PaymentSummaryCard from './PaymentSummaryCard'
import TopSellingItem from './TopSellingItem'
import RecentOrdersCard from './RecentOrderCard'
import RefundsCard from './RefundCard'


const ShiftSummaryPage = () => {
  return (
    <div className="h-full flex flex-col bg-muted/40">
      <ShiftReportHeader />
      <div className="flex-1 overflow-auto p-4 space-y-3">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <ShiftInfo />
          <SaleSummaryCard />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <PaymentSummaryCard />
          <TopSellingItem />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <RecentOrdersCard />
          <RefundsCard />
        </div>

      </div>
    </div>
  )
}

export default ShiftSummaryPage