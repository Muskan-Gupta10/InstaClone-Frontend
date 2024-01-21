import React from 'react'
import Homebody from './Homebody'
import Navbar from './navbar'
import './home.css'
function Home() {
  return (
    <div id='homewrapper'>
    <Navbar />
    <div id='homebody'>
    <Homebody  />
    </div>
    </div>
  )
}

export default Home
