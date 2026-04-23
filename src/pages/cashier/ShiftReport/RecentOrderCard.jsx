import { List } from 'lucide-react'
import { formatDate } from '@/data/formatDate'
import { getPaymentIcon } from './utils/getPaymentIcon'
import { getPaymentMethodLabel } from './utils/getPaymentMethodLabel'
import { Card, CardContent } from '@/components/ui/card'

const shiftData = {
    recentOrders: [
        { id: "ORD-009", createdAt: "2026-03-25T15:48:00", paymentType: "CASH", totalAmount: 340.00 },
        { id: "ORD-008", createdAt: "2026-03-25T15:21:00", paymentType: "CARD", totalAmount: 220.00 },
        { id: "ORD-007", createdAt: "2026-03-25T14:55:00", paymentType: "QR", totalAmount: 180.00 },
        { id: "ORD-006", createdAt: "2026-03-25T14:10:00", paymentType: "CARD", totalAmount: 450.00 },
        { id: "ORD-005", createdAt: "2026-03-25T13:33:00", paymentType: "CASH", totalAmount: 120.00 },
        { id: "ORD-004", createdAt: "2026-03-25T12:58:00", paymentType: "QR", totalAmount: 275.00 },
    ],
}
const paymentTextColor = {
  CASH: '#3B6D11',
  CARD: '#0C447C',
  QR:   '#3C3489',
}
const paymentBg = {
    CASH: '#EAF3DE',
    CARD: '#E6F1FB',
    QR: '#EEEDFE',
}

const RecentOrdersCard = () => {
    const orders = shiftData.recentOrders ?? []
    const total = orders.reduce((sum, o) => sum + (o.totalAmount ?? 0), 0)

    return (
        <Card className="overflow-hidden">
            <CardContent className="p-6">

                {/* Header */}
                <div className="px-4 md:px-5 py-4 border-b border-border flex justify-between items-center">
                    <div>
                        <p className="text-xl uppercase font-medium mb-2">Recent orders</p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                            {orders.length} orders · this shift
                        </p>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-blue-50 text-blue-800 font-medium flex-shrink-0">
                        Latest first
                    </span>
                </div>

                {/* Column headers — hidden on mobile */}
                <div className="hidden md:grid grid-cols-[1fr_80px_100px_90px] px-5 py-2 border-b border-border">
                    {['Order', 'Time', 'Payment', 'Amount'].map((h, i) => (
                        <span
                            key={h}
                            className={`text-xs text-muted-foreground font-medium uppercase tracking-wide ${i === 3 ? 'text-right' : ''
                                }`}
                        >
                            {h}
                        </span>
                    ))}
                </div>

                {/* Rows */}
                <div className="py-1">
                    {orders.map((order, i) => (
                        <div
                            key={order.id}
                            className={`px-4 md:px-5 py-3 ${i < orders.length - 1 ? 'border-b border-border' : ''
                                }`}
                        >
                            {/* Mobile layout */}
                            <div className="flex items-center justify-between md:hidden">
                                <div className="flex items-center gap-2">
                                    <div
                                        className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                                        style={{ background: paymentBg[order.paymentType] ?? '#F1EFE8' }}
                                    >
                                        {getPaymentIcon(order.paymentType)}
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">#{order.id}</p>
                                        {/* Mobile sub-line */}
                                        <p className="text-xs text-muted-foreground">
                                            {getPaymentMethodLabel(order.paymentType)} ·{' '}
                                            {new Date(order.createdAt).toLocaleTimeString('en-US', {
                                                hour: '2-digit',
                                                minute: '2-digit',
                                                hour12: true,
                                            })}
                                        </p>
                                    </div>
                                </div>
                                <span className="text-sm font-medium">${order.totalAmount?.toFixed(2)}</span>
                            </div>

                            {/* Desktop layout */}
                            <div className="hidden md:grid grid-cols-[1fr_80px_100px_90px] items-center">
                                <span className="text-sm font-medium">#{order.id}</span>
                                <span className="text-xs text-muted-foreground tabular-nums">
                                    {new Date(order.createdAt).toLocaleTimeString('en-US', {
                                        hour: '2-digit',
                                        minute: '2-digit',
                                        hour12: true,
                                    })}
                                </span>

                                {/* Payment cell — desktop */}
                                <div className="flex items-center gap-1.5">
                                    {order.paymentType ? (
                                        <span
                                            className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full"
                                            style={{
                                                background: paymentBg[order.paymentType] ?? '#F1EFE8',
                                                color: paymentTextColor[order.paymentType] ?? '#444441',
                                            }}
                                        >
                                            {getPaymentIcon(order.paymentType)}
                                            {getPaymentMethodLabel(order.paymentType)}
                                        </span>
                                    ) : (
                                        <span className="text-xs text-muted-foreground">Unknown</span>
                                    )}
                                </div>
                                <span className="text-sm font-medium text-right">
                                    ${order.totalAmount?.toFixed(2)}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="border-t border-border px-4 md:px-5 py-3 flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">{orders.length} orders shown</span>
                    <span className="text-sm font-medium">${total.toFixed(2)} total</span>
                </div>

            </CardContent>
        </Card>
    )
}

export default RecentOrdersCard