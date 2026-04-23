import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SearchIcon } from "lucide-react";

/* ✅ Fake Data */
const mockOrders = [
  {
    id: "ORD-1001",
    createdAt: "2026-04-08T08:30:00Z",
    customer: { fullName: "Sok Dara", phone: "+855 12 345 678" },
    totalAmount: 12.5,
    paymentType: "CASH",
    items: [
      {
        id: "item_1",
        quantity: 2,
        product: { name: "Iced Latte", sellingPrice: 2.5 }
      },
      {
        id: "item_2",
        quantity: 3,
        product: { name: "Croissant", sellingPrice: 2.5 }
      }
    ]
  },
  {
    id: "ORD-1002",
    createdAt: "2026-04-08T09:00:00Z",
    customer: { fullName: "Chanthy Srey", phone: "+855 98 222 111" },
    totalAmount: 18.75,
    paymentType: "ABA PAY",
    items: [
      {
        id: "item_3",
        quantity: 1,
        product: { name: "Cappuccino", sellingPrice: 3.75 }
      },
      {
        id: "item_4",
        quantity: 3,
        product: { name: "Muffin", sellingPrice: 5 }
      }
    ]
  },
  {
    id: "ORD-1003",
    createdAt: "2026-04-08T09:20:00Z",
    customer: null,
    totalAmount: 6.0,
    paymentType: "CARD",
    items: [
      {
        id: "item_5",
        quantity: 3,
        product: { name: "Americano", sellingPrice: 2 }
      }
    ]
  },
  {
    id: "ORD-1004",
    createdAt: "2026-04-08T09:45:00Z",
    customer: { fullName: "Vannak Kim", phone: "+855 77 888 999" },
    totalAmount: 25.2,
    paymentType: "KHQR",
    items: [
      {
        id: "item_6",
        quantity: 2,
        product: { name: "Cheesecake", sellingPrice: 6 }
      },
      {
        id: "item_7",
        quantity: 3,
        product: { name: "Orange Juice", sellingPrice: 4.4 }
      }
    ]
  }
];

/* Simple Date Format */
const formatDate = (date) =>
  new Date(date).toLocaleString();

const OrderTableRefund = ({ handleSelectOrder }) => {
  const [search, setSearch] = useState("");

  /* Filter Logic */
  const filteredOrders = mockOrders.filter((order) =>
    order.id.toLowerCase().includes(search.toLowerCase()) ||
    order.customer?.fullName?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full p-4 flex flex-col gap-4">

      {/*Search Bar */}
      <div className="flex gap-2">
        <Input
          placeholder="Search by Order ID or Customer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="flex-1 overflow-auto border rounded-xl">
        {filteredOrders.length > 0 ? (
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead>Order ID</TableHead>
                <TableHead>Date/Time</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Payment</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow
                  key={order.id}
                  className="hover:bg-muted/40 transition"
                >
                  <TableCell className="font-medium">
                    {order.id}
                  </TableCell>

                  <TableCell>
                    {formatDate(order.createdAt)}
                  </TableCell>

                  <TableCell>
                    {order.customer?.fullName || "Walk-in"}
                  </TableCell>

                  <TableCell className="font-medium">
                    ${order.totalAmount.toFixed(2)}
                  </TableCell>

                  <TableCell>
                    {order.paymentType}
                  </TableCell>

                  <TableCell className="text-right">
                    <Button
                      size="sm"
                      onClick={() => handleSelectOrder(order)}
                    >
                      Select
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center h-64 text-muted-foreground">
            <SearchIcon size={40} strokeWidth={1.5} />
            <p className="mt-3 font-medium">No orders found</p>
            <p className="text-sm">
              Try a different keyword
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderTableRefund;