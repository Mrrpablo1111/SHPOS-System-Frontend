import React from 'react'
import AddEmployeeDialog from './AddEmployeeDialog'
import EmployeeState from './EmployeeState'
import EmployeeTable from './EmployeeTable'

const BranchEmployee = () => {
  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center'>
          <h1 className='text-3xl font-bold tracking-tight'>
              Employee Management
          </h1>
          <AddEmployeeDialog/>
      </div>
      <EmployeeState/>
      <EmployeeTable/>
    </div>
  )
}

export default BranchEmployee