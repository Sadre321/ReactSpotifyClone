import { Icon } from 'Icons'
import React from 'react'

const DownloadApp = () => {
  return (
    <a href='#' className='h-10 px-6 flex flex-shrink-0 gap-x-4 text-sm font-semibold text-link hover:text-white  items-center'>
        <Icon name={"download"} size={20}/>
        Uygulamayı Yükle
    </a>
  )
}

export default DownloadApp