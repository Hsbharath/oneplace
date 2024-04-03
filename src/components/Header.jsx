import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaBars, FaRegUser} from "react-icons/fa";

function Header() {

  const [view, setView] = useState('');

  const { course } = useParams();

  useEffect(() => {
    const value = course === undefined ? 'Home' : course;
    setView(value);
  }, [course]);

  return (
    <header className="sticky top-0 left-0 right-0 w-full h-[70px] flex items-center justify-start bg-white gap-4 p-4 z-40 border-b-[1px] border-gray-400">
        <div className='flex lg:hidden'>
          <button className='rounded-full w-12 h-12 flex items-center justify-center  bg-red-400/40'>
            <FaBars size={18}/>
          </button>
        </div>
        <hgroup className='w-full h-[70px] flex items-center justify-start py-4'>
          <h1 className='capitalize text-2xl font-medium'>{ view === '' ? 'Home' : view }</h1>
        </hgroup>
        <div className='hidden lg:flex'>
          <button className='rounded-full w-12 h-12 flex items-center justify-center  bg-red-400/40'>
            <FaRegUser size={18}/>
          </button>
        </div>
    </header>
  )
}

export default Header