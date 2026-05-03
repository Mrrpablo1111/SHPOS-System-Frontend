import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Check, Edit, Info, Plus, Trash, X } from 'lucide-react'
import React, { useState } from 'react'
import AddPlanDialog from './AddPlanDialog'

const stores = [{
    id:1,
    name:'Basic',
    price:"4.99",

}]
const Subscription = () => {

    const [openAddNewPlan,setOpenAddNewPlan] = useState(false)

    const handleAccept = () => {
        console.log("handle accept")
    }

    const handleReject = () => {
        console.log("handle reject")
    }
    return (
        <div className='space-y-6'>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl font-bold tracking-tight'>Subscription Plan</h1>
                <div className='flex gap-2'>
                     
                    <Button  className={"gap-2 rounded-full"} onClick={()=>setOpenAddNewPlan(true)}><Plus /> Add New Plan</Button>
                </div>
            </div>

            <Card>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead >Name</TableHead>
                                <TableHead >Price</TableHead>
                                <TableHead >Billing Cycle</TableHead>
                                <TableHead >Branchs</TableHead>
                                <TableHead >Users</TableHead>
                                <TableHead >Products</TableHead>
                                <TableHead >Status</TableHead>
                                <TableHead >Features</TableHead>
                                <TableHead className="text-right">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {stores.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>Owner</TableCell>
                                    <TableCell>Contact</TableCell>
                                    <TableCell>Business Type</TableCell>
                                    <TableCell>Submitted On</TableCell>
                                    <TableCell>Submitted On</TableCell>
                                    <TableCell>Submitted On</TableCell>
                                    <TableCell>Submitted On</TableCell>
                                    <TableCell className="text-right">
                                        <div className='flex justify-end items-center gap-2'>
                                            <Button onClick={handleAccept} variant={"outline"} className={"bg-green-50 rounded-full"} >
                                                <Edit />
                                            
                                            </Button>
                                            <Button onClick={handleReject} variant={"outline"} className={"bg-red-50 rounded-full"}>
                                                <Trash />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
           <AddPlanDialog open={openAddNewPlan} onOpenChange={setOpenAddNewPlan}/>
        </div>
    )
}

export default Subscription