import React, { useState } from 'react'
import BranchesForm from './BranchesForm'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import BranchTable from './BranchTable';

const branchs = [{
    name: "Senghong",
    address: "12st khomdong tong kong khemerak phumen, kohkong provice",
    manager: "Darong",
    phone:"012345567"
}
]

const Branches = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <h1 className='font-bold text-2xl'>Branch Manageer</h1>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button><Plus className='w-4 h-4' />Add Branch</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Branch</DialogTitle>
            </DialogHeader>
            <BranchesForm onCancel={()=> setIsAddDialogOpen(false)} />
          </DialogContent>
        </Dialog>
        
      </div>
      <Card>
          <CardContent>
            <BranchTable branchs={branchs} onEdit={()=>setIsEditDialogOpen(true)}/>
          </CardContent>
        </Card>


        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Branch</DialogTitle>
            </DialogHeader>
            <BranchesForm isEditing={true} onCancel={()=> setIsEditDialogOpen(false)} />
          </DialogContent>
        </Dialog>
        
    </div>
  )
}

export default Branches