import { Button } from '@/components/ui/button'
import { AlignJustify } from 'lucide-react'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useSidebar } from '@/context/hooks/useSidebar'
import { Badge } from '@/components/ui/badge'


const Header = () => {
    const { setSidebarOpen } = useSidebar();
    return (
        <div className='bg-card border-b px-6 py-4'>
            <div className='flex items-center justify-between'>
                <div>
                    <Button className="z-10 p-2 shadow-lg" onClick={() => setSidebarOpen(true)} aria-label="Open sidebar">
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </Button>
                </div>
                <div>
                    <h1 className='text-2xl font-bold text-foreground'>
                        SH-POS-System
                    </h1>
                    <p className='text-sm text-muted-foreground items-center'>Create Order</p>
                </div>
                <div className='flex items-center space-x-2'>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                   
                </div>
            </div>
        </div>
    )
}

export default Header