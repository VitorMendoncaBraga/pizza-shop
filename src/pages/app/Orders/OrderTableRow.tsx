import React from "react";
import { Button } from "@/components/ui/button";
import { TableRow, TableCell } from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";
import { OrderDatails } from "./OrderDatails";

export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
          <OrderDatails />
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">123456</TableCell>
      <TableCell className="text-muted-foreground">5 minutos</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-slate-300"></span>
          <span className="text-sm font-medium">Pendente</span>
        </div>
      </TableCell>
      <TableCell className="font-medium">Ana</TableCell>
      <TableCell className="font-medium">R$ 149,50</TableCell>
      <TableCell className="font-medium">
        <Button variant="outline" size="sm">
          <ArrowRight className="h-4 w-4" />
          Entrega
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="sm">
          <X className="h-3 w-3 text-red-500" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  );
}
