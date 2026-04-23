import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import { Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';


const InventoryTable = ({setIsEditDialogOpen}) => {
    const inventories = [{
        name: "Romdul rice",
        quantity: 34,
        category:"Rice",
        sku:"RICE-BATHOMBONG"
    }
    ]
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead >SKU</TableHead>
          <TableHead >Product Name</TableHead>
          <TableHead >Quantity</TableHead>
          <TableHead className="text-right">Category</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {inventories.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.sku}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.quantity}</TableCell>
            <TableCell className="text-right">{item.category}</TableCell>
            <TableCell className="text-right">
                <Button onClick={()=>setIsEditDialogOpen(true)} variant={"outline"} size={"icon"}>
                    <Edit/>
                </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default InventoryTable