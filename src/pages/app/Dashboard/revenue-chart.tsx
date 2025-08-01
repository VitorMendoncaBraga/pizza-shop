import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  Tooltip,
} from "recharts";
import colors from 'tailwindcss/colors';

const data = [
  {
    date: "10/12",
    revenue: 1200,
  },
  {
    date: "11/12",
    revenue: 200,
  },
  {
    date: "12/12",
    revenue: 1600,
  },
  {
    date: "13/12",
    revenue: 2200,
  },
  {
    date: "14/12",
    revenue: 500,
  },
  {
    date: "15/12",
    revenue: 160,
  },
];

export default function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width={"100%"} height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            
            <XAxis dataKey={"date"} tickLine={false} axisLine={false} dy={16} />

            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={70}
              tickFormatter={(value: number) =>
                value.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })
              }
            ></YAxis>
            <CartesianGrid vertical={false} className="stroke-muted" />
            <Line type={"linear"} strokeWidth={2} dataKey={"revenue"} stroke={colors["violet"][500]} />
            
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
