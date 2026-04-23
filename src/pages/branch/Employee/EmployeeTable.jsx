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

const orders = [
  {
    id: "ORD-1001",
    createdAt: "2026-04-08T08:30:00Z",
    customer: { fullName: "Sok Dara", phone: "+855 12 345 678" },
    totalAmount: 12.5,
    paymentType: "CASH",
    items: [
      { name: "Keyboard", quantity: 1, price: 10 },
      { name: "Keycaps", quantity: 2, price: 1.25 },
    ],
  },
  {
    id: "ORD-1002",
    createdAt: "2026-04-08T09:00:00Z",
    customer: { fullName: "Chanthy Srey", phone: "+855 98 222 111" },
    totalAmount: 18.75,
    paymentType: "ABA PAY",
    items: [
      { name: "Mouse", quantity: 1, price: 8.75 },
      { name: "USB Cable", quantity: 2, price: 5 },
    ],
  },
  {
    id: "ORD-1003",
    createdAt: "2026-04-08T09:20:00Z",
    customer: null,
    totalAmount: 6.0,
    paymentType: "CARD",
    items: [{ name: "Sticker Pack", quantity: 3, price: 2 }],
  },
];
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
          <TableHead>Role</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Login Access</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Assigned Since</TableHead>
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