import React, { useEffect, useState } from 'react';
// import {render} from 'react-dom';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { REST_API_URL } from '../../Constants/Constants';
import './ContainerLogs.css'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import CodeMirror from "@uiw/react-codemirror";
// import { javascript } from "@codemirror/language";
import { loadLanguage } from '@uiw/codemirror-extensions-langs';
import {EditorView} from 'codemirror'
import {EditorState} from '@codemirror/state'
import {search} from '@codemirror/search'



const ContainerLogs = () => {

  const [logs, setLogs] = useState("");
  const params = useParams();
  const container_id = params.id

  useEffect(() => {
    axios.get((`${REST_API_URL}/api/containers/${container_id}/logs?output_type=text`), {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        const items = response.data
        setLogs(items)
      })
  }, [container_id])

  const lines = logs.split("\n")
  const totalLines = lines.length
  const startIndex = Math.max(totalLines-50,0)
  const lastLines = lines.slice(startIndex)
  const results = lastLines.join("\n")
  console.log(results)


  return (
    <div className='logs_page'>
      {/* {logs.length === 0 ? <h1>Loading...</h1> : <div className='log_screen'><ContainerLogScreen logs={logs} /></div>} */}
      <h2>Logs</h2>
      <Link to={`/containers/${container_id}`}>
      <button className='back_btn'>
        <span><AiOutlineArrowLeft/></span>
        <span>Back</span>
      </button></Link>
      {logs.length === 0 ? <h1>Loading...</h1> : <div className='container_logs'>
        <CodeMirror
          value={results}
          theme="dark"
          width='70rem'
          extensions={[loadLanguage('json'),EditorView.editable.of(false), EditorState.readOnly.of(true), EditorView.lineWrapping, search({top: true})]}
          basicSetup={{foldGutter: true}}
        /> 
      </div>}
    </div>
  )


}

export default ContainerLogs


