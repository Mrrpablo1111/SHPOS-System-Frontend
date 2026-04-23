import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Package, RotateCcw, Store, Phone, MapPin, Hash, Calendar, User, Printer } from 'lucide-react'
import React from 'react'

const ReturnReceiptDialog = ({ showReturnReciptDialog, setShowReturnReciptDialog, selectedOrder }) => {
  const receiptId = `RTN-${Date.now().toString().slice(-8)}`
  const subtotal = selectedOrder?.items?.reduce((sum, item) => sum + item.product?.sellingPrice * item.quantity, 0) ?? 0

  const handlePrint = () => {
    window.print()
  }

  return (
    <Dialog open={showReturnReciptDialog} onOpenChange={setShowReturnReciptDialog}>
      <DialogContent className="max-w-md p-0 overflow-hidden rounded-2xl border border-gray-200 shadow-xl bg-white">

        {/* Header */}
        <div className="bg-white px-6 pt-8 pb-6 text-center border-b border-dashed border-gray-300">
          <div className="flex justify-center mb-3">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
              <RotateCcw size={18} className="text-gray-600" />
            </div>
          </div>
          <h2 className="text-xl font-bold tracking-tight text-gray-900">SH-POS-SYSTEM</h2>
          <div className="flex items-center justify-center gap-1.5 text-gray-400 text-xs mt-1">
            <MapPin size={11} />
            <span>123 Main Street, City</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 text-gray-400 text-xs mt-0.5">
            <Phone size={11} />
            <span>012 345 678</span>
          </div>
          <div className="mt-4 inline-block bg-gray-100 rounded-full px-4 py-1">
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">Return Receipt</span>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 pb-6 max-h-[60vh] overflow-y-auto bg-white space-y-5">

          {/* Meta info */}
          <div className="pt-4 space-y-2">
            {[
              { icon: Hash, label: 'Return ID', value: receiptId },
              { icon: Store, label: 'Order Ref', value: `#${selectedOrder?.id ?? '—'}` },
              { icon: Calendar, label: 'Date', value: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) },
              { icon: User, label: 'Customer', value: selectedOrder?.customer?.fullName ?? '—' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center justify-between py-1">
                <div className="flex items-center gap-2 text-gray-400">
                  <Icon size={13} />
                  <span className="text-xs font-medium">{label}</span>
                </div>
                <span className="text-sm font-semibold text-gray-800">{value}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-dashed border-gray-300" />
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Returned Items</p>

          <div className="space-y-3">
            {selectedOrder?.items?.map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                  <Package size={13} className="text-gray-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-800 truncate">{item.product?.name}</p>
                  <p className="text-xs text-gray-400">${item.product?.sellingPrice?.toFixed(2)} × {item.quantity}</p>
                </div>
                <span className="text-sm font-bold text-gray-900 tabular-nums">
                  ${(item.product?.sellingPrice * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div className="border-t border-dashed border-gray-300" />

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-400">
              <span>Subtotal</span>
              <span className="font-medium text-gray-700">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-400">
              <span>Tax (0%)</span>
              <span className="font-medium text-gray-700">$0.00</span>
            </div>
          </div>

          <div className="border-t border-dashed border-gray-300" />

          <div className="flex justify-between items-center">
            <span className="font-bold text-gray-900 text-base">Total Refund</span>
            <span className="text-xl font-black text-green-600">${subtotal.toFixed(2)}</span>
          </div>

          <div className="border-t border-dashed border-gray-300" />

          <p className="text-center text-xs text-gray-400 pb-2">
            Thank you for your patience.<br />Refund processed within 3–5 business days.
          </p>
        </div>

        {/* Footer */}
        <DialogFooter className="px-6 py-4 bg-white border-t border-dashed border-gray-300">
          <Button
            onClick={handlePrint}
            className="w-full h-11 bg-gray-900 hover:bg-gray-700 text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
          >
            <Printer size={16} />
            Print & Complete
          </Button>
        </DialogFooter>

      </DialogContent>
    </Dialog>
  )
}

export default ReturnReceiptDialog