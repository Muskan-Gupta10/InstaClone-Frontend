import React from 'react'
import './addpost.css'
import Navbar from './navbar'
import Postform from './Postform'

function Addpost() {
  return (
    <div>
      <Navbar />
      <div id="postformcontainer">
      <Postform />
      </div>
    </div>
  )
}

export default Addpost
