import React from 'react'
import { useRouteError } from 'react-router'

const Error = () => {
  const err = useRouteError()
  return (
    <div style={{display : 'flex', justifyContent : 'center' , alignItems : 'center' , width : '100vw', height : '100vh'}}>
      <h2>{err.status + ' ' + err.statusText}</h2>
    </div>
  )
}

export default Error
