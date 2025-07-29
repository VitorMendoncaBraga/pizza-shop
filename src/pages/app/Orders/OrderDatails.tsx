import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function OrderDatails() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          <Search className="h-4 w-4" />
          <span className="sr-only">Detalhes do pedido</span>
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Pedido: 12348523fd23ds</DialogTitle>
          <DialogDescription>Detalhes do pedido</DialogDescription>
        </DialogHeader>
        <div className="space-y-6">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Status</TableCell>
                <TableCell className="flex justify-end">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-slate-300"></span>
                    <span className="text-sm font-medium text-muted-foreground">Pendente</span>
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Cliente</TableCell>
                <TableCell className="flex justify-end">
                  Ana
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Telefone</TableCell>
                <TableCell className="flex justify-end">
                  (31) 99999-9999
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>E-mail</TableCell>
                <TableCell className="flex justify-end">
                  anaclaravc06@gmail.com
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Realizado à 5 minutos</TableCell>
                <TableCell className="flex justify-end">
                  Ana
                </TableCell>
              </TableRow>

            </TableBody>
          </Table>

          <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Produto</TableHead>
                    <TableHead className="text-right">Qnt.</TableHead>
                    <TableHead className="text-right">Preço</TableHead>
                    <TableHead className="text-right">Subtotal</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>Pizza Calabresa G</TableCell>
                    <TableCell className="text-right">2</TableCell>
                    <TableCell className="text-right">R$ 69,90</TableCell>
                    <TableCell className="text-right">R$ 139,80</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Pizza Mussarela G</TableCell>
                    <TableCell className="text-right">1</TableCell>
                    <TableCell className="text-right">R$ 69,90</TableCell>
                    <TableCell className="text-right">R$ 69,90</TableCell>
                </TableRow>
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>Total do pedido</TableCell>
                    <TableCell className="text-right font-medium">
                        R$ 209,70
                    </TableCell>
                </TableRow>
            </TableFooter>
          </Table>
        </div>
      </DialogContent>
    </Dialog>
  );
}
