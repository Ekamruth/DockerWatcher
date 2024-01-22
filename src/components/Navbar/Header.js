import React from 'react'
import './Header.css'
import docker_icon from '../../docker-icon2.png'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className='header-nav'>
      <div className='h-left'>
        <Link to='/'><img src={docker_icon} alt="" className='header-icon'/></Link>
      </div>
      <div className='h-right'>
        <p>
          Docker-Watcher
        </p>
      </div>
    </div>
  )
}

export default Header
