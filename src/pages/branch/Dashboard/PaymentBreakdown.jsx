import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getPaymentIcon } from '@/pages/cashier/ShiftReport/utils/getPaymentIcon';
import React from 'react'

const paymentBreakdown = [
  { type: "Cash", totalAmount: 2500, percentage: 40, transactionCount: 25 },
  { type: "Credit Card", totalAmount: 1800, percentage: 28, transactionCount: 18 },
  { type: "ABA Pay", totalAmount: 1200, percentage: 19, transactionCount: 12 },
  { type: "Wing", totalAmount: 800, percentage: 13, transactionCount: 8 },
];

// 🎨 Color map
const getColor = (type) => {
  switch (type) {
    case "Cash": return "bg-green-500";
    case "Credit Card": return "bg-blue-500";
    case "ABA Pay": return "bg-purple-500";
    case "Wing": return "bg-orange-500";
    default: return "bg-primary";
  }
};

const PaymentBreakdown = () => {
  const loading = false;

  return (
    <Card className="shadow-md border rounded-2xl">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">
          Payment Breakdown
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="space-y-5">
          {paymentBreakdown.length > 0 ? (
            paymentBreakdown.map((payment, index) => (
              <div
                key={index}
                className="flex items-center justify-between hover:bg-muted/40 p-2 rounded-lg transition"
              >
                {/* LEFT */}
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-muted rounded-lg">
                    {getPaymentIcon(payment.type)}
                  </div>
                  <div>
                    <p className="font-medium">{payment.type}</p>
                    <p className="text-xs text-muted-foreground">
                      {payment.transactionCount} transactions
                    </p>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="flex flex-col items-end gap-1 w-40">
                  <p className="font-semibold text-sm">
                    ${payment.totalAmount.toLocaleString()}
                  </p>

                  {/* Progress bar */}
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${getColor(payment.type)} transition-all`}
                      style={{ width: `${payment.percentage}%` }}
                    />
                  </div>

                  <p className="text-xs text-muted-foreground">
                    {payment.percentage}%
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-400">
              {loading ? "Loading..." : "No data available"}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentBreakdown;