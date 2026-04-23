import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Save } from 'lucide-react'


import React, { useState } from 'react'

const workingDays = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun"
]
const BranchInfo = () => {
    const [branchInfo, setBranchInfo] = useState({
        name: "",
        address: "",
        phone: "",
        email: "",
        workingDays: ["Mon"]

    })
    const handleBranchInfoChange = (field, value) => {
        setBranchInfo(prev => ({
            ...prev, [field]: typeof value === "function"
                ? value(prev[field])
                : value
        }))
    }
    const handleSaveSettings = () => {
        console.log("branch info", branchInfo)
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Branch Info</CardTitle>
                <CardDescription>Update your branch details and bussiness time</CardDescription>
            </CardHeader>
            <CardContent className={"space-y-6"}>

                <div className='space-y-4'>
                    {/* Input */}
                    <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                        <div className='space-y-2'>
                            <label className='text-sm font-medium'>Branch Name</label>
                            <Input name="name" placeholder="branch name" value={branchInfo.name} onChange={(e) => handleBranchInfoChange("name", e.target.value)} />
                        </div>
                        <div className='space-y-2'>
                            <label className='text-sm font-medium'>Address</label>
                            <Input placeholder="address" name="address" value={branchInfo.address} onChange={(e) => handleBranchInfoChange("address", e.target.value)} />

                        </div>
                        <div className='space-y-2'>
                            <label className='text-sm font-medium'>Phone Number</label>
                            <Input placeholder="branch contect name" name="phone" value={branchInfo.phone} onChange={(e) => handleBranchInfoChange("phone", e.target.value)} />
                        </div>
                        <div className='space-y-2'>
                            <label className='text-sm font-medium'>Email</label>
                            <Input placeholder="branch contect email" name="email" value={branchInfo.email} onChange={(e) => handleBranchInfoChange("email", e.target.value)} />

                        </div>
                    </div>
                    <Separator />

                    {/* WorkingDays */}
                    <div className='mt-4'>
                        <label htmlFor="" className='text-sm font-medium'>{""}Working Days</label>
                        <div className='grid grid-cols-2 gap-2 mt-2 md:grid-cols-4'>
                            {workingDays.map((day) =>
                            (
                                <div key={day} className='flex items-center gap-2'>
                                    <Checkbox id={day} checked={branchInfo.workingDays.includes(day)} onCheckedChange={(checked) => {
                                        handleBranchInfoChange("workingDays", (prev) => checked
                                            ? prev.includes(day)
                                                ? prev : [...prev, day]
                                            : prev.filter((d) => d !== day))
                                    }} />
                                    <label htmlFor='' className='text-gray-700'>
                                        {day}
                                    </label>
                                </div>
                            )
                            )}
                        </div>
                    </div>
                </div>
                <div>
                    <Button onClick={handleSaveSettings}>
                        <Save className='h-4 w-4' /> Save Changes
                    </Button>
                </div>

            </CardContent>
        </Card>
    )
}

export default BranchInfo