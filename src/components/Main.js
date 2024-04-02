import React from 'react';

import { useParams } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import Details from './Details';

function Main() {
  let { lanaguage } = useParams();

  dispatchEvent({ type: 'LANGUAGE', payload: lanaguage });

  return (
    <Routes>
      <Route path='/' element={<Details />} />
    </Routes>
  );
}

export default Main;
