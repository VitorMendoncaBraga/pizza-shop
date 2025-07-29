import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator } from './ui/dropdown-menu'
import { Button } from './ui/button'
import { Building, ChevronDown, LogOut } from 'lucide-react'


export function AccountMenu() {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant={'outline'} className='flex items-center gap-2 select-none'>
                Pizza Shop
                <ChevronDown />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end' className='w-56'>
            <DropdownMenuLabel className='flex flex-col'>
                <span>Vitor Mendonça</span>
                <span className='text-xs font-sm text-muted-foreground'>vmbbraga5@gmail.com</span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator></DropdownMenuSeparator>
            <DropdownMenuItem>
                <Building className='h-4 w-4' />
                <span>Perfil da loja</span> 
            </DropdownMenuItem>
            <DropdownMenuItem>
                <LogOut className='h-4 w-4 text-rose-400 dark:text-rose-500' />
                <span>Sair</span> 
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}
