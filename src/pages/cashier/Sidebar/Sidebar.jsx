
import { Button } from '@/components/ui/button'
import { Cross, X } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = ({ navItems, onClose }) => {
    return (
        <div className='w-64 border-r border-border bg-sidebar p-4 flex flex-col h-full relative'>
            <Button size='icon' onClick={onClose} aria-label="Close sidebar" className={"absolute top-2 right-2"}>
                <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </Button>
            <div className='flex justify-center items-center p-2 mb-6'>
                <h1 className='text-xl font-bold text-sidebar-foreground'>SH-POS-SYSTEM</h1>
            </div>
            <nav>
                {navItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`flex items-center justify-between p-4 rounded-md hover:bg-sidebar-accent transition-colors 
                        ${location.pathname === item.path ? "bg-sidebar-accent text-sidebar-accent-foreground" : " text-sidebar-foreground"}`} onClick={() => {
                            if (onClose) onClose();
                        }}>
                        <div className='flex items-center gap-3'>
                            {item.icon}
                            <span>{item.label}</span>
                        </div>
                    </Link>
                ))}
            </nav>
        </div>

    )
}

export default SideBar