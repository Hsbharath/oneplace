import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Details from './Details';
import Home from './Home';

function Main() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:course' element={<Details />} />
    </Routes>
  );
}

export default Main;
