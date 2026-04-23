import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import { Loader2, PlusIcon, StarIcon, ShoppingBag, DollarSign } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'
import { containerVariants, itemVariants, tapButton, hoverCard } from '@/lib/animation.js'

const CustomerDetail = ({ customer, onAddPoints, loading = false }) => {
  if (loading) {
    return (
      <div className='flex flex-col items-center justify-center h-full text-center text-muted-foreground p-4'>
        <Loader2 className='animate-spin h-8 w-8 mb-4' />
        <p>Loading customer details...</p>
      </div>
    )
  }

  if (!customer) {
    return (
      <div className='flex flex-col items-center justify-center h-full text-center text-muted-foreground p-6'>
        <p className='text-lg font-medium'>No customer selected</p>
        <p className='text-sm'>Select a customer to view details</p>
      </div>
    )
  }

  return (
    <motion.div
      className='p-4 space-y-6'
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* Header */}
      <motion.div variants={itemVariants}>
        <Card className="shadow-sm rounded-2xl max-w-6xl mx-auto">
          <CardContent className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 p-6">

            <div className='flex items-center gap-4 w-full sm:w-auto'>
              <Avatar className="h-14 w-14">
                <AvatarImage src="" />
                <AvatarFallback>
                  {customer?.fullName.charAt(0) || "U"}
                </AvatarFallback>
              </Avatar>

              <div className='flex flex-col truncate'>
                <h2 className='text-lg md:text-xl font-semibold truncate'>
                  {customer?.fullName || 'Unknown Customer'}
                </h2>
                <p className='text-sm text-muted-foreground truncate'>
                  {customer?.phone || 'N/A'}
                </p>
                <p className='text-sm text-muted-foreground truncate'>
                  {customer?.email || 'N/A'}
                </p>
              </div>
            </div>

            {/* using external tap animation */}
            <motion.div {...tapButton}>
              <Button
                onClick={onAddPoints}
                className="flex items-center gap-2 rounded-lg shadow-sm mt-4 sm:mt-0 w-full sm:w-auto justify-center"
              >
                <PlusIcon className='w-4 h-4' />
                Add Points
              </Button>
            </motion.div>

          </CardContent>
        </Card>
      </motion.div>

      {/* Stats */}
      <div className='flex flex-col sm:flex-row gap-4'>
        {[ 
          {
            label: "Loyalty Points",
            value: customer?.loyaltyPoints,
            icon: <StarIcon className="text-yellow-500" />,
            bg: "bg-yellow-100"
          },
          {
            label: "Orders",
            value: customer?.totalOrders,
            icon: <ShoppingBag className="text-blue-500" />,
            bg: "bg-blue-100"
          },
          {
            label: "Total Spent",
            value: customer?.totalSpent,
            icon: <DollarSign className="text-green-500" />,
            bg: "bg-green-100"
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            {...hoverCard} // 
            className="flex-1"
          >
            <Card className="rounded-2xl shadow-sm">
              <CardContent className="p-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="text-2xl font-bold">{item.value}</p>
                </div>
                <div className={`${item.bg} p-3 rounded-xl`}>
                  {item.icon}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Extra Info */}
      <motion.div variants={itemVariants}>
        <Card className="rounded-2xl shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">
              Average Order Value
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <span className='text-2xl font-bold'>
              {customer?.averageOrderValue}
            </span>
            <span className='text-sm text-muted-foreground'>
              Last visit: 12 Feb 2026
            </span>
          </CardContent>
        </Card>
      </motion.div>

    </motion.div>
  )
}

export default CustomerDetail