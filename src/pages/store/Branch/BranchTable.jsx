import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Edit, MapPin, Phone, Trash2, User} from 'lucide-react'
import React from 'react'

const BranchTable = ({branchs, onEdit, onDelete}) => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-muted/50">
          <TableHead>Branch Name</TableHead>
          <TableHead>Address</TableHead>
          <TableHead>Manager</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {branchs?.length === 0 && (
          <TableRow>
            <TableCell colSpan={5} className="text-center text-gray-500">
              No branches found
            </TableCell>
          </TableRow>
        )}

        {branchs?.map((branch) => (
          <TableRow key={branch.id} className="hover:bg-muted/40 transition">
            <TableCell>{branch.name}</TableCell>

            <TableCell>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {branch.address}
              </div>
            </TableCell>

            <TableCell>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {branch.manager}
              </div>
            </TableCell>

            <TableCell>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                {branch.phone}
              </div>
            </TableCell>

            <TableCell className="text-right">
              <div className="flex justify-end gap-2">
                <Button
                  title="Edit Branch"
                  variant="outline"
                  size="sm"
                  onClick={() => onEdit(branch)}
                >
                  <Edit className="w-4 h-4" />
                </Button>

                <Button
                  title="Delete Branch"
                  variant="outline"
                  size="sm"
                  className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600"
                  onClick={() => onDelete(branch)}
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

export default BranchTable