import { Card, CardContent } from '@/components/ui/card';
import { DollarSignIcon, MonitorIcon, RefreshCcwIcon } from 'lucide-react';
import React from 'react'
 

const shiftData = {
  totalOrders: 42,
  totalSales: 1580.5,
  totalRefunds: 120.25,
  netSales: 1460.25
};

const SaleSummaryCard = () => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">

        <div className="px-5 py-4 border-b border-border flex justify-between">
          <div>
            <p className="text-xl uppercase font-medium mb-2">
            Sales summary
          </p>
          <p className="text-xs text-muted-foreground mt-1">{shiftData.totalOrders} orders this shift</p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <p className="text-2xl font-medium">${shiftData.netSales.toFixed(2)}</p>
            <span className="text-xs px-2 py-0.5 rounded-full bg-green-50 text-green-800 font-medium">
              Net sales
            </span>
          </div>
          
        </div>

        <div className='px-5 py-4'>
          {[
            {
              label: 'Total sales',
              value: `$${shiftData.totalSales.toFixed(2)}`,
              iconBg: 'bg-blue-50 w-9 h-9',
              icon: <DollarSignIcon className="w-4 h-4 text-blue-700" />,
            },
            {
              label: 'Refunds',
              value: `-$${shiftData.totalRefunds.toFixed(2)}`,
              iconBg: 'bg-red-50 w-9 h-9',
              icon: <RefreshCcwIcon className="w-3.5 h-3.5 text-red-700" />,
              valueClass: 'text-red-700',
            },
            {
              label: 'Total orders',
              value: shiftData.totalOrders,
              iconBg: 'bg-muted w-9 h-9',
              icon: <MonitorIcon className="w-3.5 h-3.5 text-muted-foreground" />,
            },
          ].map((row, i, arr) => (
            <div key={row.label}
              className={`flex items-center justify-between  py-3 ${i < arr.length - 1 ? 'border-b border-border' : ''}`}>
              <div className="flex items-center gap-2.5">
                <div className={`w-7 h-7 rounded-full ${row.iconBg} flex items-center justify-center`}>
                  {row.icon}
                </div>
                <span className="text-sm text-muted-foreground">{row.label}</span>
              </div>
              <span className={`text-sm font-medium ${row.valueClass ?? ''}`}>{row.value}</span>
            </div>
          ))}
        </div>

        <div className="mx-5 mb-4 bg-muted rounded-lg px-4 py-3 flex justify-between items-center">
          <span className="text-sm font-medium">Net sales</span>
          <span className="text-sm font-medium">${shiftData.netSales.toFixed(2)}</span>
        </div>

      </CardContent>
    </Card>
  );
};

export default SaleSummaryCard