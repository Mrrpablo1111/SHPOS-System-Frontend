import React, { useState } from 'react'
import CustomerSearch from '../customer/components/CustomerSearch';
import CustomerList from '../customer/components/CustomerList';
import CustomerDetail from '../customer/components/CustomerDetail';
import PurchaseHistory from './PurchaseHistory';

const CustomerLookUp = () => {
  const [selectedCustomer, setSelectCustomer] = useState(null);
  const [view, setView] = useState('list');
  return (
    <div className='h-full flex flex-col'>
        <div className='p-4 bg-card border-b'>
            <h1 className='text-lg sm:text-2xl font-bold'>Customer Management</h1>
        </div>

        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">

  {/* 📱 MOBILE VIEW */}
  <div className="lg:hidden flex-1 overflow-hidden">
    
    {view === 'list' && (
      <div className="flex flex-col h-full">
        <CustomerSearch />
        <CustomerList
          setSelectedCustomer={(customer) => {
            setSelectCustomer(customer);
            setView('detail');
          }}
        />
      </div>
    )}

    {view === 'detail' && selectedCustomer && (
      <div className="flex flex-col h-full">
        
        {/* 🔙 Back Button */}
        <div className="p-3 border-b flex items-center gap-2 justify-between">
          <button
            onClick={() => setView('list')}
            className="text-sm text-primary"
          >
            ← Back
          </button>
          <span className="text-primary text-sm">Customer Detail</span>
        </div>

        <div className="flex-1 overflow-y-auto">
          <CustomerDetail customer={selectedCustomer} />
          <PurchaseHistory />
        </div>
      </div>
    )}
  </div>

  {/* 💻 DESKTOP VIEW */}
  <div className="hidden lg:flex flex-1 overflow-hidden">
    
    {/* Left */}
    <div className="w-1/3 border-r flex flex-col">
      <CustomerSearch />
      <CustomerList setSelectedCustomer={setSelectCustomer} />
    </div>

    {/* Right */}
    <div className="w-2/3 flex flex-col overflow-y-auto">
      {selectedCustomer ? (
        <>
          <CustomerDetail customer={selectedCustomer} />
          <PurchaseHistory />
        </>
      ) : (
        <div className="flex items-center justify-center h-full text-muted-foreground">
          Select a customer
        </div>
      )}
    </div>
  </div>
</div>
    </div>
  )
}

export default CustomerLookUp;