import { Button } from '@/components/ui/button'
import { cartItems } from '@/data/product'
import { Pause, ShoppingCart, Trash2 } from 'lucide-react'
import React from 'react'
import CartItem from './CartItem'
import CartSummary from './CartSummary'


const CartSection = () => {


    return (
        <div className='border-r w-2/5 flex flex-col bg-card'>
            <div className='p-4 border-b bg-muted'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-lg font-semibold flex items-center'><ShoppingCart />Cart {2} items</h2>
                    <div className='flex space-x-2'>
                        <Button
                            variant={'outline'}
                            className=""
                            size={'sm'}>
                            <Pause className='w-4 h-4 mr-1' />Held
                        </Button>

                        <Button
                            variant={'outline'}
                            size={'sm'}>
                            <Trash2 className="w-4 h-4 mr-1" />Clear
                        </Button>
                    </div>
                </div>
            </div>

            {/* CartItem */}
            <div className='flex-1 overflow-y-auto'>
                {cartItems.length === 0 ? (
                    <div className='flex flex-col items-center justify-center h-full text-muted-foreground'>
                        <ShoppingCart className='w-16 h-16 mb-4 opacity-50'/>
                        <p className='text-lg font-medium'>Cart is empty</p>
                        <p>Add product to start an order</p>
                    </div>
                ):(
                    <div className='p-4 space-y-3'>
                        {cartItems.map((item)=>(
                    <CartItem item={item} key={item.id}/>
                ))}
                    </div>
                )}
            </div>
                {/* Cart Summary */}

                {cartItems.length > 0 && <CartSummary/>}
            </div>
    )
}

export default CartSection;