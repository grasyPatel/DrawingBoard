import React from 'react'
import { Tldraw } from 'tldraw'
import 'tldraw/tldraw.css'

const Test = () => {
  
  return (
    <>
    <div style={{ position: 'fixed', inset: 0 }}>
        <Tldraw persistenceKey="example" />
    </div>
    </>
  )
}

export default Test