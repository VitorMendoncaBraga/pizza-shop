import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BarChart } from "lucide-react";
import React from "react";
import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell } from "recharts";
import colors from "tailwindcss/colors";

const data = [
  {
    product: "Calabresa",
    amount: 50,
  },
  {
    product: "Mussarela",
    amount: 20,
  },
  {
    product: "Frango",
    amount: 40,
  },
  {
    product: "Peperroni",
    amount: 60,
  },
  {
    product: "Marguerita",
    amount: 12,
  },
];

const Colors = [
  colors.red[500],
  colors.yellow[500],
  colors.green[500],
  colors.blue[500],
  colors.purple[500],
];

export default function PopularProductsChart() {
  return (
    <Card className="col-span-3">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-4 text-base font-medium">
            Receita no período
            <BarChart className="text-muted-foreground h-4 w-4" />
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width={"100%"} height={240}>
          <PieChart style={{ fontSize: 12 }}>
            <Pie
              data={data}
              dataKey={"amount"}
              nameKey={"product"}
              cx={"50%"}
              cy="50%"
              outerRadius={86}
              innerRadius={56}
              strokeWidth={8}
              labelLine={false}
               label={({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                value,
                index,
                payload, // Destructure payload here
              }) => {
                const RADIAN = Math.PI / 180;
                const radius = 12 + innerRadius + (outerRadius - innerRadius);
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                const y = cy + radius * Math.sin(-midAngle * RADIAN);

                const product = payload.product; // Access product from payload

                return (
                  <text
                    x={x}
                    y={y}
                    className="fill-muted-foreground text-xs"
                    textAnchor={x > cx ? "start" : "end"}
                    dominantBaseline="central"
                  >
                    {product.length > 12
                      ? product.substring(0, 12).concat("...")
                      : product}{" "}
                    ({value})
                  </text>
                );
              }}
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={Colors[index]}
                  stroke="stroke-background"
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
