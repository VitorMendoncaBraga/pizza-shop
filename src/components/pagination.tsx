import React from 'react'
import { Button } from './ui/button';
import { ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

interface PaginationProps{
    pageIndex: number;
    totalCount: number;
    perPage: number;
}

export function PaginationComponent({pageIndex, totalCount, perPage}: PaginationProps) {
    const pages = Math.ceil(totalCount / perPage) || 1; // Arrenda o número total de páginas
  return (
    <Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
  )
}

{/* <div className='flex items-center justify-between'>
      <span className='text-sm text-muted-foreground'>
        Total de {totalCount} item(s)
      </span>

      <div className='flex items-center gap-6 lg:gap-8'>
        <div className='text-sm font-medium '>Página {pageIndex + 1} de {pages}</div>
        <div className='flex items-center gap-2'>
            <Button variant="outline" className='h-8 w-8 p-8'>
                <ChevronsLeft className='h-4 w-4' />
                <span className='sr-only'>Primeira página</span>
            </Button>
             <Button variant="outline" className='h-8 w-8 p-8'>
                <ChevronRight className='h-4 w-4' />
                <span className='sr-only'>Próxima página</span>
            </Button>
             <Button variant="outline" className='h-8 w-8 p-8'>
                <ChevronsRight className='h-4 w-4' />
                <span className='sr-only'>Última página</span>
            </Button>
        </div>
      </div>

    </div> */}