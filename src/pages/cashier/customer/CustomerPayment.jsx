import React from 'react'
import CustomerSection from './CustomerSection';
import DiscountSection from './DiscountSection';
import NoteSection from './NoteSection';
import PaymentSection from '../payment/PaymentSection';

const CustomerPayment = () => {
  return (
    <div className="
      w-full 
      lg:w-[320px] 
      flex flex-col 
      bg-card 
      border-t lg:border-t-0 lg:border-l
      h-full
    ">

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto space-y-3 p-3">
        <CustomerSection />
        <DiscountSection />
        <NoteSection />
      </div>

      {/* Sticky payment */}
      <div className="border-t p-3 bg-card">
        <PaymentSection />
      </div>

    </div>
  )
}



export default CustomerPayment; 