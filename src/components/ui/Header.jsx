import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [isMenuOpen]);
  const handleHome = () => {
    navigate('/')
    setIsMenuOpen(false)
  }
  const handleAbout = () => {
    navigate('/about')
    setIsMenuOpen(false)
  }
  const handleContact = () => {
    navigate('/contact')
    setIsMenuOpen(false)
  }
  const handleProject = () => {
    navigate('/project')
    setIsMenuOpen(false)
  }
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <div className='min-h-[2px] w-full bg-slate-800'></div>
      <div className='w-full flex space-x-4 px-2 items-center justify-between'>
        <div className='md:w-1/5 w-full flex py-3 md:py-0 justify-between items-center'>
          <h3 className='text-slate-400 cursor-pointer hover:text-slate-300 transition-all duration-300'
            onClick={handleHome}>_@Keshav</h3>
          <div className='h-12 w-1 hidden md:flex bg-slate-800'></div>
        </div>

        <div className='md:hidden flex items-center'>
          <button onClick={toggleMenu}>
            {isMenuOpen ? <X className="text-slate-400" /> : <Menu className="text-slate-400" />}
          </button>
        </div>

        <div className={`hidden md:flex flex-1 gap-10 items-center justify-start ${isMenuOpen ? 'block' : ''}`}>
          <p className='text-slate-400 cursor-pointer hover:text-slate-300 transition-all duration-300' onClick={() => navigate('/')}>_hello</p>
          <p className='text-slate-400 cursor-pointer hover:text-slate-300 transition-all duration-300' onClick={() => navigate('about')}>_about</p>
          <p className='text-slate-400 cursor-pointer hover:text-slate-300 transition-all duration-300' onClick={() => navigate('project')}>_project</p>

        </div>
        <div className='hidden md:flex pr-2'>
          <p className='text-slate-400 cursor-pointer hover:text-slate-300 transition-all duration-300' onClick={() => navigate('contact')}>_contact</p>
        </div>
      </div>

      {isMenuOpen && (
        <div className='md:hidden flex flex-col space-y-4 px py-2'>
          <div className='min-h-[2px] w-full bg-slate-800'></div>
          <p className='text-slate-400 cursor-pointer hover:text-slate-300 transition-all duration-300 px-2' onClick={handleHome}>_hello</p>
          <div className='min-h-[2px] w-full bg-slate-800'></div>
          <p className='text-slate-400 cursor-pointer hover:text-slate-300 transition-all duration-300 px-2' onClick={handleAbout}>_about-me</p>
          <div className='min-h-[2px] w-full bg-slate-800'></div>
          <p className='text-slate-400 cursor-pointer hover:text-slate-300 transition-all duration-300 px-2' onClick={handleProject}>_projects</p>
          <div className='min-h-[2px] w-full bg-slate-800'></div>
          <p className='text-slate-400 cursor-pointer hover:text-slate-300 transition-all duration-300 pb-1 px-2' onClick={handleContact}>_contact-me</p>
        </div>
      )}

      <div className='min-h-[2px] w-full bg-slate-800'></div>
    </div>
  );
}

export default Header;
