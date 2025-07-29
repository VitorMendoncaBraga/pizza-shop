import { Header } from '@/components/Header';
import React from 'react'
import { Outlet } from 'react-router-dom';
export default function AppLayout() {
  return (
    <div className='flex min-h-screen flex-col antialiased'>

      <Header />
      <div className='flex flex-1 m-10'>
        <Outlet />
      </div>
    
    </div>
  )
}
