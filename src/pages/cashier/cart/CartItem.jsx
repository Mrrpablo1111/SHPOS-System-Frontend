import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { motion } from 'framer-motion'
import React from 'react'

const CartItem = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="shadow-sm hover:shadow-md transition-all">
        <CardContent className="p-3">
          
          <div className='flex items-center justify-between'>
            
            {/* Product Info */}
            <div className='flex-1'>
              <h3 className='font-medium'>{item.name}</h3>
              <p className='text-sm text-muted-foreground'>{item.sku}</p>
            </div>

            {/* Controls */}
            <div className='flex items-center space-x-3'>
              
              {/* Quantity */}
              <div className='flex items-center border rounded-lg overflow-hidden'>

                <motion.div whileTap={{ scale: 0.8 }}>
                  <Button variant="ghost" size='sm' className="h-8 w-8 p-0">
                    <Minus className='w-4 h-4'/>
                  </Button>
                </motion.div>

                <span className='px-3 py-1 text-sm font-medium min-w-[3rem] text-center'>
                  {item.quantity}
                </span>

                <motion.div whileTap={{ scale: 0.8 }}>
                  <Button variant='ghost' size='sm' className="h-8 w-8 p-0">
                    <Plus className='w-4 h-4'/>
                  </Button>
                </motion.div>

              </div>

              {/* Price */}
              <div className='text-right'>
                <p className='font-medium text-sm'>${item.sellingPrice}</p>
                <p className='text-sm font-bold text-green-600'>
                  ${(item.sellingPrice * item.quantity).toFixed(2)}
                </p>
              </div>

              {/* Delete */}
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <Button
                  variant='ghost'
                  className="h-8 w-8 p-0 text-red-500 hover:text-red-700"
                >
                  <Trash2 className='w-4 h-4'/>
                </Button>
              </motion.div>

            </div>

          </div>

        </CardContent>
      </Card>
    </motion.div>
  )
}

export default CartItem