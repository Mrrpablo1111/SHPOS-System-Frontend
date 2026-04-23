import React, { useState } from 'react'
import SideBar from './Sidebar/SideBar';
import { ClockIcon, Layout, ReceiptIcon, RotateCcwIcon, ShoppingCartIcon, UsersIcon } from 'lucide-react';
import { Outlet } from 'react-router-dom';
import { useSidebar } from '@/context/hooks/useSidebar';
import { SidebarProvider } from '@/context/SidebarProvider';

const navItems=[
    {
    path: "/cashier",
    icon: <ShoppingCartIcon size={20} />,
    label: "POS Terminal",
  },
  {
    path: "/cashier/orders",
    icon: <ClockIcon size={20} />,
    label: "Order History",
  },
  {
    path: "/cashier/returns",
    icon: <RotateCcwIcon size={20} />,
    label: "Returns/Refunds",
  },
  {
    path: "/cashier/customers",
    icon: <UsersIcon size={20} />,
    label: "Customers",
  },
  {
    path: "/cashier/shift-summary",
    icon: <ReceiptIcon size={20} />,
    label: "Shift Summary",
  },
]
const LayoutContent = () => {
    const {sidebarOpen, setSidebarOpen} = useSidebar();
  return (
    <div className='flex h-screen bg-background'>
        {sidebarOpen&& <div className='fixed inset-0 z-20 bg-black/40'></div>}

        <div className={`fixed z-30 h-full transition-transform duration-200 ${sidebarOpen?"translate-x-0":"-translate-x-full"} `}>
            <SideBar navItems={navItems} onClose={()=>setSidebarOpen(false)}/>
        </div>
        <div className='flex-1 overflow-auto'>
            <Outlet/>
        </div>
    </div>
  )
}

const CashierDashboardLayout = () => {
  return (
    <SidebarProvider>
        <LayoutContent/>
    </SidebarProvider>
  )
}



export default CashierDashboardLayout