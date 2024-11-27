import React from 'react'
import Navbar from "Components/Navbar";
import { Outlet } from 'react-router-dom';

const Content = () => {
  return (
    <div className='flex-auto overflow-auto'>
      <Navbar/>
      <div className={"px-6 py-5"}>
        <Outlet/>
      </div>
    </div>
  )
}

export default Content