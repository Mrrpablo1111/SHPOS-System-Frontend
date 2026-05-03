import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Check, Edit, Info, X } from 'lucide-react'
import React from 'react'

const stores = [1]
const PendingRequest = () => {

    const handleAccept=()=>{
        console.log("handle accept")
    }

    const handleReject=()=>{
        console.log("handle reject")
    }
    return (
        <div className='space-y-6'>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl font-bold tracking-tight'>Pending Request</h1>

                <div className='flex gap-2'>
                    <Badge className={"gap-2"}>
                        <Info /> pending
                    </Badge>
                </div>
            </div>

            <Card>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead >Store Name</TableHead>
                                <TableHead >Owner</TableHead>
                                <TableHead >Contact</TableHead>
                                <TableHead >Business Type</TableHead>
                                <TableHead >Submitted On</TableHead>
                                <TableHead className="text-right">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {stores.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell>Store Name</TableCell>
                                    <TableCell>Owner</TableCell>
                                    <TableCell>Contact</TableCell>
                                    <TableCell>Business Type</TableCell>
                                     <TableCell>Submitted On</TableCell>
                                    <TableCell className="text-right">
                                        <div className='flex justify-end items-center gap-2'>
                                            <Button onClick={handleAccept} variant={"outline"} className={"bg-green-50 rounded-full"} >
                                            <Check/>
                                            Accept 
                                        </Button>
                                        <Button onClick={handleReject} variant={"outline"} className={"bg-red-50 rounded-full"}>
                                            <X/>Reject
                                        </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}

export default PendingRequest