import { CheckCircle } from 'lucide-react'
import React from 'react'
const plans = [{ id: 1, name:"Basic", price:4.99, billingCycle: "monthly" },
   { id: 2, name:"Pro", price:7.99, billingCycle:"monthly" }, 
   { id: 3, name:"Advance", price: 10.99, billingCycle:"monthly"}];
const currentSubscription = {
  plan: {
    id: 1
  }
}
const Upgradeplan = () => {
  return (
    <div className='max-w-5xl mx-auto py-12 px-4'>
      <h1 className='font-bold text-2xl text-center pb-4'>Upgrade your subcription</h1>

      <div className='mb-8 p-4 bg-green-50 border border-gray-200 rounded-lg text-green-900 flex items-center gap-3'>
        <CheckCircle className='w-6 h-6 text-green-500' />
        <div>
          <h1 className='font-bold'>
            Current Plan: Basic
          </h1>
          <h2>Status: Active</h2>
          <h2>Valid till : 03/06/2026</h2>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {plans?.map((p) => (
          <div className={`bg-card rounded-2xl p-8 shadow-lg border flex flex-col relative ${currentSubscription.plan.id == p.id ? "ring-2 ring-primary" : ""}`} key={p.id}>
            {currentSubscription?.plan?.id == p.id && <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
              <span className='bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm'>your plan</span>
            </div>}
            <div>
              <h3 className='font-bold text-2xl text-foreground mb-2'>{p.name}</h3>
              <div className='flex items-baseline justrify-center'>
                <span className='text-4xl font-bold text-foreground'>${p.price}</span>
                <span className='text-muted-foreground ml-1'>/{p.billingCycle?.toLowerCase()}</span>

              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Upgradeplan