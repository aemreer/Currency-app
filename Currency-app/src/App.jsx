import { useState } from 'react'
import './App.css'
import Currenc from './components/Currenc'

function App() {

  return (

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Currenc />
    </div>

  )
}

export default App
