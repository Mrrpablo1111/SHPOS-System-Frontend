import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

const COLORS = ["#1B4332", "#2D6A4F", "#40916C", "#52B788", "#74C69D"];

const topProducts = [
  { productName: "Coca Cola", quantitySold: 120, percentage: 30 },
  { productName: "Pepsi", quantitySold: 90, percentage: 22 },
  { productName: "Iced Coffee", quantitySold: 70, percentage: 18 },
  { productName: "Green Tea", quantitySold: 60, percentage: 15 },
  { productName: "Orange Juice", quantitySold: 50, percentage: 15 },
];

const TopProduct = () => {
  const loading = false;

  const data = topProducts.map((item) => ({
    name: item.productName,
    value: item.quantitySold,
    percentage: item.percentage,
  }));

  const config = data.reduce((acc, item, idx) => {
    acc[item.name] = {
      label: item.name,
      color: COLORS[idx % COLORS.length],
    };
    return acc;
  }, {});

  const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent, index
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
    const percentValue = data[index]?.percentage ?? percent * 100;

    return (
      <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
        {`${percentValue.toFixed(0)}%`}
      </text>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">
          Product Performance
        </CardTitle>
      </CardHeader>

      <CardContent>
        <ChartContainer config={config}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={90}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            <ChartTooltip
              content={({ active, payload }) => (
                <ChartTooltipContent
                  active={active}
                  payload={payload}
                  formatter={(value, name, props) => [
                    `${props.payload.percentage}%`,
                    props.payload.name,
                  ]}
                />
              )}
            />

            <ChartLegend content={(props) => <ChartLegendContent {...props} />} />
          </PieChart>
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

export default TopProduct;