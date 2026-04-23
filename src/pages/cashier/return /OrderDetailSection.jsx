import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Table, TableBody, TableCell,
  TableHead, TableHeader, TableRow,
} from '@/components/ui/table';
import { formatDate } from '@/data/formatDate';
import {
  ArrowLeft, User, Phone, ShoppingBag,
  Receipt, CircleDollarSign, Hash,
  CalendarDays, CreditCard, Package, Layers,
} from 'lucide-react';

const paymentColors = {
  CASH: 'bg-green-50  dark:bg-green-950  text-green-700  dark:text-green-300  border-green-200  dark:border-green-800',
  CARD: 'bg-blue-50   dark:bg-blue-950   text-blue-700   dark:text-blue-300   border-blue-200   dark:border-blue-800',
  QR:   'bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800',
};

const paymentIcons = {
  CASH: <CircleDollarSign size={11} />,
  CARD: <CreditCard       size={11} />,
  QR:   <Hash             size={11} />,
};

const OrderDetailsSection = ({ selectedOrder, setSelectedOrder }) => {
  if (!selectedOrder) return null;

  const totalItems  = selectedOrder.items.reduce((sum, item) => sum + item.quantity, 0);
  const paymentType = selectedOrder.paymentType?.toUpperCase();
  const badgeClass  = paymentColors[paymentType] ?? paymentColors.CASH;
  const badgeIcon   = paymentIcons[paymentType]  ?? <CreditCard size={11} />;

  return (
    <div className="w-full lg:w-1/2 border-r flex flex-col h-full bg-background">

      {/* ── Sticky Header ── */}
      <div className="sticky top-0 z-10 bg-background border-b px-4 sm:px-5 py-3">
        <div className="flex items-center justify-between gap-3">

          {/* Left: back button inline with order info */}
          <div className="flex items-center gap-3 min-w-0">

            {/* Back icon button */}
            <button
              onClick={() => setSelectedOrder(null)}
              className="group flex items-center justify-center w-8 h-8 rounded-lg border border-border/60 bg-background shadow-sm hover:bg-muted hover:border-border transition-all duration-150 shrink-0"
            >
              <ArrowLeft size={14} className="text-muted-foreground group-hover:text-foreground transition-colors" />
            </button>

            {/* Vertical divider */}
            <div className="h-8 w-px bg-border/50 shrink-0" />

            {/* Order ID + date */}
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <Receipt size={14} className="text-muted-foreground shrink-0" />
                <h2 className="text-sm sm:text-base font-semibold leading-tight truncate">
                  Order #{selectedOrder.id}
                </h2>
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <CalendarDays size={10} className="text-muted-foreground shrink-0" />
                <p className="text-xs text-muted-foreground truncate">
                  {formatDate(selectedOrder.createdAt)}
                </p>
              </div>
            </div>
          </div>

          {/* Right: payment badge */}
          <span className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full border shrink-0 ${badgeClass}`}>
            {badgeIcon}
            {selectedOrder.paymentType}
          </span>
        </div>
      </div>

      {/* ── Scrollable Body ── */}
      <div className="flex-1 overflow-auto p-4 sm:p-5 space-y-4">

        {/* Customer + Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

          <Card className="rounded-xl border-border/60 shadow-none">
            <CardContent className="p-4 space-y-2">
              <div className="flex items-center gap-1.5 mb-2">
                <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950 flex items-center justify-center shrink-0">
                  <User size={13} className="text-blue-500" />
                </div>
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Customer
                </span>
              </div>
              <p className="text-sm font-semibold leading-tight">
                {selectedOrder?.customer?.fullName || 'Walk-in Customer'}
              </p>
              <div className="flex items-center gap-1.5">
                <Phone size={11} className="text-muted-foreground shrink-0" />
                <p className="text-xs text-muted-foreground">
                  {selectedOrder?.customer?.phone || 'No phone'}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-xl border-border/60 shadow-none">
            <CardContent className="p-4 space-y-2">
              <div className="flex items-center gap-1.5 mb-2">
                <div className="w-7 h-7 rounded-lg bg-green-50 dark:bg-green-950 flex items-center justify-center shrink-0">
                  <ShoppingBag size={13} className="text-green-500" />
                </div>
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Summary
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Layers size={11} />
                  <span>Total items</span>
                </div>
                <span className="font-medium text-foreground">{totalItems}</span>
              </div>
              <div className="flex items-center justify-between pt-1 border-t border-border/50">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <CircleDollarSign size={11} className="text-green-500" />
                  <span>Total</span>
                </div>
                <span className="text-base font-bold text-green-600 dark:text-green-400">
                  ${selectedOrder.totalAmount?.toFixed(2)}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Items Table */}
        <Card className="rounded-xl border-border/60 shadow-none overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-muted/20">
            <div className="w-6 h-6 rounded-md bg-orange-50 dark:bg-orange-950 flex items-center justify-center shrink-0">
              <Package size={12} className="text-orange-500" />
            </div>
            <h3 className="text-sm font-medium">Items</h3>
            <span className="ml-auto text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full border border-border/50">
              {selectedOrder.items.length} {selectedOrder.items.length === 1 ? 'item' : 'items'}
            </span>
          </div>

          <div className="overflow-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/30 hover:bg-muted/30">
                  <TableHead className="text-xs font-medium text-muted-foreground py-2.5 pl-4">Product</TableHead>
                  <TableHead className="text-xs font-medium text-muted-foreground py-2.5 text-center w-16">Qty</TableHead>
                  <TableHead className="text-xs font-medium text-muted-foreground py-2.5 text-right w-20">Price</TableHead>
                  <TableHead className="text-xs font-medium text-muted-foreground py-2.5 text-right pr-4 w-20">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {selectedOrder.items.map((item, idx) => (
                  <TableRow
                    key={item.id}
                    className={`hover:bg-muted/30 transition-colors ${
                      idx !== selectedOrder.items.length - 1 ? 'border-b border-border/40' : ''
                    }`}
                  >
                    <TableCell className="py-3 pl-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-muted flex items-center justify-center shrink-0">
                          <Package size={12} className="text-muted-foreground" />
                        </div>
                        <span className="text-sm font-medium leading-tight">{item.product?.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="py-3 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-muted text-xs font-semibold">
                        {item.quantity}
                      </span>
                    </TableCell>
                    <TableCell className="py-3 text-right text-xs text-muted-foreground">
                      ${item.product?.sellingPrice?.toFixed(2)}
                    </TableCell>
                    <TableCell className="py-3 text-right pr-4">
                      <span className="text-sm font-semibold">
                        ${(item.product?.sellingPrice * item.quantity).toFixed(2)}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex items-center justify-between px-4 py-3 border-t border-border/50 bg-muted/20">
            <span className="text-xs text-muted-foreground flex items-center gap-1.5">
              <Layers size={11} />
              {totalItems} items total
            </span>
            <div className="flex items-center gap-1.5">
              <CircleDollarSign size={13} className="text-green-500" />
              <span className="text-sm font-bold text-green-600 dark:text-green-400">
                ${selectedOrder.totalAmount?.toFixed(2)}
              </span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default OrderDetailsSection;