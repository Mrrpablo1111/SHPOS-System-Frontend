import { EyeIcon, PrinterIcon, RotateCcwIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getPaymentIcon } from '../ShiftReport/utils/getPaymentIcon'
import { getPaymentMethodLabel } from '../ShiftReport/utils/getPaymentMethodLabel'

const fakeOrders = [
  {
    id: "ORD-001",
    createdAt: "2026-04-05T08:12:00",
    paymentType: "CASH",
    totalAmount: 125.50,
    status: "COMPLETE",
    customer: { fullName: null },
  },
  {
    id: "ORD-002",
    createdAt: "2026-04-05T08:45:00",
    paymentType: "CARD",
    totalAmount: 340.00,
    status: "COMPLETE",
    customer: { fullName: "John Smith" },
  },
  {
    id: "ORD-003",
    createdAt: "2026-04-05T09:10:00",
    paymentType: "QR",
    totalAmount: 87.75,
    status: "REFUNDED",
    customer: { fullName: "Sara Rith" },
  },
  {
    id: "ORD-004",
    createdAt: "2026-04-05T09:33:00",
    paymentType: "CASH",
    totalAmount: 210.00,
    status: "COMPLETE",
    customer: { fullName: null },
  },
  {
    id: "ORD-005",
    createdAt: "2026-04-05T10:05:00",
    paymentType: "CARD",
    totalAmount: 450.00,
    status: "PENDING",
    customer: { fullName: "Dara Kim" },
  },
]

const paymentStyle = {
  CASH: { bg: '#EAF3DE', color: '#3B6D11' },
  CARD: { bg: '#E6F1FB', color: '#0C447C' },
  QR:   { bg: '#EEEDFE', color: '#3C3489' },
}

const statusStyle = {
  COMPLETE: { bg: '#E6F1FB', color: '#0C447C', label: 'Complete' },
  REFUNDED: { bg: '#FCEBEB', color: '#791F1F', label: 'Refunded' },
  PENDING:  { bg: '#FAEEDA', color: '#633806', label: 'Pending'  },
}

const avatarColors = [
  { bg: '#F1EFE8', color: '#444441' },
  { bg: '#E6F1FB', color: '#0C447C' },
  { bg: '#EEEDFE', color: '#3C3489' },
  { bg: '#EAF3DE', color: '#3B6D11' },
  { bg: '#FAEEDA', color: '#633806' },
]

const getInitials = (name) => {
  if (!name) return 'W'
  return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
}

const getAvatarStyle = (name, index) =>
  avatarColors[index % avatarColors.length]

