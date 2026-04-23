
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Plus } from 'lucide-react'
import React from 'react'
import EmployeeForm from './EmployeeForm'
const roles= [
    "BRANCH_ADMIN",
    "BRANCH_CASHIER",
    "BRANCH_MANAGER" 
]
const AddEmployeeDialog = () => {
  return (
    <Dialog>
        <DialogTrigger asChild>
            <Button className={""}>
                <Plus/>
                Add Employee
            </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                    <DialogTitle>Add New Employee</DialogTitle>
            </DialogHeader>
            <EmployeeForm roles={roles}/>
        </DialogContent>
    </Dialog>
  )
}

export default AddEmployeeDialog