import React, { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';

function Details() {

  const [view, setView] = useState('');

  const { course } = useParams();

  useEffect(() => {
    setView(course);
  }, [course]);

  return (
    <main className='relative w-full lg:ml-64'>
      <Header />
      <div className='w-full md:max-w-7xl mx-auto flex items-start justify-start gap-4'>
        <div className='w-3/4 lg:border-r-[1px] min-h-[100vh] flex flex-col items-start justify-start  border-gray-400 p-4'>
          <hgroup className='w-full h-[70px] flex items-center justify-start py-4'>
            <h1 className='capitalize text-2xl font-medium'>{ view === '' ? 'Home' : view}</h1>
          </hgroup>
          <p>This is a {view === '' ? 'Home' : view} container.</p>
        </div>
        <div className='hidden lg:flex w-1/4 p-4'></div>
      </div>
    </main>
  )
}

export default Details