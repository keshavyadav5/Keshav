import React from 'react'
import AboutSidebar from '../components/AboutSidebar'
import Terminal from '../components/ui/Terminal'
import { Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div className='w-full h-full md:py-3'>
      <div className='w-full h-full flex flex-col md:flex-row gap-4 md:gap-0 justify-start md:px-2'>
        <div className="w-full md:w-1/4 lg:w-1/5 flex justify-between flex-wrap">
          <AboutSidebar />
        </div>
        <div className="w-full flex-1 px-4 flex justify-between">
          <div className='flex-1'>
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

export default About
