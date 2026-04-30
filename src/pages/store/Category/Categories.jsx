import React, { useState } from 'react'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import CategoriesForm from './CategoriesForm';
import CategoriesTable from './CategoriesTable';

const category = [{
  name: "Rice",
  description: "testing",
  product: "Romdul-Rice"

}
]

const Categories = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <h1 className='font-bold text-2xl'>Category Manageer</h1>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className={"rounded-full"}><Plus className='w-4 h-4' />Category</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Category</DialogTitle>
              <DialogDescription>
                Create a new category for organizing your products.
              </DialogDescription>
            </DialogHeader>
            <CategoriesForm onCancel={() => setIsAddDialogOpen(false)} />
          </DialogContent>
        </Dialog>

      </div>
      <Card>
        <CardContent>
          <CategoriesTable category={category} onEdit={() => setIsEditDialogOpen(true)} />
        </CardContent>
      </Card>


      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Category</DialogTitle>
            <DialogDescription>
              Create a new category for organizing your products.
            </DialogDescription>
          </DialogHeader>
          <CategoriesForm isEditing={true} onCancel={() => setIsEditDialogOpen(false)} />
        </DialogContent>
      </Dialog>

    </div>
  )
}

export default Categories;