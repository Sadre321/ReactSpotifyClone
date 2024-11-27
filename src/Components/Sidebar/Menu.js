import React from 'react'
import { Icon } from "Icons";
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <nav className='px-2'>
            <ul>
      <li>
        <NavLink 
          to={"/"} 
          className={({ isActive }) =>
            `h-10 flex gap-x-4 items-center text-sm font-semibold rounded px-4 ${
              isActive ? 'bg-active text-white' : 'text-link hover:text-white'
            }`
          }
        >
          <span>
            <Icon name="home" />
          </span>
          Ana sayfa
        </NavLink>
      </li>
      <li>
        <NavLink 
          to={"/search"} 
          className={({ isActive }) =>
            `h-10 flex gap-x-4 items-center text-sm font-semibold rounded px-4 ${
              isActive ? 'bg-active text-white' : 'text-link hover:text-white'
            }`
          }
        >
          <span>
            <Icon name="search" />
          </span>
          Ara
        </NavLink>
      </li>
      <li>
        <NavLink 
          to={"/library"} 
          className={({ isActive }) =>
            `h-10 flex gap-x-4 items-center text-sm font-semibold rounded px-4 ${
              isActive ? 'bg-active text-white' : 'text-link hover:text-white'
            }`
          }
        >
          <span>
            <Icon name="library" />
          </span>
          Kitaplığın
        </NavLink>
      </li>
    </ul>
        </nav>
    )
}

export default Menu