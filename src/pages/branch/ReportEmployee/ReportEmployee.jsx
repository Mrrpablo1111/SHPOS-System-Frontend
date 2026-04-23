import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BarChart2, Calendar, Download, FileText, TrendingUp, Users } from 'lucide-react'
import React from 'react'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import SalesChart from '../Dashboard/SalesChart'
import PaymentBreakdown from '../Dashboard/PaymentBreakdown'
import PaymentMethodChart from './PaymentMethodChart'
import TopProduct from '../Dashboard/TopProduct'
import CashierPerformance from '../Dashboard/CashierPerformance'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

// fake data
const branchAnalitics = {
  dailySales: [
    { date: "2026-04-14", total: 120 },
    { date: "2026-04-15", total: 185 },
    { date: "2026-04-16", total: 240 },
    { date: "2026-04-17", total: 310 },
    { date: "2026-04-18", total: 275 },
    { date: "2026-04-19", total: 360 },
    { date: "2026-04-20", total: 420 },
  ],

  paymentBreakdown: [
    { method: "Cash", amount: 950 },
    { method: "ABA", amount: 720 },
    { method: "Wing", amount: 430 },
    { method: "Credit Card", amount: 210 },
  ],

  categorySales: [
    { category: "Keycaps", sales: 540 },
    { category: "Custom Keyboards", sales: 320 },
    { category: "Switches", sales: 260 },
    { category: "Accessories", sales: 180 },
  ],

  topCashiers: [
    {
      id: "EMP-001",
      name: "Sok Dara",
      totalSales: 820,
      ordersHandled: 45,
    },
    {
      id: "EMP-002",
      name: "Chan Vannak",
      totalSales: 670,
      ordersHandled: 38,
    },
    {
      id: "EMP-003",
      name: "Lina Kim",
      totalSales: 540,
      ordersHandled: 30,
    },
  ],
}
const ReportEmployee = () => {
  const salesConfig = {
    sales: {
      label: "Sales",
      color: "#4f46e5"

    }
  }

  const paymentConfig = branchAnalitics.paymentBreakdown.reduce((acc, item, idx) => {
    acc[item.method] = {
      label: item.method,
      color: COLORS[idx % COLORS.length]
    };
    return acc;
  }, {}) || {};

  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center'>
        <h1 className='font-bold text-3xl tracking-tight'>Reports & Analitics</h1>
        <div>
          <Button variant='outline' size='sm'>
            <Calendar className='w-4 h-4 mr-1' />
            Today
          </Button>
          <Button variant='outline' size='sm'>
            <Download className='w-4 h-4 mr-1' />
            Export All
          </Button>
        </div>
      </div>
      <Tabs defaultValue="overview" className={"space-y-6"}>
        <TabsList>
          <TabsTrigger value="overview" className={"flex items-center gap-2"}>
            <BarChart2 />
            Overview
          </TabsTrigger>
          <TabsTrigger value="sales" className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Sales
          </TabsTrigger>
          <TabsTrigger value="products" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Products
          </TabsTrigger>
          <TabsTrigger value="cashier" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Cashier Performance
          </TabsTrigger>
        </TabsList>

        {/* Overview */}
        <TabsContent value="overview">
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <SalesChart />
            </div>
            <div>
              <PaymentMethodChart/>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="sales">
          <SalesChart/>
        </TabsContent>

        <TabsContent value="products">
          <TopProduct/>
        </TabsContent>

        <TabsContent value="cashier">
          <CashierPerformance/>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default ReportEmployee