import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
import { Badge } from '@/components/ui/badge'

const ProductCard = ({ product }) => {
  return (
    <Card className="cursor-pointer hover:shadow-md transition-all duration-200 border hover:border-green-800">
      <CardContent className="p-2 sm:p-3">
        
        {/* Image */}
        <div className="aspect-square bg-muted rounded-md mb-2 flex items-center justify-center overflow-hidden">
          <img
            className="w-full h-full object-cover rounded"
            src={product.image}
            alt={product.name}
          />
        </div>

        {/* Name */}
        <h3 className="font-medium text-xs sm:text-sm truncate">
          {product.name}
        </h3>

        {/* SKU */}
        <p className="text-[10px] sm:text-xs text-muted-foreground truncate">
          {product.sku}
        </p>

        {/* Bottom */}
        <div className="flex items-center justify-between mt-1 gap-1">
          <p className="font-bold text-green-600 text-xs sm:text-sm">
            ${product.sellingPrice || product.price}
          </p>

          <Badge
            variant="secondary"
            className="text-[10px] sm:text-xs px-1 py-0 sm:px-2 sm:py-0.5 truncate max-w-[60px] sm:max-w-none"
          >
            {product.category?.name}
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProductCard