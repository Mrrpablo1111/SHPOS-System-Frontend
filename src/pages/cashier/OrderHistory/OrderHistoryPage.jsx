import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { CalendarIcon, Loader2, Loader2Icon, RefreshCcw, SearchIcon } from 'lucide-react'
import React, { useState } from 'react'
import OrderTable from './OrderTable'

const fakeOrders = [
  {
    id: "ORD-001",
    createdAt: "2026-04-05T08:12:00",
    paymentType: "CASH",
    totalAmount: 125.50,
    customer: "Walk-in",
  },
  {
    id: "ORD-002",
    createdAt: "2026-04-05T08:45:00",
    paymentType: "CARD",
    totalAmount: 340.00,
    customer: "Walk-in",
  },
  {
    id: "ORD-003",
    createdAt: "2026-04-05T09:10:00",
    paymentType: "QR",
    totalAmount: 87.75,
    customer: "Walk-in",
  },
  {
    id: "ORD-004",
    createdAt: "2026-04-05T09:33:00",
    paymentType: "CASH",
    totalAmount: 210.00,
    customer: "Walk-in",
  },
  {
    id: "ORD-005",
    createdAt: "2026-04-05T10:05:00",
    paymentType: "CARD",
    totalAmount: 450.00,
    customer: "Walk-in",
  },
  {
    id: "ORD-006",
    createdAt: "2026-04-05T10:28:00",
    paymentType: "QR",
    totalAmount: 175.25,
    customer: "Walk-in",
  },
  {
    id: "ORD-007",
    createdAt: "2026-04-05T11:00:00",
    paymentType: "CASH",
    totalAmount: 95.00,
    customer: "Walk-in",
  },
  {
    id: "ORD-008",
    createdAt: "2026-04-05T11:42:00",
    paymentType: "CARD",
    totalAmount: 520.50,
    customer: "Walk-in",
  },
  {
    id: "ORD-009",
    createdAt: "2026-04-05T12:15:00",
    paymentType: "QR",
    totalAmount: 180.00,
    customer: "Walk-in",
  },
  {
    id: "ORD-010",
    createdAt: "2026-04-05T12:50:00",
    paymentType: "CASH",
    totalAmount: 65.00,
    customer: "Walk-in",
  },
  {
    id: "ORD-011",
    createdAt: "2026-04-05T13:20:00",
    paymentType: "CARD",
    totalAmount: 310.75,
    customer: "Walk-in",
  },
  {
    id: "ORD-012",
    createdAt: "2026-04-05T13:55:00",
    paymentType: "QR",
    totalAmount: 140.00,
    customer: "Walk-in",
  },
]


const OrderHistoryPage = () => {
  const orders = fakeOrders;
  const loading = false;
  const errror = null;
  const {searchQuery, setSearchQuery} = useState('')
  const {dateFilter, setDateFilter} = useState('today')
  const [customDateRange, setCustomeDateRange] = useState({start:"", end:"",});

  //current date for filter
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const weekStart = new Date(today);
  weekStart.setDate(today.getDate() - today.getDay());





  return (
    <div className='h-full flex flex-col'>
      <div className='p-4 bg-card border-b flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Order History</h1>
        <Button variant='outline'><RefreshCcw className={'h-4 w-4'}/> Refresh</Button>
      </div>
      <div className='p-4 border-b'>
        <div className='flex flex-wrap gap-4'>
          <div className='flex-1 mim-w-[300px]'>
            <div className='relative'>
              <SearchIcon className='absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground'/>
              <Input type="text" placeholder="Search By order ID or Customer..." className={"pl-10"} value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>
            </div>
          </div>
          <div className='flex gap-2'>
            <Button variant={dateFilter === "today" ? "default" : "outline"} onClick={()=> setDateFilter("today")}>Today</Button>
            <Button variant={dateFilter === "week" ? "default": "outline"} onClick={()=> setDateFilter("week")}>This Week</Button>
            <Button variant={dateFilter === "month" ? "default": "outline"} onClick={()=> setDateFilter("month")}>This Month</Button>
            <Button variant={dateFilter === "custom" ? "default": "outline"} onClick={()=> setDateFilter("custom")}><CalendarIcon className='h-4 w-4 mr-2'/> Custom</Button>
          </div>
        </div>
        
        {dateFilter ==="custom" &&(
          <div className='mt-4 flex gap-4 items-end'>
              <div className='flex-1'>
                <Label htmlFor="start-date">Start Date</Label>
                <Input id="start-date" type="date" value={customDateRange.start} onChange={(e)=>setCustomeDateRange({...customDateRange, start:e.target.value})}/>
              </div>
              <div className='flex-1'>
                <Label htmlFor="end-date">End Date</Label>\
                <Input id="end-date" type="date" value={customDateRange.end} onChange={(e)=>setCustomeDateRange({...customDateRange, end:e.target.value})}/>
              </div>
              <Button variant='outline' onClick={()=>setCustomeDateRange({start:"", end:""})}>Clear</Button>
          </div>
        )}
      </div>
      <div>
          {loading?(
            <div className='flex flex-col items-center justify-center h-full text-center text-muted-foreground'>
              <Loader2Icon className='animate-spin h-16 w-16 text-primary'/>
              <p className='mt-4'>Loading...</p>
            </div>
          ): orders.length>0 ?(
            <OrderTable orders={orders}/>
          ):(
            <div></div>
          )}
      </div>
    </div>
  )
}

export default OrderHistoryPage