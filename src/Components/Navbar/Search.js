import { Icon } from 'Icons'
import React from 'react'

const Search = () => {
  return (
    <div className='mr-auto ml-4 relative'>
        <label htmlFor="search-ipnut" className='text-black w-12 h-10 flex items-center justify-center absolute top-0 left-0'>
             <Icon size={24} name={"search"}/>
        </label>
        <input autoFocus type="text" id='search-ipnut' className='h-10 font-medium pl-12 outline-none text-black bg-white rounded-3xl text-sm max-w-full w-[22.75rem]  placeholder-black/50 ' placeholder="Sanatçılar, şarkılar veya podcast'ler"/>
    </div>
  )
}

export default Search