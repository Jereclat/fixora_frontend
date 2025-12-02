import React from 'react'
import { Sidebar } from './Sidebar'
import { Navbar } from './Navbar'
import { Outlet } from 'react-router-dom'

export const DashboardLayout = () => {
  return (
    <div className='flex justify-between items-center'>
        <Sidebar />


        <div className="ml-15 min-h-screen w-full">
            <Navbar />
            
            <div>
                <Outlet />
            </div>
        </div>
    </div>
  )
}
