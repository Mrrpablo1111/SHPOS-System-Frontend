import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Edit, MapPin, Phone, Trash2, User} from 'lucide-react'
import React from 'react'

const CategoriesTable = ({category, onEdit, onDelete}) => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-muted/50">
          <TableHead>Category Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Products</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {category?.length === 0 && (
          <TableRow>
            <TableCell colSpan={4} className="text-center text-gray-500">
              No Categorys found
            </TableCell>
          </TableRow>
        )}

        {category?.map((c, index) => (
          <TableRow key={c.id || index} className="hover:bg-muted/40 transition">
            <TableCell>{c.name}</TableCell>

            <TableCell>
              <div className="flex items-center gap-2">
                {c.description}
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                {c.product}
              </div>
            </TableCell>
            <TableCell className="text-right">
              <div className="flex justify-end gap-2">
                <Button
                  title="Edit Category"
                  variant="outline"
                  size="sm"
                  onClick={() => onEdit(c)}
                >
                  <Edit className="w-4 h-4" />
                </Button>

                <Button
                  title="Delete Category"
                  variant="outline"
                  size="sm"
                  className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600"
                  onClick={() => onDelete(c)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default CategoriesTable;