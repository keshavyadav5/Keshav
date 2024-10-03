import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/ui/Header';
import Footer from './Footer';

const Home = () => {
  return (
    <div className='w-full min-h-screen bg-[#010c15] sm:p-10 md:16 flex items-center justify-center overflow-hidden text-white'>
      <div className='w-full min-h-[98vh] md:min-h-[90vh] md:max-h-[90vhZ] lg:min-h-[80vh] m-2 bg-[#011627] round flex flex-col justify-between'>
        <Header />
        <div className='flex-grow flex'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