const OrderTable = ({ handleViewOrder, handlePrintInvoice, handleInitiateReturn }) => {
  const orders = fakeOrders

  return (
    <div className="bg-background border border-border rounded-xl overflow-hidden">

      {/* Desktop column headers — hidden on mobile */}
      <div className="hidden md:grid grid-cols-[110px_130px_1fr_100px_120px_100px_110px] px-5 py-2.5 border-b border-border">
  {['Order ID', 'Date / Time', 'Customer', 'Amount', 'Payment', 'Status', 'Actions'].map((h, i) => (
    <span
      key={h}
      className={`text-xs text-muted-foreground font-medium uppercase tracking-wide ${
        i === 3 ? 'text-right pr-3' : ''
      } ${
        i === 4 ? 'pl-3' : ''
      } ${
        i === 6 ? 'text-right' : ''
      }`}
    >
      {h}
    </span>
  ))}
</div>

      {orders.map((order, i) => {
        const name = order.customer?.fullName
        const initials = getInitials(name)
        const avatar = getAvatarStyle(name, i)
        const pay = paymentStyle[order.paymentType] ?? { bg: '#F1EFE8', color: '#444441' }
        const stat = statusStyle[order.status] ?? { bg: '#F1EFE8', color: '#444441', label: order.status }
        const time = new Date(order.createdAt).toLocaleTimeString('en-US', {
          hour: '2-digit', minute: '2-digit', hour12: true,
        })
        const date = new Date(order.createdAt).toLocaleDateString('en-US', {
          month: 'short', day: 'numeric', year: 'numeric',
        })

        return (
          <div
            key={order.id}
            className={`${i < orders.length - 1 ? 'border-b border-border' : ''}`}
          >

            {/* Mobile layout */}
            <div className="md:hidden px-4 py-3">
              <div className="flex items-start justify-between mb-2.5">
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0"
                    style={{ background: avatar.bg, color: avatar.color }}
                  >
                    {initials}
                  </div>
                  <div>
                    <p className="text-sm font-medium">#{order.id}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {name || 'Walk-in'} · {date} {time}
                    </p>
                  </div>
                </div>
                <span className="text-sm font-medium">
                  ${order.totalAmount?.toFixed(2) ?? '0.00'}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full"
                    style={{ background: pay.bg, color: pay.color }}
                  >
                    {getPaymentIcon(order.paymentType)}
                    {getPaymentMethodLabel(order.paymentType)}
                  </span>
                  <span
                    className="text-xs font-medium px-2 py-0.5 rounded-full"
                    style={{ background: stat.bg, color: stat.color }}
                  >
                    {stat.label}
                  </span>
                </div>
                <div className="flex gap-1">
                  <Button variant="outline" size="icon" className="w-7 h-7"
                    onClick={() => handleViewOrder(order)}>
                    <EyeIcon className="w-3.5 h-3.5" />
                  </Button>
                  <Button variant="outline" size="icon" className="w-7 h-7"
                    onClick={() => handlePrintInvoice(order)}>
                    <PrinterIcon className="w-3.5 h-3.5" />
                  </Button>
                  <Button variant="outline" size="icon" className="w-7 h-7"
                    onClick={() => handleInitiateReturn(order)}>
                    <RotateCcwIcon className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Desktop layout */}
            <div className="hidden md:grid grid-cols-[110px_130px_1fr_100px_120px_100px_110px] px-5 py-3 items-center">
              <span className="text-xs font-medium">#{order.id}</span>

              <div>
                <p className="text-xs">{date}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{time}</p>
              </div>

              <div className="flex items-center gap-2">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0"
                  style={{ background: avatar.bg, color: avatar.color }}
                >
                  {initials}
                </div>
                <span className="text-xs truncate">{name || 'Walk-in'}</span>
              </div>

              <span className="text-xs font-medium text-right pr-4">
                ${order.totalAmount?.toFixed(2) ?? '0.00'}
              </span>

              <div>
                <span
                  className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full"
                  style={{ background: pay.bg, color: pay.color }}
                >
                  {getPaymentIcon(order.paymentType)}
                  {getPaymentMethodLabel(order.paymentType)}
                </span>
              </div>

              <div>
                <span
                  className="text-xs font-medium px-2 py-0.5 rounded-full"
                  style={{ background: stat.bg, color: stat.color }}
                >
                  {stat.label}
                </span>
              </div>

              <div className="flex justify-end gap-1">
                <Button variant="outline" size="icon" className="w-7 h-7"
                  onClick={() => handleViewOrder(order)}>
                  <EyeIcon className="w-3.5 h-3.5" />
                </Button>
                <Button variant="outline" size="icon" className="w-7 h-7"
                  onClick={() => handlePrintInvoice(order)}>
                  <PrinterIcon className="w-3.5 h-3.5" />
                </Button>
                <Button variant="outline" size="icon" className="w-7 h-7"
                  onClick={() => handleInitiateReturn(order)}>
                  <RotateCcwIcon className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>

          </div>
        )
      })}

      <div className="border-t border-border px-4 md:px-5 py-3 flex justify-between items-center">
        <span className="text-xs text-muted-foreground">
          Showing {orders.length} orders
        </span>
      </div>
    </div>
  )
}

export default OrderTable