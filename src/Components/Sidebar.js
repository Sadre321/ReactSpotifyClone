import React from 'react'
import logo from 'img/logo.svg';
import Menu from 'Components/Sidebar/Menu'
import { Icon } from 'Icons';
import PlayLists from './Sidebar/PlayLists';
import DownloadApp from './Sidebar/DownloadApp';
import { useSelector } from 'react-redux';
import SidebarCover from './Sidebar/SidebarCover';

const Sidebar = () => {

  const {sidebar} = useSelector(state=>state.player);

  return (
    <aside className='w-60 pt-6 flex flex-shrink-0 flex-col bg-black'>

      <a href="#" className='mb-7 px-6'>
        <img src={logo} alt='' className='h-10' />
      </a>

      <Menu/>

      <nav className='mt-6 '>
        <ul>
          <li>
            <a href="" className='py-2 px-6 flex items-center text-sm group text-link font-semibold hover:text-white'>
              <span className='w-6 h-6 flex items-center justify-center mr-4 bg-white bg-opacity-70 group-hover:bg-opacity-100 rounded-sm text-black'>
                <Icon name={"plus"} size={12}/>

              </span>
              Çalma Listesi Oluştur 

            </a>
          </li>
          <li>
            <a href="" className='py-2 px-6 flex text-sm text-link font-semibold hover:text-white group'>
              <span className='w-6 h-6 flex items-center justify-center mr-4 bg-gradient-to-br from-purple-700 rounded-sm bg-opacity-70 group-hover:bg-opacity-100  text-white to-blue-300'>
                <Icon name={"heart"} size={12}/>
                 
              </span>
              Beğenilen Şarkılar

            </a>
          </li>
        </ul>
      </nav>  

        <PlayLists/>

        <DownloadApp/>

        {sidebar&&<SidebarCover/>}
    </aside>
  )
}

export default Sidebar