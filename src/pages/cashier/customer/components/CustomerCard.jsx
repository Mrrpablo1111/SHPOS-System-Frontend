import { Badge } from '@/components/ui/badge'
import { StarIcon } from 'lucide-react'
import React from 'react'


const CustomerCard = ({ customer, setSelectedCustomer }) => {
    return (
        <div className={`p-4 cursor-pointer hover:bg-accent transition-colors`} onClick={() => setSelectedCustomer(customer)}>
            <div className='flex justify-between items-start'>
                <div>
                    <h3>{customer.fullName || 'Unknow Customer'}</h3>
                    <p>{customer.phone || 'N/A'}</p>
                    <p>{customer.email || 'N/A'}</p>
                </div>
                <Badge variant='outline' className={"flex items-center gap-1"}>
                    <StarIcon className='h-3 w-3' />
                    {customer.loyaltyPoints || 0} pts
                </Badge>

            </div>
        </div>
    )
}

export default CustomerCard