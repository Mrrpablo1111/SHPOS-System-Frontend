import { CheckCircle, RefreshCcw, Info } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const shiftData = {
  refunds: [
    {
      id: "001",
      orderId: "007",
      reason: "Wrong item delivered",
      amount: 45.00,
    },
    {
      id: "002",
      orderId: "005",
      reason: "Customer complaint",
      amount: 75.25,
    },
    {
      id: "003",
      orderId: "006",
      reason: "Customer complaint",
      amount: 75.25,
    },
    
  ],
}
const RefundsCard = () => {
  const refunds = shiftData.refunds ?? []
  const total = refunds.reduce((sum, r) => sum + (r.amount ?? 0), 0)
  const hasRefunds = refunds.length > 0

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">

        <div className="px-5 py-4 border-b border-border flex justify-between items-start">
          <div>
            <p className="text-xl uppercase font-medium mb-2">Refunds processed</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              {hasRefunds ? `${refunds.length} refunds this shift` : 'No refunds this shift'}
            </p>
          </div>
          {hasRefunds ? (
            <div className="text-right">
              <p className="text-sm font-medium text-red-700">−${total.toFixed(2)}</p>
              <p className="text-xs text-muted-foreground mt-0.5">total refunded</p>
            </div>
          ) : (
            <span className="text-xs px-2.5 py-1 rounded-full bg-green-50 text-green-800 font-medium">
              All clear
            </span>
          )}
        </div>

        {hasRefunds ? (
          <>
            <div className="py-1.5">
              {refunds.map((refund, i) => (
                <div
                  key={refund.id}
                  className={`px-5 py-3 ${i < refunds.length - 1 ? 'border-b border-border' : ''}`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                        <RefreshCcw className="w-3.5 h-3.5 text-red-700" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">RFD-{refund.id}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          Linked to ORD-{refund.orderId}
                        </p>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-red-700">
                      −${refund.amount?.toFixed(2)}
                    </span>
                  </div>
                  <div className="bg-muted rounded-lg px-3 py-2 flex items-center gap-1.5">
                    <Info className="w-3 h-3 text-muted-foreground flex-shrink-0" />
                    <span className="text-xs text-muted-foreground">{refund.reason}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border px-5 py-3 flex justify-between items-center">
              <span className="text-xs text-muted-foreground">{refunds.length} refunds shown</span>
              
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center gap-2 py-11">
            <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-700" strokeWidth={1.5} />
            </div>
            <p className="text-sm font-medium">No refunds this shift</p>
            <p className="text-xs text-muted-foreground">All orders completed without issues</p>
          </div>
        )}

      </CardContent>
    </Card>
  )
}

export default RefundsCard