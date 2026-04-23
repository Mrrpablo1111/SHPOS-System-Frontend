import { Card, CardContent } from '@/components/ui/card';
import { DollarSign, ShoppingCart, Store, Users } from 'lucide-react';
import React from 'react'

const DashboardState = () => {
    const loading = false;
    const states = [
    { 
      title: "Total Sales", 
      value: 45, 
      icon: <DollarSign className="w-8 h-8 text-emerald-500" />, 
      change: 50,
      loading: loading
    },
    { 
      title: "Total Branches", 
      value: 15, 
      icon: <Store className="w-8 h-8 text-emerald-500" />, 
      change: -4,
      loading: loading
    },
    { 
      title: "Total Products", 
      value: 8939,
      icon: <ShoppingCart className="w-8 h-8 text-emerald-500" />, 
      change: 40,
      loading: loading
    },
    { 
      title: "Total Employees", 
      value: 300, 
      icon: <Users className="w-8 h-8 text-emerald-500" />, 
      change: 30,
      loading: loading
    },
  ];
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
        {states.map((state,index)=><Card>
            <CardContent>
                <div className='flex items-center justify-between'>
                   <div className='space-y-4'>
                     <p className='text-sm font-medium text-gray-500'>{state.title}</p>
                    <h3 className='font-bold text-lg'>{state.value}</h3>
                    <p className={`text-xs font-medium mt-1 ${state.change > 0 ? 'text-emerald-500':'text-red-500'}`}>{state.change}</p>
                   </div>
                    <div className='p-3 bg-emerald-50 rounded-full'>
                        {state.icon}
                    </div>
                </div>
            </CardContent>
        </Card>)}
    </div>
  )
}

export default DashboardState