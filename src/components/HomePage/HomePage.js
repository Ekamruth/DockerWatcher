import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { REST_API_URL } from '../../Constants/Constants';
import './HomePage.css'
import { RiStackLine, RiImageLine } from 'react-icons/ri'
import { BsViewStacked } from 'react-icons/bs'
import { MdDisplaySettings } from 'react-icons/md'


const HomePage = () => {

  const [count, setCount] = useState(0);
  const [imgCount, setImgCount] = useState(0);
  const [volCount, setVolCount] = useState(0);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios.get(`${REST_API_URL}/api/containers/count`, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => {
      const item = response.data
      return item
    }).then(item => {
      setCount(item.count)
    })

    axios.get(`${REST_API_URL}/api/images/count`, {
      headers: {
        "Content-Type": "applicatio/json"
      }
    }).then((response) => {
      const item = response.data
      return item
    }).then(item => {
      setImgCount(item.count)
    })

    axios.get(`${REST_API_URL}/api/info`, {
      headers: {
        "Content-Type": "applicatio/json"
      }
    }).then(response => {
      const info = response.data
      setInfo(info)
    })

    axios.get(`${REST_API_URL}/api/volumes`, {
      headers: {
        "Content-Type": "applicatio/json"
      }
    }).then(response => {
      const info = response.data
      setVolCount(info.length)
    })
  }
    , []);

  return (
    <div className='homepage'>
      <h2>
        Welcome to the <span style={{ color: "#0091e2" }}>Docker Watcher</span> Application.
      </h2>

      <div className='system_details'>
        <div className='system_details_heading'>
          <span className='sd_icon'><MdDisplaySettings></MdDisplaySettings></span>
          <span className='sd_heading'>Host details</span>
        </div>
        {info.length === 0 ? <h4>Loading...</h4> :
          <table>
            <tr>
              <th>Architecture</th>
              <td>{info.docker_info.Architecture}</td>
            </tr>
            <tr>
              <th>Host name</th>
              <td>{info.docker_info.Name}</td>
            </tr>
            <tr>
              <th>OS Type</th>
              <td>{info.docker_info.OSType}</td>
            </tr>
            <tr>
              <th>OS Version</th>
              <td>{info.docker_info.OSVersion}</td>
            </tr>
            <tr>
              <th>Kernel Version</th>
              <td>{info.docker_info.KernelVersion}</td>
            </tr>
            <tr>
              <th>IP Address</th>
              <td>{info.host_info.ip_address}</td>
            </tr>
          </table>
        }
      </div>
      <div className='cards'>
        <div className='containers_card'>
          <Link to="/containers"><Card name="CONTAINERS" count={count} icon={<RiStackLine />} /></Link>
        </div>
        <div className='images_card'>
          <Link to="/images"><Card name="IMAGES" count={imgCount} icon={<RiImageLine />} /></Link>
        </div>
        <div className='volumes_card'>
          <Link to="/volumes"><Card name="VOLUMES" count={volCount} icon={<BsViewStacked />} /></Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage
