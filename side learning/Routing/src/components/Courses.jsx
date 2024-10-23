import React from 'react';
import { Outlet } from 'react-router-dom';

const Courses = () => {
  return(
    <div>
      Courses Section
      <Outlet/>
    </div>
  )
}

export default Courses;