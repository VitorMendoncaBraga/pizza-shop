import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Utensils } from "lucide-react";
import React from "react";

export default function DayOrdersAmountCard() {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between pb-2">
        <CardTitle className="">Pedidos total (dia)</CardTitle>
        <Utensils className="text-muted-foreground h-4 w-4" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">12</span>
      </CardContent>
      <CardFooter className="text-muted-foreground text-sm">
        <p className="text-muted-foreground text-xs">
          <span className="text-rose-500 dark:text-rose-400">- 4%</span> em
          relação ao mês passado
        </p>
      </CardFooter>
    </Card>
  );
}
