import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import React, { useState } from 'react'
import InventoryDialog from './InventoryDialog'
import InventoryTable from './InventoryTable'

const Inventory = () => {
  const [isAddDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)

  const handleAddInventory = () => {
    console.log(selectedProductId, quantity)
  }
  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-bold tracking-tight'>Inventory Management</h1>
        <div className='flex gap-2'>
          <Button onClick={() => setIsDialogOpen(true)} className={"gap-2"}><Plus /> Add Inventory</Button>
        </div>
      </div>
      <InventoryTable setIsEditDialogOpen={setIsEditDialogOpen}/>
      <InventoryDialog
        open={isAddDialogOpen} 
        onOpenChange={setIsDialogOpen} 
        mode="add" 
        selectedProductId={selectedProductId} 
        setSelectedProductId={setSelectedProductId} 
        quantity={quantity}
        setQuantity={setQuantity} 
        onSubmit={handleAddInventory} />

        <InventoryDialog
        open={isEditDialogOpen} 
        onOpenChange={setIsEditDialogOpen} 
        mode="edit" 
        selectedProductId={selectedProductId} 
        setSelectedProductId={setSelectedProductId} 
        quantity={quantity}
        setQuantity={setQuantity} 
        onSubmit={handleAddInventory} />
    </div>
  )
}

export default Inventory