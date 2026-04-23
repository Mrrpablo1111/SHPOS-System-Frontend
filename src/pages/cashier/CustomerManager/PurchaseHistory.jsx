import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { formatDate } from '@/data/formatDate';
import { CalendarIcon, DollarSignIcon, Loader2, ShoppingBagIcon } from 'lucide-react'
import React from 'react'
import {motion} from 'framer-motion'
import { containerVariants, hoverCard, itemVariants } from '@/lib/animation';
const orders = [
    {
        id: "order_001",
        createdAt: "2026-03-20T10:30:00Z",
        totalAmount: 59.97,
        items: [
            {
                product: {
                    name: "Rice",
                },
                productName: "Romdul Rice",
                quantity: 1,
                price: 49.99,
            },
            {
                product: {
                    name: "Romdul Rice",
                },
                productName: "Romdul Rice",
                quantity: 1,
                price: 9.98,
            },
        ],
    },
    {
        id: "order_002",
        createdAt: "2026-03-19T14:15:00Z",
        totalAmount: 120.0,
        items: [
            {
                product: {
                    name: "Romdul Rice",
                },
                productName: "Romdul Rice",
                quantity: 1,
                price: 100.0,
            },
            {
                product: {
                    name: "Romdul Rice",
                },
                productName: "Romdul Rice",
                quantity: 2,
                price: 10.0,
            },
        ],
    },
    {
        id: "order_003",
        createdAt: "Romdul Rice",
        totalAmount: 0,
        items: [
            {
                product: {
                    name: null,
                },
                productName: "",
                quantity: 1,
                price: 0,
            },
        ],
    },
];

const PurchaseHistory = ({ loading = false }) => {

    if (loading) {
        return (
            <div>
                <Loader2 className='animate-spin h-8 w-8 mb-4' />
                <p>Loading purchase history </p>
            </div>
        )
    }

    if (!orders || orders.length === 0) {
        return (
            <div className='flex flex-col items-center justify-center p-4 text-center text-muted-foreground'>
                <ShoppingBagIcon size={48} strokeWidth={1} />
                <p className='mt-4'>No puchase history found</p>
                <p className='text-sm'>This customer hasn't made any orders yet</p>
            </div>
        )
    }


    return (
        <motion.div variants={containerVariants} initial="hidden" animate="show" className='p-4 sm:p-4 border-t'>
            <Card className={"shadow-sm mx-auto max-w-6xl"}>
                <CardHeader>
                    <CardTitle className={"flex items-center gap-2 text-base font-semibold"}>
                        <ShoppingBagIcon className='h-5 w-5' />
                        Purchase History
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        {orders.map((order) => (
                            <motion.div
                                key={order.id} 
                                variants={itemVariants}
                                {...hoverCard}
                                className='border rounded-lg p-4 bg-white hover:shadow-md transition-all duration-300'>

                                {/* Header */}
                                <div className='flex justify-between items-start mb-3'>
                                    <div className='min-w-0'>
                                        <h3 className='font-semibold  text-sm sm:text-base truncate'>Order Code: #{order.id}</h3>
                                        <div className='flex items-center gap-2 text-xs text-muted-foreground mt-1'>
                                            <CalendarIcon className='w-4 h-4' />
                                            {formatDate(order.createdAt)}
                                        </div>
                                    </div>

                                    <div className='flex flex-col items-end ml-2  '>
                                        <div className='flex items-center gap-1 '>
                                            <span className='font-semibold'>Total: </span>
                                            <DollarSignIcon className='w-4 h-4' />
                                            <span className='font-semibold text-sm sm:text-base'>{order.totalAmount?.toFixed(2) || '0.00'}</span>
                                        </div>
                                        <Badge className={"mt-1 w-fit "}>
                                            Successfully
                                        </Badge>
                                    </div>
                                </div>

                                {/* Payment */}
                                <div className='text-sm text-muted-foreground mb-3'>
                                    Payment: {"Card"}
                                </div>

                                {/* Item */}
                                {order.items && order.items.length > 0 && (
                                    <div className='border-t pt-3 space-y-2'>
                                    <h4 className='text-xs font-medium mb-2 text-muted-foreground'>Items</h4>
                                    <div className='space-y-1'>
                                        {order.items.map((item, index)=>(
                                            <div key={index} className='flex justify-between text-sm'>
                                            <span className='truncate max-w-[65%] sm:max-w-[75%]'>{item.product.name || item.productName || 'Unknow Product'}</span>
                                            <span className='text-muted-foreground whitespace-nowrap'>{item.quantity || 1} * ${(item.price || 0).toFixed(2)}</span>
                                        </div>
                                        ))}
                                    </div>
                                </div>
                                )}
                                
                            </motion.div>
                        ))}

                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}

export default PurchaseHistory