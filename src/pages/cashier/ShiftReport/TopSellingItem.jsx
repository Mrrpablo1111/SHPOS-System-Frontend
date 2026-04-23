import { Card, CardContent } from '@/components/ui/card';
import { List } from 'lucide-react';
import React from 'react'

const shiftData = {
  topSellingItems:[
    {
      id: "PRD-01",
      name: "Romdul Rice",
      sellingPrince: 40.00,
      quantity: 18,
    },
    {
      id: "PRD-02",
      name: "Pka Knhei Rice",
      sellingPrince: 60.00,
      quantity: 22,
    },
    {
      id: "PRD-03",
      name: "NeangKhun Rice",
      sellingPrince: 70.00,
      quantity: 56,
    },
    {
      id: "PRD-04",
      name: "Chom Pey Rice",
      sellingPrince: 40.00,
      quantity: 15,
    }
  ]
}
const TopSellingItem = () => {

  const items  = shiftData.topSellingItems ?? [];
  const maxQty = Math.max(...items.map(i => i.quantity), 1);
  const totalUnits = items.reduce((sum, i ) => sum + i.quantity, 0)
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">

        <div className="px-5 py-4 border-b border-border flex justify-between items-center">
          <div>
            <p className="text-xl uppercase font-medium mb-2">Top selling items</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              {items.length} products · this shift
            </p>
          </div>
          <div className="bg-muted rounded-lg px-2.5 py-1.5 flex items-center gap-1.5">
            <List className="w-3 h-3 text-muted-foreground" />
            <span className="text-xs text-muted-foreground font-medium">Quantity</span>
          </div>
        </div>

        <div className="py-2">
          {items.map((item, i) => {
            const pct = ((item.quantity / maxQty) * 100).toFixed(0)
            return (
              <div key={item.id}>
                <div className="flex items-center gap-3.5 px-5 py-2.5">
                  <span
                    className="text-xs font-medium w-4 text-center flex-shrink-0"
                  >
                    {i + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-medium truncate">{item.name}</span>
                      <span className="text-sm font-medium ml-2 flex-shrink-0">
                        ${item.topSellingItems?.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1 bg-muted rounded-full">
                        <div
                          className="h-1 rounded-full"
                          style={{
                            width: `${pct}%`,
                            background: i === 0 ? '#89cff0' : i === 1 ? '#a1caf1' : '#bcd4e6'
                          }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground flex-shrink-0">
                        {item.quantity} sold
                      </span>
                    </div>
                  </div>
                </div>
                {i < items.length - 1 && (
                  <div className="h-px bg-border mx-5" />
                )}
              </div>
            )
          })}
        </div>

        <div className="border-t border-border px-5 py-3 flex justify-between items-center">
          <span className="text-xs text-muted-foreground">Total units sold</span>
          <span className="text-sm font-medium">{totalUnits} units</span>
        </div>

      </CardContent>
    </Card>
  )
}

export default TopSellingItem