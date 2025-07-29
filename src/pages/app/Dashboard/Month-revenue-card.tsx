import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { DollarSign } from 'lucide-react'
import React from 'react'

export default function MonthRevenueCard() {
  return (
    <Card>
          <CardHeader className="flex items-center justify-between pb-2">
            <CardTitle className="">Receita total (mês)</CardTitle>
            <DollarSign className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent className="space-y-1">
            <span className="text-2xl font-bold tracking-tight">R$ 4234,00</span> 
          </CardContent>
          <CardFooter className="text-sm text-muted-foreground">
            <p className="text-xs text-muted-foreground">
               <span className="text-emerald-500 dark:text-emerald-400">+4%</span> em relação ao mês passado
            </p>
          </CardFooter>
        </Card>
  )
}
