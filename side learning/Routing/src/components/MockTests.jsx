import React from 'react';
import { Outlet } from 'react-router-dom';

const MockTests = () => {
  return(
    <div>
      MockTests Section
      <Outlet/>
    </div>
  )
}

export default MockTests;