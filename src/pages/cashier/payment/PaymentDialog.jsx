import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'

import React from 'react'


import { Button } from '@/components/ui/button'


const paymentMethods =[
    {id:1, name: "Card",key: "CARD"},
    {id:2, name: "Cash", key: "CASH"},
    {id:3, name: "Qr", key:"QR"}
]

const PaymentDialog = ({showPaymentDialog, setShowPaymentDialog}) => {

    const [paymentMethod, setPaymentMethod] = React.useState("CARD")

    
    
  return (
    <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Payment</DialogTitle>
                <DialogDescription>
                    Select your preferred payment method
                </DialogDescription>
            </DialogHeader>

            <div className='space-y-4'>
                <div className='text-center'>
                    <div className='text-3xl font-bold text-green-600'>
                       ${888}
                    </div>
                    <p className='text-sm text-gray-600'>Amount to be paid</p>
                </div>

                <div className='space-y-2'>
                    {paymentMethods.map((method)=> (
                        <Button variant={paymentMethod == method.key? "default" : "outline"} 
                                key={method.id} 
                                className={"w-full justify-center"} onClick={()=>setPaymentMethod(method.key)}>
                                     {method.name}
                        </Button>
                    ))}
                </div>
            </div>

            <DialogFooter>
                <Button variant='outline' onClick={()=> setShowPaymentDialog(false)}>
                    Cancel
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}

export default PaymentDialog