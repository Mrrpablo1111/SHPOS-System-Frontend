import { DollarSign, Package, ShoppingBag, Users } from 'lucide-react'
import React, { useState } from 'react'

import { Card, CardContent } from '@/components/ui/card'
import { getChangeType } from './getChangeType'


const todayOverview = {
    totalSales: 6789,
    saleGrowth: 34,
    ordersToday: 39,
    orderGrowth: 40,
    activeCashiers: 12,
    cashierGrowth: 30,
    lowStockItems: 12,
    lowStockGrowth: 34

}
const TodayOverview = () => {
   const {loading} = useState(false);
    const kpis = todayOverview ? [
        {
            title: "Today's Sales",
            value: `${todayOverview.totalSales?.toLocaleString() ?? "-"}`,
            icon: <DollarSign className='w-8 h-8 text-primary' />,
            change: todayOverview.saleGrowth !== undefined ? `${todayOverview.saleGrowth > 0 ? "+" : ""} ${todayOverview.saleGrowth.toFixed(2)}%` : "-",
            changeType: getChangeType(todayOverview.saleGrowth)
        },
        {
            title: "Orders Today",
            value: todayOverview.ordersToday ?? "-",
            icon: <ShoppingBag className='w-8 h-8 text-primary'/>,
            change: todayOverview.orderGrowth !== undefined ? `${todayOverview.orderGrowth > 0 ? "+": ""} ${todayOverview.orderGrowth.toFixed(2)}%`: "-",
            changeType: getChangeType(todayOverview.orderGrowth)
        },
        {
          title: "Active Cashiers",
          value: todayOverview.activeCashiers ?? "-",
          icon: <Users className="w-8 h-8 text-primary" />,
          change: todayOverview.cashierGrowth !== undefined ? `${todayOverview.cashierGrowth > 0 ? "+" : ""}${todayOverview.cashierGrowth.toFixed(2)}%` : "-",
          changeType: getChangeType(todayOverview.cashierGrowth)
        },
        {
          title: "Low Stock Items",
          value: todayOverview.lowStockItems ?? "-",
          icon: <Package className="w-8 h-8 text-primary" />,
          change: todayOverview.lowStockGrowth !== undefined ? `${todayOverview.lowStockGrowth > 0 ? "+" : ""}${todayOverview.lowStockGrowth.toFixed(2)}%` : "-",
          changeType: getChangeType(todayOverview.lowStockGrowth)
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
                                <p className={`text-xs font-medium mt-1 
                                ${k.changeType === 'positive' ? 'text-emerald-500' :
                                    k.changeType === 'negative' ? 'text-red-500' : 'text-gray-500'}`}>
                                    {k.change}</p>
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

export default TodayOverview