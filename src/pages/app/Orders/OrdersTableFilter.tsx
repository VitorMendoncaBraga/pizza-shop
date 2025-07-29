import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Search, X } from "lucide-react";

export function OrdersTableFilter() {
  return (
    <form className="mt-5 flex items-center gap-2 justify-between">
      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold">Filtros</span>
        <Input placeholder="ID do pedido" className="h-8 w-[160px]" />
        <Input placeholder="Nome do cliente" className="h-8 w-[320px]" />
        <Select defaultValue="all">
          <SelectTrigger className="h-8 w-[180px]">
            <SelectValue></SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos status</SelectItem>
            <SelectItem value="pending">Pendentes</SelectItem>
            <SelectItem value="canceled">Cancelado</SelectItem>
            <SelectItem value="processing">Em preparo</SelectItem>
            <SelectItem value="delivering">Em entrega</SelectItem>
            <SelectItem value="delivered">Entregue</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex gap-3">
        <Button type="submit" variant="secondary" size="sm">
          <Search className="h-4 w-4" />
          <span>Filtrar resultados</span>
        </Button>
        <Button type="button" variant="outline" size="sm">
          <X className="h-4 w-4" />
          <span>Remover filtros</span>
        </Button>
      </div>
    </form>
  );
}
