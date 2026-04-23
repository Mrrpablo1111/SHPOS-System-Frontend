import React, { useState } from 'react'
import ProductSection from './product/ProductSection'
import CartSection from './cart/CartSection'
import CustomerPayment from './customer/CustomerPayment'
import Header from './Header/Header'

const CreateOrderPage = () => {
  const [activeTab, setActiveTab] = useState('products')

  const tabs = [
    { id: 'products', label: 'Products', icon: '' },
    { id: 'cart',     label: 'Cart',     icon: '' },
    { id: 'payment',  label: 'Payment',  icon: '' },
  ]

  return (
    <div className='h-full flex flex-col bg-background'>
      <Header />

      {/* ── Desktop: side-by-side panels ── */}
      <div className='flex-1 hidden md:flex overflow-hidden'>
        <ProductSection />
        <CartSection />
        <CustomerPayment />
      </div>

      {/* ── Mobile: tabbed view ── */}
      <div className='flex-1 flex flex-col overflow-hidden md:hidden'>

        {/* Tab bar */}
        <div className='flex border-b border-border bg-background shrink-0'>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex-1 flex flex-col items-center gap-0.5 py-2 text-sm font-medium
                transition-colors duration-150
                ${activeTab === tab.id
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-muted-foreground'}
              `}
            >
              <span className='text-lg leading-none'>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab panels — only the active one is visible */}
        <div className='flex-1 overflow-y-auto'>
          {activeTab === 'products' && <ProductSection />}
          {activeTab === 'cart'     && <CartSection />}
          {activeTab === 'payment'  && <CustomerPayment />}
        </div>
      </div>
    </div>
  )
}

export default CreateOrderPage