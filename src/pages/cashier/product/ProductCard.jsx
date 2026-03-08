import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
import { Badge } from '@/components/ui/badge'

const ProductCard = ({ product }) => {
    return (
        <Card className="cursor-pointer hover:shadow-md transition-all duration-200 border hover:border-green-800">
            <CardContent className="py-2">
                <div className='aspect-square bg-muted rounded-md mb-2 flex items-center justify-center overflow-hidden'>
                    <img
                        className='w-full h-full object-cover rounded'
                        src={product.image}
                        alt={product.name}
                    />
                </div>

                <h3 className='font-medium text-sm truncate'>{product.name}</h3>
                <p className='text-xs text-muted-foreground'>{product.sku}</p>

                <div className='flex items-center justify-between mt-1'>
                    <p className='font-bold text-green-600'>
                        ${product.sellingPrice || product.price}
                    </p>

                    <Badge variant='secondary' className="text-xs">
                        {product.category?.name}
                    </Badge>
                </div>
            </CardContent>
        </Card>
    )
}

export default ProductCard