import { Card, CardContent } from '@/components/ui/card'
import { formatDate } from '@/data/formatDate';
import React from 'react'


const shiftData = {
  cashier: {
    fullName: "Seng Dara"
  },
  shiftStart: "2026-03-25T08:00:00",
  shiftEnd: "2026-03-25T16:15:00"
};

const ShiftInfo = () => {
  const initials = shiftData.cashier.fullName.split(' ').map(n => n[0]).join('')

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">

        <div className="px-5 py-4 border-b border-border">
          <div className="mb-4 ">
            <p className="text-xl uppercase font-medium mb-2 border-b border-border py-6">
              Shift information
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-purple-50 flex items-center justify-center text-xs font-medium text-purple-800 flex-shrink-0">
                  {initials}
                </div>
                <div>
                  <p className="text-sm font-medium">{shiftData.cashier.fullName}</p>
                  <p className="text-xs text-muted-foreground">Cashier · Mar 25, 2026</p>
                </div>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-green-50 text-green-800 font-medium flex-shrink-0">
                Closed
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              { label: 'Duration', value: '8h 15m' },
              { label: 'Start', value: '08:00' },
              { label: 'End', value: '16:15' },
            ].map(stat => (
              <div key={stat.label} className="bg-muted rounded-lg px-3 py-2.5">
                <p className="text-base font-medium">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="px-5 py-4">
          <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium mb-3">
            Timeline
          </p>
          <div className="flex gap-3">
            <div className="flex flex-col items-center flex-shrink-0">
              <div className="w-2 h-2 rounded-full bg-green-600 mt-1" />
              <div className="w-px flex-1 bg-border my-1" />
              <div className="w-2 h-2 rounded-full bg-red-700" />
            </div>
            <div className="flex-1 flex flex-col gap-1.5">
              <div className="bg-muted rounded-lg px-3 py-2.5">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Shift started</span>
                  <span className="text-sm font-medium text-green-700">08:00 AM</span>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">Opening balance confirmed</p>
              </div>
              <div className="bg-muted rounded-lg px-3 py-2.5">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Shift ended</span>
                  <span className="text-sm font-medium text-red-700">04:15 PM</span>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">Closing balance confirmed</p>
              </div>
            </div>
          </div>
        </div>



      </CardContent>
    </Card>
  )
}

export default ShiftInfo