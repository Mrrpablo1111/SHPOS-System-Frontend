import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { User } from "lucide-react";

// ✅ Fake data
const topCashiers = [
  { cashierName: "John", totalRevenue: 5200 },
  { cashierName: "Sokha", totalRevenue: 4800 },
  { cashierName: "Dara", totalRevenue: 4100 },
  { cashierName: "Lina", totalRevenue: 3500 },
  { cashierName: "Vannak", totalRevenue: 3000 },
];

const CashierPerformance = () => {
  const loading = false;

  const data = topCashiers.map((item) => ({
    name: item.cashierName,
    sales: item.totalRevenue,
  }));

  const config = {
    sales: {
      label: "Sales",
      color: "#3b82f6",
    },
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-semibold">
          Cashier Performance
        </CardTitle>
        <div className="flex items-center gap-2">
          <User className="h-5 w-5 text-primary" />
          <span className="text-sm text-gray-500">Top 5 Cashiers</span>
        </div>
      </CardHeader>

      <CardContent>
        <ChartContainer config={config}>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart
              layout="vertical"
              data={data}
              margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
            >
              <XAxis
                type="number"
                tickFormatter={(value) => `$${value}`}
                className="text-xs"
              />
              <YAxis
                dataKey="name"
                type="category"
                className="text-xs"
              />

              <ChartTooltip
                content={({ active, payload }) => (
                  <ChartTooltipContent
                    active={active}
                    payload={payload}
                    formatter={(value) => [`$${value}`, "Revenue"]}
                  />
                )}
              />

              <Bar
                dataKey="sales"
                radius={[0, 6, 6, 0]}
                className="fill-primary"
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>

        {loading && (
          <div className="text-center text-xs text-gray-400 mt-2">
            Loading...
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CashierPerformance;