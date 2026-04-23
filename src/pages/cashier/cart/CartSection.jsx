import { Button } from '@/components/ui/button'
import { cartItems } from '@/data/product'
import { Pause, ShoppingCart, Trash2 } from 'lucide-react'
import React from 'react'
import CartItem from './CartItem'
import CartSummary from './CartSummary'


const CartSection = () => {
  return (
    <div className='w-full lg:w-2/5 flex flex-col bg-card border-t lg:border-t-0 lg:border-r'>

      {/* Header */}
      <div className='p-3 sm:p-4 border-b bg-muted'>
        <div className='flex flex-row items-center justify-between gap-2'>
          
          <h2 className='text-base sm:text-lg font-semibold flex items-center gap-2'>
            <ShoppingCart className='w-4 h-4 sm:w-5 sm:h-5' />
            Cart {cartItems.length} items
          </h2>

          <div className='flex flex-wrap gap-2'>
            <Button variant='outline' size='sm' className="text-xs sm:text-sm">
              <Pause className='w-4 h-4 mr-1' />
              Held
            </Button>

            <Button variant='outline' size='sm' className="text-xs sm:text-sm">
              <Trash2 className="w-4 h-4 mr-1" />
              Clear
            </Button>
          </div>

        </div>
      </div>

      {/* Cart Items */}
      <div className='flex-1 overflow-y-auto'>
        {cartItems.length === 0 ? (
          <div className='flex flex-col items-center justify-center h-full text-muted-foreground text-center px-4'>
            <ShoppingCart className='w-12 h-12 sm:w-16 sm:h-16 mb-3 opacity-50'/>
            <p className='text-base sm:text-lg font-medium'>Cart is empty</p>
            <p className='text-sm'>Add product to start an order</p>
          </div>
        ) : (
          <div className='p-3 sm:p-4 space-y-3'>
            {cartItems.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </div>
        )}
      </div>

      {/* Summary */}
      {cartItems.length > 0 && (
        <div className='border-t p-3 sm:p-4'>
          <CartSummary />
        </div>
      )}

    </div>
  );
};

export default CartSection;