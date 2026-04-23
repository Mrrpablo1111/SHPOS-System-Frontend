import React from 'react'
import BranchSidebar from '../Dashboard/sidebar/BranchSidebar'
import BranchTopsidbar from '../Dashboard/topbar/BranchTopsidbar'
import { Outlet } from 'react-router-dom'
import { CreditCard, FileText, LayoutDashboard, Package, RefreshCw, Settings, ShoppingBag, UserCircle, Users } from 'lucide-react'


const branch = {
  name: "sengko branch",
  address:"Street 123, near bosba at Kohkong."
}
const navLinks = [
  {
    name: "Dashboard",
    path: "/branch/dashboard",
    icon: <LayoutDashboard className="w-5 h-5" />,
  },
  {
    name: "Orders",
    path: "/branch/orders",
    icon: <ShoppingBag className="w-5 h-5" />,
  },
  {
    name: "Refunds",
    path: "/branch/refunds",
    icon: <RefreshCw className="w-5 h-5" />,
  },
  {
    name: "Transactions",
    path: "/branch/transactions",
    icon: <CreditCard className="w-5 h-5" />,
  },
  {
    name: "Inventory",
    path: "/branch/inventory",
    icon: <Package className="w-5 h-5" />,
  },
  {
    name: "Employees",
    path: "/branch/employees",
    icon: <Users className="w-5 h-5" />,
  },
  {
    name: "Customers",
    path: "/branch/customers",
    icon: <UserCircle className="w-5 h-5" />,
  },
  {
    name: "Reports",
    path: "/branch/reports",
    icon: <FileText className="w-5 h-5" />,
  },
  {
    name: "Settings",
    path: "/branch/settings",
    icon: <Settings className="w-5 h-5" />,
  },
];


const BranchLayout = ({children}) => {

  return (
    <div className='flex h-screen bg-gradient-to-br from-primary/5 var-background to-primary/10'>
        <BranchSidebar branch={branch} navLinks={navLinks}/>

        <div className='flex-1 flex flex-col'>
            <BranchTopsidbar/>
            <main className='flex-1 overflow-y-auto p-8 md:p-10 lg:p-12 m-4'>
                {children || <Outlet/>}
            </main>
        </div>
        
    </div>
  )
}

export default BranchLayout