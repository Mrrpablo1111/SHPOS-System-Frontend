import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const SalesChart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Simulate API call
  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setData([
        { name: "Mon", sales: 1200 },
        { name: "Tue", sales: 2100 },
        { name: "Wed", sales: 800 },
        { name: "Thu", sales: 1600 },
        { name: "Fri", sales: 2400 },
        { name: "Sat", sales: 3000 },
        { name: "Sun", sales: 2000 },
      ]);
      setLoading(false);
    }, 1000); // simulate delay

    return () => clearTimeout(timer);
  }, []);

  const config = {
    sales: {
      label: "Sales",
      color: "#6D214F",
    },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">
          Daily Sales
        </CardTitle>
      </CardHeader>

      <CardContent>
        <ChartContainer config={config}>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={data}>
              <XAxis
                dataKey="name"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />

              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${value.toLocaleString()}`}
              />

              <ChartTooltip
                content={({ active, payload }) => (
                  <ChartTooltipContent
                    active={active}
                    payload={payload}
                    formatter={(value) => [
                      `$${value.toLocaleString()}`,
                      "Sales",
                    ]}
                  />
                )}
              />

              <Bar
                dataKey="sales"
                fill="currentColor"
                radius={[6, 6, 0, 0]}
                className="fill-primary"
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>

        {/* ✅ Loading State */}
        {loading && (
          <div className="text-center text-xs text-gray-400 mt-2">
            Loading...
          </div>
        )}

        {/* ✅ Empty State */}
        {!loading && data.length === 0 && (
          <div className="text-center text-xs text-gray-400 mt-2">
            No data available
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SalesChart;