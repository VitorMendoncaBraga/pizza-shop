import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { DollarSign } from "lucide-react";
import React from "react";

export default function MonthCanceledOrdersCard() {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between pb-2">
        <CardTitle className="">Cancelamentos (mês)</CardTitle>
        <DollarSign className="text-muted-foreground h-4 w-4" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">27</span>
      </CardContent>
      <CardFooter className="text-muted-foreground text-sm">
        <p className="text-muted-foreground text-xs">
          <span className="text-emerald-500 dark:text-emerald-400">-3%</span> em
          relação ao mês passado
        </p>
      </CardFooter>
    </Card>
  );
}
