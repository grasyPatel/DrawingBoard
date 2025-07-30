import React from 'react'
import { Tldraw } from 'tldraw'
import { useSyncDemo } from '@tldraw/sync'
import 'tldraw/tldraw.css'
import { useParams } from 'react-router'

const Real = () => {
const {roomId}=useParams()
const store = useSyncDemo({ roomId:roomId})

  return (
    <>
    <div style={{ position: 'fixed', inset: 0 }}>
        <Tldraw  store={store} />
    </div>
    </>
  )
}

export default Real