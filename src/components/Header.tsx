import { Home, Pizza, UtensilsCrossed } from 'lucide-react'
import React from 'react'
import { Separator } from "@/components/ui/separator"
import { NavLink } from '@/components/NavLink'
import { ModeToggle } from './theme/mode-toggle'
import { AccountMenu } from './AccountMenu'

export  function Header() {
  return (
    <div className='border-b'>
      <div className='flex h-16 items-center gap-6 px-6'>
        <Pizza className='h-6 w-6' />

        <Separator orientation='vertical' className='h-6' />

        <nav className='flex items-center space-x-4 lg:space-x-6'>
            <NavLink to={"/"}>
                <Home className='h-4 w-4' />
                <p>Início</p>
            </NavLink>
            <NavLink to={"/pedidos"}>
                <UtensilsCrossed className='h-4 w-4' />
                <p>Pedidos</p>
            </NavLink>
        </nav>
        <div className='ml-auto flex items-center gap-2'>
            <ModeToggle />
            <AccountMenu />
        </div>
      </div>
    </div>
  )
}
