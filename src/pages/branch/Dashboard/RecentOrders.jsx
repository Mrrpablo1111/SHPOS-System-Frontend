import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

// ✅ Fake Data
const recentOrders = [
  {
    id: "ORD-1001",
    customer: { fullName: "John Doe" },
    totalAmount: 25.5,
    status: "Completed",
    createdAt: "2026-04-12T10:15:00Z",
  },
  {
    id: "ORD-1002",
    customer: { fullName: "Sokha" },
    totalAmount: 18.0,
    status: "Pending",
    createdAt: "2026-04-12T10:25:00Z",
  },
  {
    id: "ORD-1003",
    customerName: "Dara",
    amount: 32.75,
    status: "Cancelled",
    createdAt: "2026-04-12T10:40:00Z",
  },
  {
    id: "ORD-1004",
    customer: { fullName: "Lina" },
    totalAmount: 12.0,
    status: "Completed",
    createdAt: "2026-04-12T11:00:00Z",
  },
  {
    id: "ORD-1005",
    customerName: "Vannak",
    totalAmount: 45.2,
    status: "Processing",
    createdAt: "2026-04-12T11:20:00Z",
  },
];

// ✅ Status Color Function
const getStatusColor = (status) => {
  switch (status) {
    case "Completed":
      return "bg-green-100 text-green-600";
    case "Pending":
      return "bg-yellow-100 text-yellow-600";
    case "Cancelled":
      return "bg-red-100 text-red-600";
    case "Processing":
      return "bg-blue-100 text-blue-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

// ✅ Format Date
const formatDateTime = (date) => {
  return new Date(date).toLocaleString();
};

const RecentOrders = () => {
  const loading = false;

  return (
    <Card className="shadow-md rounded-2xl">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">
          Recent Orders
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Time</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {recentOrders.slice(0, 5).map((order) => (
                <TableRow
                  key={order.id}
                  className="hover:bg-muted/50 transition"
                >
                  <TableCell className="font-medium">
                    {order.id}
                  </TableCell>

                  <TableCell>
                    {order.customer?.fullName ||
                      order.customerName ||
                      "-"}
                  </TableCell>

                  <TableCell>
                    $
                    {order.totalAmount
                      ? order.totalAmount.toLocaleString()
                      : order.amount
                      ? order.amount.toLocaleString()
                      : "-"}
                  </TableCell>

                  <TableCell>
                    <Badge
                      className={getStatusColor(order.status)}
                      variant="secondary"
                    >
                      {order.status}
                    </Badge>
                  </TableCell>

                  <TableCell className="text-right text-xs text-muted-foreground">
                    {formatDateTime(order.createdAt)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {loading && (
          <div className="text-center text-xs text-gray-400 mt-2">
            Loading...
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RecentOrders;