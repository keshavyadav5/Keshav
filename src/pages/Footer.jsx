import React from 'react'
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div className='min-h-[2px] w-full bg-slate-800 '></div>
      <div className='flex items-center'>
        <div className='space-x-4 flex-1 px-4 flex items-center justify-between'>
          <div>
            <p className='text-slate-400'>
              find me in:
            </p>
          </div>
          <div className='h-12 w-1 bg-slate-800'></div>
        </div>
        <div className='flex-1 flex justify-between'>
          <div className='flex gap-5 items-center'>
            <Link to={'https://www.instagram.com/k_shav09'} target='_blank' className='text-slate-400 hover:text-slate-300' ><FaInstagram /></Link>
            <div className='h-12 w-1 bg-slate-800'></div>
            <Link to={'https://www.linkedin.com/in/keshavyadav5'} target='_blank' className='text-slate-400 hover:text-slate-300'><FaLinkedinIn /></Link>
            <div className='h-12 w-1 bg-slate-800'></div>
          </div>
          <div className='flex items-center pr-2'>
            <div className='flex   items-center gap-3 text-slate-400'>
            <p className='hidden md:flex'>@keshav</p>
              <Link to={'https://www.github.com/keshavyadav5'} target='_blank' className='text-slate-400 hover:text-slate-300'><FaGithub /></Link>
            </div>
          </div>
        </div>
      </div>
      <div className='min-h-[2px] w-full bg-slate-800'></div>
    </div>
  )
}

export default Footer