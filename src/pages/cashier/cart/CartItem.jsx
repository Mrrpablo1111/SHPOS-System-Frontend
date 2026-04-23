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
        <CardContent className="p-2 sm:p-3">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">

            {/* Product Info */}
            <div className="flex-1">
              <h3 className="font-medium text-sm sm:text-base truncate">
                {item.name}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground truncate">
                {item.sku}
              </p>
            </div>

            {/* Bottom Section (Mobile) / Right Section (Desktop) */}
            <div className="flex flex-wrap items-center justify-between sm:justify-end gap-2 sm:gap-3">

              {/* Quantity */}
              <div className="flex items-center border rounded-lg overflow-hidden">
                <motion.div whileTap={{ scale: 0.8 }}>
                  <Button variant="ghost" size="sm" className="h-7 w-7 sm:h-8 sm:w-8 p-0">
                    <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                </motion.div>

                <span className="px-2 sm:px-3 text-xs sm:text-sm font-medium min-w-[2.5rem] text-center">
                  {item.quantity}
                </span>

                <motion.div whileTap={{ scale: 0.8 }}>
                  <Button variant="ghost" size="sm" className="h-7 w-7 sm:h-8 sm:w-8 p-0">
                    <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                </motion.div>
              </div>

              {/* Price */}
              <div className="text-right min-w-[70px]">
                <p className="text-xs sm:text-sm text-muted-foreground">
                  ${item.sellingPrice}
                </p>
                <p className="text-sm sm:text-base font-bold text-green-600">
                  ${(item.sellingPrice * item.quantity).toFixed(2)}
                </p>
              </div>

              {/* Delete */}
              <motion.div whileTap={{ scale: 0.8 }}>
                <Button
                  variant="ghost"
                  className="h-7 w-7 sm:h-8 sm:w-8 p-0 text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
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