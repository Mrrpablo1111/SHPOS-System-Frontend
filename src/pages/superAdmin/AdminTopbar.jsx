import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bell, Search, User } from 'lucide-react';
import React from 'react'

const userProfile = {
    name: "Senghongtan",
    email: "sohbopha@admin.com",
};
const AdminTopbar = () => {
    return (
        <header className='bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border px-6 py-4'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                    <h1 className='font-bold text-2xl text-foreground'>
                        Admin Panel
                    </h1>
                </div>
                {/* search */}
                    <div className='flex items-center gap-4'>
                        <div className='relative hidden md:block'>
                            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4' />
                            <Input placeholder="Search stores or users..." className={"pl-10 w-64"} />
                        </div>
                        {/* Notifications */}
                        <Button variant="ghost" size="icon" className="relative">
                            <Bell className="w-5 h-5" />
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                3
                            </span>
                        </Button>
                        {/* User Profile */}
                        <div className="flex items-center gap-3">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-medium text-foreground">
                                    {userProfile?.name || "Super Admin"}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    {userProfile?.email || "sohbopha@admin.com"}
                                </p>
                            </div>
                            <Button variant="ghost" size="icon" className="rounded-full">
                                <User className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
            </div>
        </header>
    )
}

export default AdminTopbar