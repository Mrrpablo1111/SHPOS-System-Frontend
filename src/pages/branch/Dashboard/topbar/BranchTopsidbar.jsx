import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Bell, User } from 'lucide-react'
import React from 'react'

const userProfile = {
  name: "Sophea Dara",
  email: "sophea.dara@branchos.com",
};

const branch = {
  name: "sengko branch",
  address:"Street 123, near bosba at Kohkong."
}
const BranchTopsidbar = () => {
  return (
    <header className='bg-background border-b px-6 py-4 flex items-center justify-between'>
      <div>
        <h1>{branch ? branch.name : "Branch Dashboard"}</h1>
        <p className='text-sm text-mute-foreground'>
          {new Date().toLocaleDateString("en-US", {
          weekday:"long",
          year:"numeric",
          month:"long",
          day:"numeric",
        })}
        </p>
      </div>
      <div className='flex items-center gap-4'>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
            3
          </Badge>
        </Button>
         <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="h-5 w-5 text-primary" />
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium text-foreground">{userProfile?.name || "Branch Manager"}</p>
            <p className="text-xs text-muted-foreground">{userProfile?.email || "manager@example.com"}</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default BranchTopsidbar