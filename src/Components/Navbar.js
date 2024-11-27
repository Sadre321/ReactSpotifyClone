import React from 'react'
import Auth from './Navbar/Auth'
import { useMatch } from 'react-router-dom'
import Search from './Navbar/Search';

const Navbar = () => {

  const searchRoute = useMatch("/search");

  return (
    <nav className={`h-[3.75rem] flex items-center ${searchRoute?'justify-between':'justify-end'} px-8 relative z-50`}>
      
      {searchRoute&&<Search/>}

      <Auth/>

    </nav>
  )
}

export default Navbar