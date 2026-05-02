import { DollarSign, Package, ShoppingBag, Users } from 'lucide-react'
import React, { useState } from 'react'

import { Card, CardContent } from '@/components/ui/card'



const dashboardOverview = {
    totalStore: 13,
    pendingStore: 8,
    activeStore:11,
    blockedStore: 15,
}
const AdminDashboardOverview= () => {
   const {loading} = useState(false);
    const kpis = dashboardOverview ? [
        {
            title: "Today's Sales",
            value: `${dashboardOverview.totalStore?.toLocaleString() ?? "-"}`,
            icon: <DollarSign className='w-8 h-8 text-primary' />,
            description: "from last month"

        },
        {
            title: "Orders Today",
            value: dashboardOverview. pendingStore?? "-",
            icon: <ShoppingBag className='w-8 h-8 text-primary'/>,
            description: "currently operational"
  
        },
        {
          title: "Active Cashiers",
          value: dashboardOverview.activeStore ?? "-",
          icon: <Users className="w-8 h-8 text-primary" />,
          description: "suspended accounts"
       
        },
        {
          title: "Low Stock Items",
          value: dashboardOverview.blockedStore ?? "-",
          icon: <Package className="w-8 h-8 text-primary" />,
          description: "awaiting approvel"
        
        },  
    ] : [];
    return (
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
            {kpis.length > 0 ? kpis.map((k, index) => (
                <Card key={index}>
                    <CardContent className={"p-6"}>
                        <div className='flex items-center justify-between'>
                            <div>
                                <p className='text-sm font-medium text-gray-500'>{k.title}</p>
                                <h3 className='text-2xl font-bold mt-1'>{k.value}</h3>
                                <p className={"text-xs text-muted-foreground"}>
                                    {k.description}</p>
                            </div>
                            <div className='p-3 bg-primary/10 rounded-full'>
                                {k.icon}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )) : (
                <div className='col-span-4 text-center text-gray-400'>
                    {loading ? "Loading kpi..." : "No data available"}
                </div>
            )}

        </div>
    )
}

export default AdminDashboardOverview;