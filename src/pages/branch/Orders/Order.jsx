import { Button } from "@/components/ui/button";
import {
  RefreshCcw,
  SearchIcon,
  Download,
  PrinterIcon,
} from "lucide-react";
import React, { useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

/* ✅ Mock Data */
const mockOrders = [
  {
    id: "ORD-1001",
    createdAt: "2026-04-08T08:30:00Z",
    customer: { fullName: "Sok Dara", phone: "+855 12 345 678" },
    totalAmount: 12.5,
    paymentType: "CASH",
    items: [
      { name: "Keyboard", quantity: 1, price: 10 },
      { name: "Keycaps", quantity: 2, price: 1.25 },
    ],
  },
  {
    id: "ORD-1002",
    createdAt: "2026-04-08T09:00:00Z",
    customer: { fullName: "Chanthy Srey", phone: "+855 98 222 111" },
    totalAmount: 18.75,
    paymentType: "ABA PAY",
    items: [
      { name: "Mouse", quantity: 1, price: 8.75 },
      { name: "USB Cable", quantity: 2, price: 5 },
    ],
  },
  {
    id: "ORD-1003",
    createdAt: "2026-04-08T09:20:00Z",
    customer: null,
    totalAmount: 6.0,
    paymentType: "CARD",
    items: [{ name: "Sticker Pack", quantity: 3, price: 2 }],
  },
];

const Orders = () => {
  const [search, setSearch] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showOrderDetailsDialog, setShowOrderDetailsDialog] = useState(false);

  const formatDate = (date) => new Date(date).toLocaleString();

  const handleSelectOrder = (order) => {
    setSelectedOrder(order);
    setShowOrderDetailsDialog(true);
  };

  const handlePrintInvoice = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    alert("PDF feature coming soon!");
  };

  const filteredOrders = mockOrders.filter((order) => {
    const keyword = search.toLowerCase();
    return (
      order.id.toLowerCase().includes(keyword) ||
      order.customer?.fullName?.toLowerCase().includes(keyword)
    );
  });

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex justify-between items-center print:hidden">
        <h1 className="text-3xl font-bold">Orders</h1>

        <Button variant="outline" className="gap-2">
          <RefreshCcw className="h-4 w-4" />
          Refresh
        </Button>
      </div>

      {/* SEARCH */}
      <div className="flex items-center gap-2 border rounded-lg px-3 py-2 max-w-sm print:hidden">
        <SearchIcon className="h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search order or customer..."
          className="w-full outline-none bg-transparent"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* TABLE */}
      <div className="print:hidden">
        {filteredOrders.length > 0 ? (
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead>Order ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Payment</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{formatDate(order.createdAt)}</TableCell>
                  <TableCell>
                    {order.customer?.fullName || "Walk-in"}
                  </TableCell>
                  <TableCell>${order.totalAmount.toFixed(2)}</TableCell>
                  <TableCell>{order.paymentType}</TableCell>

                  <TableCell className="text-right">
                    <Button
                      size="sm"
                      onClick={() => handleSelectOrder(order)}
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div className="text-center py-10 text-muted-foreground">
            No orders found
          </div>
        )}
      </div>

      {/* INVOICE DIALOG */}
      <Dialog open={showOrderDetailsDialog} onOpenChange={setShowOrderDetailsDialog}>
        {selectedOrder && (
          <DialogContent className="max-w-4xl print:max-w-full print:shadow-none print:border-none">

            <DialogHeader className="print:hidden">
              <DialogTitle>Order Invoice</DialogTitle>
            </DialogHeader>

            {/* INVOICE */}
            <div id="invoice" className="space-y-6 p-2 print:p-0">

              {/* HEADER */}
              <div className="flex justify-between">
                <div>
                  <h2 className="text-2xl font-bold">CampuBuild</h2>
                  <p className="text-sm text-muted-foreground">
                    Phnom Penh, Cambodia
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-semibold">
                    Invoice #{selectedOrder.id}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {formatDate(selectedOrder.createdAt)}
                  </p>
                </div>
              </div>

              {/* CUSTOMER */}
              <div className="border rounded-lg p-4">
                <p className="font-semibold">Customer</p>
                <p>{selectedOrder.customer?.fullName || "Walk-in"}</p>
                <p className="text-sm text-muted-foreground">
                  {selectedOrder.customer?.phone || "-"}
                </p>
              </div>

              {/* ITEMS */}
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item</TableHead>
                    <TableHead>Qty</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {selectedOrder.items.map((item, i) => (
                    <TableRow key={i}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.quantity}</TableCell>
                      <TableCell>${item.price.toFixed(2)}</TableCell>
                      <TableCell className="text-right">
                        ${(item.quantity * item.price).toFixed(2)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {/* TOTAL */}
              <div className="flex justify-end">
                <div className="w-64 space-y-2">
                  <div className="flex justify-between">
                    <span>Total</span>
                    <span>${selectedOrder.totalAmount.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between font-bold border-t pt-2">
                    <span>Grand Total</span>
                    <span>${selectedOrder.totalAmount.toFixed(2)}</span>
                  </div>

                  <div className="text-sm text-muted-foreground text-right">
                    Payment: {selectedOrder.paymentType}
                  </div>
                </div>
              </div>
            </div>

            {/* ACTIONS */}
            <DialogFooter className="space-x-2 print:hidden">
              <Button variant="outline" onClick={handleDownloadPDF}>
                <Download className="h-4 w-4 mr-2" />
                PDF
              </Button>

              <Button onClick={handlePrintInvoice}>
                <PrinterIcon className="h-4 w-4 mr-2" />
                Print
              </Button>
            </DialogFooter>

          </DialogContent>
        )}
      </Dialog>
    </div>
  );
};

export default Orders;