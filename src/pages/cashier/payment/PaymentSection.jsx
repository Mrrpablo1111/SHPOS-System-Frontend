import { Button } from '@/components/ui/button'
import { cartItems } from '@/data/product'
import { selectCartItems, selectedCustomer, selectTotal} from '@/Redux Toolkit/features/cart/cartSlice'
import { CreditCard, Pause } from 'lucide-react'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import PaymentDialog from './PaymentDialog'

const PaymentSection = () => {
  const cartItems = useSelector(selectCartItems);
  const selectedCustomers = useSelector(selectedCustomer)

  const total= useSelector(selectTotal);

  const [showPaymentDialog, setShowPaymentDialog] = useState(false);

 
  return (
    <div className='flex flex-1 flex-col p-4 justify-end'>
      <div className='space-y-4'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold text-green-600 dark:text-green-200'>${899}</h1>
          <p className='text-sm text-muted-foreground'>Total Amount</p>
        </div>

        <div className='space-y-2'>
          
            <Button onClick={()=> setShowPaymentDialog(true)}  className={"w-full py-3 text-lg font-semibold"}>
              <CreditCard className='w-5 h-5 mr-2'/>
              Processs Payment
          </Button>
          <div>
            <Button variant={'outline'} className={"w-full"}>
              <Pause className='w-5 h-5 mr-2'/>
              Hold Order
          </Button>
          </div>
        </div>
      </div>
      <PaymentDialog showPaymentDialog={showPaymentDialog} onClose={() => setShowPaymentDialog(false)}/>
    </div>
  )
}

export default PaymentSection