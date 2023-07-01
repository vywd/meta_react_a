import React from 'react'
import './header.css'

export const Header = () => {
  return (
    <div className='header'>
        <div className='header_left'>
            <a href="https://www.linkedin.com/in/vladislav-y-a675a1230/" className='linkedin'></a>
            <a href="https://www.codewars.com/users/vywd" className='codewars'></a>
            <a href="mailto:vywebdev@gmail.com" className='mail'></a>
        </div>
        <div className='header_right'>
            <a href="#proj">Projects</a>
            <a href="#cont">Contact me</a>
        </div>
    </div>
  )
}
