import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import React from 'react'

const products = [

]
const InventoryDialog = ({ open, onOpenChange, mode, selectedProductId, setSelectedProductId, quantity, setQuantity, onSubmit }) => {

    const isEdit = mode === "edit"
    const selectedProduct = {
        name: "Romdul rice"
    }
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    {isEdit ? "Edit Inventory" : "Add Inventory"}
                </DialogHeader>
                <div className='grid gap-4 px-4 py-4'>
                    <div className='grid grid-cols-4 items-center gap-4'>
                        <label htmlFor='product'>Product</label>
                        {isEdit ?
                            (<Input id="product"
                                value={selectedProduct?.name}
                                disbled
                                className={"col-span-3"} />) : (
                                <Select value={selectedProductId} onValueChange={(value) => setSelectedProductId(value)} >
                                    <SelectTrigger className={"w-full col-span-3"}>
                                        <SelectValue placeholder="select a product..." />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem className={"all"}>All Products</SelectItem>
                                        {products.map((product) => <SelectItem key={product.id} value={product.id}>{product.sku || product.name}</SelectItem>)}
                                    </SelectContent>

                                </Select>
                            )
                        }
                    </div>
                    <div className='grid grid-cols-4 items-center gap-4'>
                        <label htmlFor="product">Product</label>
                        <Input id={"quantity"} type={"number"} min={1} value={quantity} onChange={(e)=> setQuantity(e.target.value)} className={"col-span-3"}/>
                    </div>
                </div>
                <DialogFooter>
                    <Button onClick={()=>onOpenChange(false)} variant='outline'>Cancel</Button>
                    <Button onClick={onSubmit}>{isEdit ? "Update Inventory" : "Add Inventory"}</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default InventoryDialog