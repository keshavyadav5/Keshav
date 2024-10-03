import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Game from '../components/ui/Game';
import Terminal from '../components/ui/Terminal';

const Hello = () => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [currentRole, setCurrentRole] = useState(0);
  const [typing, setTyping] = useState(true);
  const [showGame, setShowGame] = useState(true);

  const roles = ["FrontEnd Developer", "BackEnd Developer", "FullStack Developer"];
  const speed = 100;
  const roleChangeInterval = 6000;

  useEffect(() => {
    if (typing) {
      if (index < roles[currentRole].length) {
        const timer = setTimeout(() => {
          setDisplayText((prev) => prev + roles[currentRole][index]);
          setIndex(index + 1);
        }, speed);
        return () => clearTimeout(timer);
      } else {
        const resetTimer = setTimeout(() => {
          setTyping(false);
          setIndex(0);
        }, speed * 5);
        return () => clearTimeout(resetTimer);
      }
    } else {
      const resetTimer = setTimeout(() => {
        setDisplayText('');
        setTyping(true);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }, speed);
      return () => clearTimeout(resetTimer);
    }
  }, [index, typing, currentRole]);

  useEffect(() => {
    const roleChangeTimer = setInterval(() => {
      if (!typing) {
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    }, roleChangeInterval);

    return () => clearInterval(roleChangeTimer);
  }, [roles.length, typing]);

  return (
    <div className='w-full px-4 sm:px-8 lg:px-24 flex items-center justify-center'>
      <div className='mx-auto flex flex-col md:flex-row md:gap-10'>
        <div className='flex-1'>
          <div className='flex flex-col gap-2'>
            <p className='text-md font-mono'>Hi all, I am</p>
            <h1 className='text-5xl md:text-4xl lg:text-6xl font-roboto'>Keshav Kumar Yadav</h1>
            <p className='text-md text-[#42d9ac]'>_{displayText}</p>
          </div>
          <div>
            <div>
              <p className='text-sm text-justify font-thin py-3'>
                Committed and goal-oriented Computer Science student at Lovely Professional University, seeking
                a Software Engineering position. Proficient in HTML, CSS, JavaScript, React.js, Node.js, Express,
                and MongoDB. Demonstrated ability to learn quickly and excel in fast-paced, team-oriented
                environments.
              </p>
            </div>
            <div>
              <Link to={'https://github.com/keshavyadav5'} target='_blank' className='text-sm'>
                <span className='text-purple-500'>const </span>
                <span className='text-[#42d9ac]'>githubLink</span>
                <span> = </span>
                <span className='text-[#e99287]'>"https://github.com/keshavyadav5"</span>
              </Link>
            </div>
          </div>
        </div>

        <div className='relative flex-1 hidden md:block'>
          <div className='absolute top-0 left-0 w-1/2 h-60 bg-[#4a9d99] opacity-40 rounded-full blur-2xl shadow-lg animate-pulse transition-all duration-3000' />
          <div>
            {
              showGame ? <Game setShowGame={setShowGame} /> : <Terminal />
            }
          </div>
          <div className='absolute bottom-0 right-0 w-1/2 h-60 bg-[#1e3264] opacity-30 rounded-full blur-2xl shadow-lg animate-pulse' />
        </div>
      </div>
    </div>
  );
};

export default Hello;