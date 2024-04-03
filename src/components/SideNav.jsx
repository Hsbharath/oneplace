import React from 'react';

import NavBar from './NavBar';

function SideNav() {
  return (
    <nav className='fixed top-0 left-0 h-full w-64 overflow-y-auto z-50 bg-white md:border-r-[1px] border-gray-400'>
      <NavBar />
    </nav>
  );
}

export default SideNav;
