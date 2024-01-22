import React, { useState, useEffect } from 'react';
import './ContainerData.css'
import axios from 'axios';
import { REST_API_URL } from '../../Constants/Constants';
import { Link } from 'react-router-dom';
import {AiOutlineReload} from 'react-icons/ai'
import {RiStackLine} from 'react-icons/ri'
// import { useLoaderData } from 'react-router-dom';
// import { DataGrid, useGridApiContext } from '@mui/x-data-grid';
// import { Button } from '@mui/material';
// import { useGridApiRef } from '@mui/x-data-grid';
// import {Link} from '@mui/material'
// import { CTable, CTableRow } from '@coreui/react'

function KeyValueTable() {

  const [data, setData] = useState([]);
  // const [reload, setReload] = useState(false);
  // const resData = useLoaderData();
  // setData(resData)
  // setData(loadedData);

  useEffect(() => {
    axios.get(`${REST_API_URL}/api/containers`, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      const data = response.data
      setData(data)
      // setReload(false)
    })
  }, []);

  // const startHandler = (name) => {
  //   axios.post(`${REST_API_URL}/api/containers${name}/start`, {
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   })}

  const renderTable = (data) => {
    const tableData = data.map((item) => {
      return (
        <tr key={item.Name.slice(1)} className='row'>
          <td>{item.Name.slice(1)}</td>
          <td><Link to={`/containers/${item.Id}`} className='details_link'>{item.Id.slice(0, 10)}</Link></td>
          <td>{new Date(item.Created).toGMTString().slice(0, -3)}</td>
          <td className={
            item.State.Status === 'running' ? 'status_green' : 'status_red'
          }>{item.State.Status}</td>
          <td>{item.Config.Image}</td>
          <td>{item.Image.slice(0, 10)}</td>
          {/* <td><Link to={`/containers/${item.Id}/logs`}><button className='log-btn'>Logs</button></Link></td>
          <td><button className='start-btn' onClick={() => startHandler(item.Name, item.State.Status)}>Start</button></td>
          <td><button className='stop-btn' onClick={() => stopHandler(item.Name, item.State.Status)}>Stop</button></td> */}
          {/* <td><button className='start-btn' onClick={() => startHandler(item.Name)}>Start</button></td> */}
        </tr>
      )
    });

    const table = (
      <table>
        <thead>
          <tr className='heading_row'>
            <th>Name</th>
            <th>Container Id</th>
            <th>Created (GMT)</th>
            <th>Status</th>
            <th>Image Name</th>
            <th>Image</th>
            {/* <th>Logs</th>
            <th>Toggle Start</th>
            <th>Toggle Stop</th> */}
            {/* <th>Start</th> */}
          </tr>
        </thead>
        <tbody>
          {tableData}
        </tbody>
      </table>
    )
    return (
      <div className='containers_page'>
        <div className='containers_page__heading'>
          <span className='containers_icon'><RiStackLine></RiStackLine></span>
          <span className='containers_page_left'>Containers</span> 
          <span className='reload_icon'><button className='reload_btn'><AiOutlineReload></AiOutlineReload></button></span>
        </div>
        <p>Here are the list of containers and their statuses.    Click on the container Id to look at its details and to access control.</p>
        <div className='data-table'>
          {!data ? 'Loading...' : table}
        </div>
      </div>
    )
  };

  return renderTable(data);
}


export default KeyValueTable;


// export const loader = ()=> {
//   console.log("reloaded")
//   const responseData = axios.get(`${REST_API_URL}/api/containers`, {
//     headers: {
//       "Content-Type": "application/json"
//     }
//   }).then(response=> {
//       const ax_data= response.data
//       return ax_data
//   })
//   return responseData
// }