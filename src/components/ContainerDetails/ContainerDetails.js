import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { REST_API_URL } from '../../Constants/Constants';
import { Link } from 'react-router-dom';
import './ContainerDetails.css'
import { Alert, AlertTitle } from '@mui/material'
import { BsPlay, BsStop, BsBox } from 'react-icons/bs'
import { AiOutlineUnorderedList, AiOutlineSetting } from 'react-icons/ai'
import { RiFileListLine } from 'react-icons/ri'
// import { json } from 'react-router-dom';

const ContainerDetails = () => {
  const [data, setData] = useState([]);
  const [alert, setAlert] = useState(false);
  const [success, setSuccess] = useState(false);

  const params = useParams()
  const container_id = params.id
  useEffect(() => {
    axios.get(`${REST_API_URL}/api/containers/${container_id}`, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      // if(!response.ok){
      //   throw json({message:"Couldnt fetch data"},{status:404})
      // }else{
      const data = response.data
      setData(data)
    }
    )
  }, [container_id, success])

  const startHandler = (name) => {
    axios.post(`${REST_API_URL}/api/containers${name}/start`, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      console.log(response.data)
      if (response.data.message === 'Container started successfully') {
        setAlert(true)
        setSuccess(true)
      }
    })
  }

  const stopHandler = (name) => {
    axios.post(`${REST_API_URL}/api/containers${name}/stop`, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      console.log(response.data)
      if (response.data.message === 'Container stopped successfully') {
        setAlert(true)
        setSuccess(false)
      }
    })
  }

  return (
    data.length === 0 ? 'Loading...' :
      (<div className='container_details'>
        <div className='container_details_head'>
          <div className='container_details_left'>
            <h2>Details of "{data.Name.slice(1)}"</h2>
          </div>
          <div className='alert'>
            {alert === true && success === true ? <Alert severity="success" onClose={() => { setAlert(false) }}>
              <AlertTitle>Initiated</AlertTitle>
              Container <strong>initiated</strong> Successfully!
            </Alert> : ''}
            {alert === true && success === !true ? <Alert severity="success" onClose={() => { setAlert(false) }}>
              <AlertTitle>Exited</AlertTitle>
              Container <strong>exited</strong> Successfully!
            </Alert> : ''}
          </div>
        </div>
        {/* <div className='access_btns'>
          <Link to={`/containers/${data.Id}/logs`}><button className='log-btn'>Logs</button></Link>
          <div className='access_btns_right'>
            <button className='start-btn' onClick={() => startHandler(data.Name)}>
              <span className='icon_btn'><BsPlay></BsPlay></span>
              <span className='btn_txt'>Start</span> 
              </button>
            <button className='stop-btn' onClick={() => stopHandler(data.Name)}>
              <span className='icon_btn'><BsStop></BsStop></span>
              <span className='btn_txt'>Stop</span>
              </button>
          </div>
        </div> */}
        <div className='actions_box'>
          <div className='actions_tab'>
            <span className='actions_icon'><AiOutlineSetting></AiOutlineSetting></span>
            <span className='actions_txt'>Actions</span>
          </div>
          <div className='btn_bar'>
            <button className='btn_bar_tab'>
              <span className='tab_icon list_icon'><RiFileListLine></RiFileListLine></span>
              <span className='tab_txt'>
                <Link to={`/containers/${data.Id}/logs`}>Logs</Link>
              </span>
            </button>

            <button className='btn_bar_tab' onClick={() => startHandler(data.Name)}>
              <span className='tab_icon'><BsPlay></BsPlay></span>
              <span className='tab_txt'>Start</span>
            </button>

            <button className='btn_bar_tab stop_btn' onClick={() => stopHandler(data.Name)}>
              <span className='tab_icon'><BsStop></BsStop></span>
              <span className='tab_txt'>Stop</span>
            </button>
          </div>
        </div>

        <div className='container_status_flex'>
          <div className='container_status_table'>
            <div className='status_heading'>
              <span className='status_icon'><BsBox></BsBox></span>
              <span className='status_txt'>Container status</span>
            </div>
            <table>
              <tr>
                <th>ID</th>
                <td className='hover-text'>{data.Id.slice(0,15)}...
                <span className='tooltip-text top'>{data.Id}</span></td>
              </tr>
              <tr>
                <th>Created</th>
                <td>{new Date(data.Created).toGMTString()}</td>
              </tr>
              <tr>
                <th>Hostname</th>
                <td>{data.Config.Hostname}</td>
              </tr>
              <tr>
                <th>Status</th>
                <td className={
                  data.State.Status === 'running' ? 'status_green' : 'status_red'}>{data.State.Status}</td>
              </tr>
              <tr>
                <th>Started At</th>
                <td>{new Date(data.State.StartedAt).toGMTString()}</td>
              </tr>
            </table>
          </div>

          <div className='container_status_table'>
            <div className='status_heading'>
              <span className='status_icon'><AiOutlineUnorderedList></AiOutlineUnorderedList></span>
              <span className='status_txt'>Container details</span>
            </div>
            <table>
              <tr>
                <th>Image name</th>
                <td>{data.Config.Image}</td>
              </tr>
              <tr>
                <th>Image</th>
                <td className='hover-text'>{data.Image.slice(0,15)}...
                <span className='tooltip-text top'>{data.Image}</span>
                </td>
              </tr>
              <tr>
                <th>Path</th>
                <td>{data.Path}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>)
  )
}

export default ContainerDetails


