import React from 'react'
import ProductSection from './product/ProductSection'
import CartSection from './cart/CartSection'
import CustomerPayment from './customer/CustomerPayment'
import Header from './Header/Header'

const CreateOrderPage = () => {
  return (
    <div className='h-full flex flex-col bg-background'>
      <Header/>
        <div className='flex-1 flex overflow-hidden'>
            <ProductSection/>
            <CartSection/>
            <CustomerPayment/>
        </div>
    </div>
  )
}

export default CreateOrderPage