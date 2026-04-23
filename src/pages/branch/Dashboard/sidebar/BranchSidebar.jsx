
import { Button } from '@/components/ui/button'
import { CreditCard, Cross, FileText, LayoutDashboard, LogOut, Package, RefreshCw, Settings, ShoppingBag, UserCircle, Users, X } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'



const BranchSidebar = ({branch, navLinks}) => {
  return (
    <aside className='h-screen w-64 bg-sidebar border-r border-sidebar-border flex flex-col py-6 px-4 shadow-lg'>
      <div className="mb-8 text-2xl font-extrabold text-primary tracking-tight flex items-center gap-2">
        <Package className="w-7 h-7 text-primary" />
        Branch Manager
      </div>
      <nav className='flex-1 overflow-y-auto'>
          <ul className='space-y-2'>
            {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors text-base font-medium group 
                        ${location.pathname.startsWith(link.path) ? "bg-sidebar-accent text-sidebar-accent-foreground shadow" : " text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"}`}>
              <span className={`transition-colors ${location.pathname.startsWith(link.path) ? "text-sidebar-primary" : "text-sidebar-foreground/60 group-hover:text-sidebar-primary"}`}>
                {link.icon}
              </span>
              {link.name}
            </Link>
          </li>
        ))}
          </ul>
      </nav>
       <div className="mt-auto">
        {branch && (
        <div className='mb-6 px-4 py-3 bg-sidebar-accent rounded-lg'>
          <div className='font-medium text-sidebar-accent-foreground'>{branch.name}</div>
          <div className='text-xs text-sidebar-accent-foreground/70 mt-1'>{branch.address}</div>
        </div>
      )}
        <Button
         
          variant=""
          className="flex items-center gap-3 rounded-lg transition-colors text-base font-medium w-full text-left "
        >
          <LogOut className="w-5 h-5" />
          Logout
        </Button>
      </div>
    </aside>

  )
}

export default BranchSidebar