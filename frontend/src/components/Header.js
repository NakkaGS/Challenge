import React from 'react'

//Router
import { LinkContainer } from "react-router-bootstrap";

//Boostrap Components
import { Image } from "react-bootstrap"; //installed using the console

function Header() {
  return (
    <div className='site-header'>
      <h2 className='site-title pt-5'>
        Scrapper Web
      </h2>
      <h3 className='site-title mt-3'>
        Developing for Fun!
      </h3>

    </div>
  )
}

export default Header