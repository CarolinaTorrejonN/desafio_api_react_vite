import { useState, useEffect } from 'react'
import MiApi from './components/MiApi'
import 'bootstrap/dist/css/bootstrap.min.css';

const App =()=>{
  return (
    <div className='container'>
      <h1>Rick and Morty desde App</h1>
      <MiApi/>
    </div>
  )
}

export default App
