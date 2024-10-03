import React from 'react'
import ContactSidebar from './ContactSidebar'
import { Outlet } from 'react-router-dom'
import Terminal from './Terminal'

const Contact = () => {
  return (
    <div className='w-full h-full py-3 '>
      <div className='w-full h-full flex flex-col md:flex-row gap-4 md:gap-0 justify-start md:px-2'>
        <div className='md:w-1/4 lg:w-1/5 flex justify-between flex-wrap'>
          <ContactSidebar />
        </div>
        <div className="w-full flex-1 px-4 flex justify-between">
          <div className='flex-1 pr-4 flex'>
            <Outlet />
          </div>
          <div className='flex-1 hidden lg:block'>
            <Terminal />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact