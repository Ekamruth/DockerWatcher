import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { REST_API_URL } from '../../Constants/Constants';

const VolumesPage = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${REST_API_URL}/api/volumes`, {
      headers: {
        "Content-Type": "applicatio/json"
      }
    }).then(response => {
      const info = response.data
      console.log(info)
      setData(info)
    })
  }, []);

  const volumesTable = data.map((item) => {
    return (
      <tr>
        <td>{item.Name}</td>
        <td>{new Date(item.CreatedAt).toGMTString().slice(0, -3)}</td>
        <td>{item.Driver}</td>
        <td>{item.Mountpoint}</td>
      </tr>
    )
  }
  )

  return (
    <div>
      <h2>Volumes</h2>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Created At</th>
              <th>Driver</th>
              <th>Mountpoint</th>
            </tr>
          </thead>
          <tbody>
            {volumesTable}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default VolumesPage
