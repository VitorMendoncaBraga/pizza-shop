import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import React from "react";
import { OrderTableRow } from "./OrderTableRow";
import { OrdersTableFilter } from "./OrdersTableFilter";
import { PaginationComponent } from "@/components/pagination";

export function Orders() {
  return (
    <div className="w-full">
      <title>Pedidos</title>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
        <div className="flex flex-col gap-3">
          <OrdersTableFilter />
          <div className="rounded-sm border">
            <Table>
              <TableHeader className="bg-zinc-50 dark:bg-zinc-800">
                <TableRow>
                  <TableHead className="w-[64px]"></TableHead>
                  <TableHead className="w-[140px]">Identificador</TableHead>
                  <TableHead className="w-[180px]">Realizado há</TableHead>
                  <TableHead className="w-[140px]">Status</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead className="w-[140px]">Total do pedido</TableHead>
                  <TableHead className="w-[164px]"></TableHead>
                  <TableHead className="w-[132px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <OrderTableRow />
                <OrderTableRow />
                <OrderTableRow />
                <OrderTableRow />
                <OrderTableRow />
                <OrderTableRow />
                <OrderTableRow />
                <OrderTableRow />
              </TableBody>
            </Table>
          </div>
          <PaginationComponent pageIndex={0} totalCount={105} perPage={10} />
        </div>
      </div>
    </div>
  );
}
