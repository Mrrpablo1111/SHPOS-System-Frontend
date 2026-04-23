import BranchSidebar from '@/pages/branch/Dashboard/sidebar/BranchSidebar'
import BranchTopsidbar from '@/pages/branch/Dashboard/topbar/BranchTopsidbar'
import React from 'react'
import { Outlet } from 'react-router-dom'
import StoreTopbar from './storeTopbar/StoreTopbar'
import { BadgeDollarSign, BarChart2, FileText, LayoutDashboard, Settings, ShoppingCart, Store, Tag, Truck, Users } from 'lucide-react'
import StoreSidebar from './storeSidebar/StoreSidebar'


const navLinks = [
  {
    name: "Dashboard",
    path: "/store/dashboard",
    icon: <LayoutDashboard className="w-5 h-5" />,
  },
  {
    name: "Stores",
    path: "/store/stores",
    icon: <Store className="w-5 h-5" />,
  },
  {
    name: "Branches",
    path: "/store/branches",
    icon: <Store className="w-5 h-5" />,
  },
  {
    name: "Products",
    path: "/store/products",
    icon: <ShoppingCart className="w-5 h-5" />,
  },
  {
    name: "Categories",
    path: "/store/categories",
    icon: <Tag className="w-5 h-5" />,
  },
  {
    name: "Employees",
    path: "/store/employees",
    icon: <Users className="w-5 h-5" />,
  },
  {
    name: "Alerts",
    path: "/store/alerts",
    icon: <Truck className="w-5 h-5" />,
  },
  {
    name: "Sales",
    path: "/store/sales",
    icon: <BarChart2 className="w-5 h-5" />,
  },

  {
    name: "Reports",
    path: "/store/reports",
    icon: <FileText className="w-5 h-5" />,
  },
  {
    name: "Upgrade Plan",
    path: "/store/upgrade",
    icon: <BadgeDollarSign className="w-5 h-5" />,
  },
  {
    name: "Settings",
    path: "/store/settings",
    icon: <Settings className="w-5 h-5" />,
  },
];
const StoreDashboardLayout = ({children}) => {
  return (
    <div className='flex h-screen bg-gradient-to-br from-primary/5 var-background to-primary/10'>
        <StoreSidebar navLinks={navLinks}/>

        <div className='flex-1 flex flex-col'>
          <StoreTopbar/>
          <main className='flex-1 overflow-y-auto p-8 md:p-10 lg:p-12 m-4'>
              {children || <Outlet/>}
          </main>

        </div>
    </div>
  )
}

export default StoreDashboardLayout