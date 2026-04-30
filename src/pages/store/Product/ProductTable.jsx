import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Box, DollarSign, Edit, MapPin, Phone, Tag, Trash2, User } from 'lucide-react'
import React from 'react'

const ProductTable = ({products}) => {
  return (
    <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
               <TableHead>Code</TableHead>
                <TableHead>Image</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>

                {products.map((product)=>(
                    <TableRow key={product.id}>
                        <TableCell>
                            <div className='flex items-center gap-2'>
                                #{product.id}
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className='flex items-center gap-2'>
                                {product.image &&(
                                    <img src={product.image} alt={product.name} className='w-12 h-12 object-cover rounded-md'/>
                                )}
                            </div>
                        </TableCell>
                        
                        <TableCell>
                            <div className='space-y-1'>
                                <div className='font-medium'>{product.name.slice(0,70)}...</div>
                            <div className="text-sm text-gray-500 truncate max-w-xs">{product.description}</div>
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className='flex items-center gap-2'>
                                <Tag className='w-4 h-4'/>
                                {product.category}
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className='flex items-center gap-2'>
                                <DollarSign className='w-4 h-4'/>
                                {product.price?.toFixed ? product.price.toFixed(2): product.sellingPrice}
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className='flex items-center gap-2'>
                                <Box className='w-4 h-4'/>
                                {product.stock}
                            </div>
                        </TableCell>
                        <TableCell className={"text-right"}>
                            <div className='flex justify-end gap-2'>
                                <Button variant="outline" size="sm" onClick={()=>onEdit(product)}>
                                    <Edit className='w-4 h-4'/>
                                    </Button>
                                <Button variant='outline' size='sm' className={"text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600"}>
                                    <Trash2 className='w-4 h-4'/>
                                </Button>
                            </div>
                        </TableCell>
                    </TableRow>
                ))}


            </TableBody>
          </Table>
  )
}

export default ProductTable