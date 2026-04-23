import { Loader2, UserIcon } from 'lucide-react'
import React from 'react'
import CustomerCard from './CustomerCard'
import {motion} from 'framer-motion'
import { containerVariants, hoverCard, itemVariants } from '@/lib/animation'

const customer = [
    {
        id: 1,
        fullName: "Darakot",
        phone: "0123456789",
        email: "dara@gmail.com",
        loyaltyPoints: 150,
        totalOrders: 20,
        totalSpent: 1000,
        averageOrderValue: 50,
    },
    {
        id: 2,
        fullName: "Makara",
        phone: "0123456789",
        email: "makara@gmail.com",
        loyaltyPoints: 200,
        totalOrders: 15,
        totalSpent: 3000,
        averageOrderValue: 50
    },
    {
        id: 3,
        fullName: "Channa",
        phone: "0123456789",
        email: "chana@gmail.com",
        loyaltyPoints: 120,
        totalOrders: 50,
        totalSpent: 6000,
        averageOrderValue: 50
    },
    {
        id: 4,
        fullName: "Channa Rachie",
        phone: "0123456789",
        email: "chanarachie@gmail.com",
        loyaltyPoints: 220,
        totalOrders: 80,
        totalSpent: 7000,
        averageOrderValue: 70 
    }
]

const CustomerList = ({ setSelectedCustomer, loading = false }) => {

    if (loading) {
        return (
            <div className='flex flex-col items-center justify-center h-full py-10 text-muted-foreground'>
                <Loader2 className='animate-spin h-8 w-8 mb-4' />
                <p>Loading customers...</p>
            </div>
        )
    }

    if (!customer || customer.length === 0) {
        return (
            <div className='flex flex-col items-center justify-center h-full text-center text-muted-foreground p-6'>

                <UserIcon size={48} strokeWidth={1} />
                <p className='mt-4'>No customers found</p>
                <p className='text-sm'> Try a different search term</p>
            </div>
        )
    }
    return (
        <motion.div variants={containerVariants} initial="hidden" animate="show" className='flex-1 overflow-auto p-2 sm:p-4'>
            <div className='divide-y'>
                {customer.map((c) => (
                 <motion.div variants={itemVariants} {...hoverCard}>
                       <CustomerCard 
                    className={"w-full flex flex-col sm:flex-row justify-between gap-2"}
                        key={c.id} 
                        customer={c} 
                        setSelectedCustomer= {setSelectedCustomer}
                        />
                 </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

export default CustomerList