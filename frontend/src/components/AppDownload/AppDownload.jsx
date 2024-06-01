import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>Download App for Better Experience</p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="" className="" />
            <img src={assets.app_store} alt="" className="" />
        </div>
    </div>
  )
}

export default AppDownload