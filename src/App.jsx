
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'
import SearchBox from './components/SearchBox'

function App() {

  /*
  ca872e9f2fe655d0497cddba27c83869
  api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=ca872e9f2fe655d0497cddba27c83869
  */
  return (
    <div>
      <SearchBox></SearchBox>
    </div>
  )
}



export default App
