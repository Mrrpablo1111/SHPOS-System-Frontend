import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
import { getPaymentIcon } from './utils/getPaymentIcon';

const shiftData = {
  totalSales: 1250.75,
  paymentSummaries: [
    {
      type: 'CASH',
      totalAmount: 450.25,
      transactionCount: 12,
    },
    {
      type: 'CARD',
      totalAmount: 520.50,
      transactionCount: 15,
    },
    {
      type: 'QR',
      totalAmount: 180.00,
      transactionCount: 6,
    },

  ],
};
const PaymentSummaryCard = () => {
  const iconStyle = {
    cash: { bg: '#EAF3DE', stroke: '#3B6D11', bar: '#639922' },
    card: { bg: '#E6F1FB', stroke: '#185FA5', bar: '#378ADD' },
    qr: { bg: '#EEEDFE', stroke: '#534AB7', bar: '#7F77DD' }
  };

  return (
    <Card className="overflow-hidden">
      <CardContent className={"p-6"}>
        <div className="px-5 py-4 border-b border-border flex justify-between">
          <div>
            <p className="text-xl uppercase font-medium mb-2">
              Payment summary
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              {shiftData.paymentSummaries.reduce((a, p) => a + p.transactionCount, 0)} transactions
            </p>
          </div>
          <p className="text-3xl font-medium">${shiftData.totalSales.toFixed(2)}</p>

        </div>

        <div className='px-5 py-4'>
          {shiftData.paymentSummaries.map((payment, i) => {
            const pct = ((payment.totalAmount / shiftData.totalSales) * 100).toFixed(1);
            return (
              <div key={payment.type}
                className={`flex items-center gap-3 py-4 ${i < shiftData.paymentSummaries.length - 1 ? 'border-b border-border' : ''}`}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: iconStyle[payment.type.toLowerCase()]?.bg }}>
                  {getPaymentIcon(payment.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-sm font-medium capitalize">{payment.type.toLowerCase()}</span>
                    <span className="text-sm font-medium">${payment.totalAmount.toFixed(2)}</span>
                  </div>
                  <div className="h-1 rounded-full bg-muted mb-1.5">
                    <div className="h-1 rounded-full transition-all"
                      style={{ width: `${pct}%`, background: iconStyle[payment.type.toLowerCase()]?.bar }} />
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-muted-foreground">{payment.transactionCount} transactions</span>
                    <span className="text-xs text-muted-foreground">{pct}%</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentSummaryCard