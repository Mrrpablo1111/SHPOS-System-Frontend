
export const mockEmployees = [
  { id: "emp-1", fullName: "Sok Dara" },
  { id: "emp-2", fullName: "Chantha Vann" },
  { id: "emp-3", fullName: "Lina Kim" },
];

export const mockOrders = [
  {
    id: "ORD-1001",
    branchId: "branch-1",
    cashierId: "emp-1",
    cashierName: "Sok Dara",
    paymentType: "CASH",
    status: "COMPLETED",
    totalAmount: 25.5,
  },
  {
    id: "ORD-1002",
    branchId: "branch-1",
    cashierId: "emp-2",
    cashierName: "Chantha Vann",
    paymentType: "CARD",
    status: "PENDING",
    totalAmount: 40,
  },
  {
    id: "ORD-1003",
    branchId: "branch-1",
    cashierId: "emp-3",
    cashierName: "Lina Kim",
    paymentType: "UPI",
    status: "CANCELLED",
    totalAmount: 15,
  },
];

export const paymentModeMap = {
  all: undefined,
  Cash: "CASH",
  UPI: "UPI",
  Card: "CARD",
};

export const statusMap = {
  all: undefined,
  Completed: "COMPLETED",
  Pending: "PENDING",
  Cancelled: "CANCELLED",
  Refunded: "REFUNDED",
};