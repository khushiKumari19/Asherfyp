import React from 'react'
import Navbar from '../Navbar/Navbar'

const Header = (props) => {
  return (
    <>
        <Navbar/>
        {props.children}
    </>
  )
}

export default Header