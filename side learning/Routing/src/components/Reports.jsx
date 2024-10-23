import React from 'react';
import { Outlet } from 'react-router-dom';

const Reports = () => {
  return(
    <div>
      Reports Section
      <Outlet/>
    </div>
  )
}

export default Reports;