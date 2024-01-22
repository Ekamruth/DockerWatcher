import React, { useEffect, useState } from 'react'
import { REST_API_URL } from '../../Constants/Constants';
import './ImagesData.css'
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';

const ImagesData = () => {

const [data, setData] = useState([]);

useEffect(()=>{
  axios.get(`${REST_API_URL}/api/images`,{
    headers:{
      "Content-Type": "application/json"
    }
  }).then(response =>{
    const data = response.data
    setData(data)
  })},[]);

  const columns = [
    { field: 'image', headerName: 'Image', width: 300 },
    { field: 'created', headerName: 'Created (GMT)', width: 500 },
    {field: 'container', headerName: 'Container', width:400},
    // Add more columns as needed
  ];
  
  const rows = data.map((item)=>{
    return({id:item.Created, image: item.Config.Image.slice(0, 10), created: new Date(item.Created).toGMTString().slice(0,-3), container: item.Container.slice(0,10)})
  })

  const getRowId = (row)=> row.id

  const MyTable = () => {
    console.log(rows)
    return (
      <div style={{ height: 500, width: '100%' }} className='images-table'>
        <DataGrid rows={rows} columns={columns} getRowId={getRowId} PageSize={10}/>
      </div>
    );
  };
  
  // const renderTable = (data) => {
  //   const tableData = data.map((item) => {
  //     return (
  //       <tr key={item.Config.Image} className='row'>
  //         {/* <td>{item.Name.slice(1)}</td> */}
  //         {/* <td>{item.Id.slice(0, 10)}</td> */}
  //         <td>{item.Config.Image.slice(0, 10)}</td>
  //         <td>{new Date(item.Created).toGMTString().slice(0,-3)}</td>
  //         <td>{item.Container.slice(0,10)}</td>
  //       </tr>
  //     )
  //   });

  //   const table = (
  //     <table>
  //       <thead>
  //         <tr className='heading_row'>
  //           <th>Image</th>
  //           <th>Created (GMT)</th>
  //           <th>Container</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {tableData}
  //       </tbody>
  //     </table>
  //   )
  //   return (
  //     <div className='images-table'>
  //       {tableData ? table : 'Loading...'}
  //     </div>
  //   )
  // };

  // return renderTable(data);
  return(
    <>
    <div className='images_page'>
      <h2 className='container_heading'>Images</h2>
      {MyTable()}  
    </div>
    </>
  )
}


export default ImagesData
