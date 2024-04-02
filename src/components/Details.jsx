import React from 'react';
import Header from './Header';

function Details() {
  return (
    <main className='relative w-full lg:ml-64'>
      <Header />
      <div className='w-full md:max-w-7xl mx-auto flex items-start justify-start gap-4'>
        <div className='w-3/4 lg:border-r-[1px] min-h-[100vh] flex flex-col items-start justify-start  border-gray-400 p-4'>
          <h2>Javascript</h2>
          <p>This is a Javascript container.</p>
        </div>
        <div className='hidden lg:flex w-1/4 p-4'></div>
      </div>
    </main>
  )
}

export default Details