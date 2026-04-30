import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import EditEmployeeDialog from './EditEmployeeDialog';


const EmployeeTable = () => {
    const[selectedEmployee, setSelectedEmployee] = useState();
    const handleOpenEditDialog=()=>{
        setSelectedEmployee({fullName:"Senghong", role:"BRANCH_CASHIER", email:"senghong@gmail.com",phone:"01234567", password:"12345"})
    }
  return (
     <Table>
      <TableHeader>
        <TableRow>
          <TableHead >Name</TableHead>
          <TableHead>Contact</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Branch</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className={"text-right"}>Actions</TableHead>

        </TableRow>
      </TableHeader>
      <TableBody>
        {[{}].map((order, index)=>(
            <TableRow key={index}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.createdAt}</TableCell>
                <TableCell>{order.fullName}</TableCell>
                <TableCell>{order.cashierId}</TableCell>
                <TableCell>{order.totalAmount}</TableCell>
                <TableCell>{order.paymentType}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell className={"text-right"}>
                    <EditEmployeeDialog handleOpenEditDialog={handleOpenEditDialog} selectedEmployee={selectedEmployee}/>
                </TableCell>
            </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default EmployeeTable