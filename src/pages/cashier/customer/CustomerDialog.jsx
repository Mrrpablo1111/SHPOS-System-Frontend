
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { CircleUser } from 'lucide-react'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CustomerForm from './CustomerForm'

const customers = [
    { id: 1, fullName: "Darakot", phone: "0123456789", email: "dara@gmail.com" },
    { id: 2, fullName: "Makara", phone: "0123456789", email: "makara@gmail.com" },
    { id: 3, fullName: "Channa", phone: "0123456789", email: "chana@gmail.com" }

]

const CustomerDialog = ({ showCustomerDialog, setShowCustomerDialog }) => {

    const [searchQuery, setSearchQuery] = useState('');

    const [showCustomerForm, setShowCustomerForm] = useState(false);

    const loading = useSelector((state)=>state.customer?.loading ?? false)

    const handleSelectCustomer = (customer) => {
        console.log("Selected Customer:", customer)
        setShowCustomerDialog(false);
    }

    // Filter customers based on search
    const filteredCustomers = React.useMemo(() => {
  return customers.filter(customer =>
    customer.fullName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.phone?.includes(searchQuery)
  )
}, [searchQuery])

    return (
        <Dialog open={showCustomerDialog} onOpenChange={setShowCustomerDialog}>
            <DialogContent className={"max-w-2xl"}>
                <DialogHeader>
                    <DialogTitle>
                        <div className='flex items-center'>
                            <CircleUser className='w-6 h-6 mr-2' />
                            Select Customer
                        </div>
                    </DialogTitle>
                </DialogHeader>
                <div className='mb-4'>
                    <Input onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery} placeholder="Search Customer" />

                </div>

                <div className='max-h-96 overflow-y-auto'>
                    {loading ? (
                        <div className='flex items-center justify-center py-8'>
                            <p>Loading customer...</p>
                        </div>
                    ) : filteredCustomers.length === 0 ? (
                        <div className='flex items-center justify-center py-8'>
                            <p className='text-gray-500'>
                                {searchQuery ? 'No customer found matching your search' : 'No customer available.'}
                            </p>
                        </div>
                    ) : (<Table>
                        <TableHeader>
                            <TableHead className="w-[150px]">Name</TableHead>
                            <TableHead className="w-[150px]">Phone</TableHead>
                            <TableHead className="w-[100px]">Email</TableHead>
                        </TableHeader>
                        <TableBody>
                            {filteredCustomers.map((customer) => (
                                <TableRow key={customer.id}>
                                    <TableCell>{customer.fullName}</TableCell>
                                    <TableCell>{customer.phone}</TableCell>
                                    <TableCell>{customer.email}</TableCell>
                                    <TableCell>
                                        <Button size='sm' onClick={()=> handleSelectCustomer(customer)}>
                                            Select
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>)}

                </div>

                <CustomerForm showCustomerForm={showCustomerForm} setShowCustomerForm={setShowCustomerForm}/>
                <DialogFooter>
                    <Button variant='outline'>Cancel</Button>
                    <Button onClick={() => setShowCustomerForm(true)}>Add New Customer</Button>
                </DialogFooter>
            </DialogContent>

        </Dialog>
    )
}

export default CustomerDialog