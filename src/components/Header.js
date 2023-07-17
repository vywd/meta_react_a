import React, {useState, useEffect} from 'react'
import './header.css'

export const Header = () => {

  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);

  useEffect(() => {
    window.onscroll = function() {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.position = "sticky";
        document.getElementById("header").style.top = "0";
        document.getElementById("header").style.left = "0";
        document.getElementById("header").style.zIndex = "100";
      } else {
        document.getElementById("header").style.top = "-50px";
      }
      setPrevScrollpos(currentScrollPos);
    }
  }, [prevScrollpos]);

  return (
    <div className='header' id='header'>
        <div className='header_left'>
            <a href="https://www.linkedin.com/in/vladislav-y-a675a1230/" className='linkedin scaledclass'></a>
            <a href="https://www.codewars.com/users/vywd" className='codewars scaledclass'></a>
            <a href="mailto:vywebdev@gmail.com" className='mail scaledclass'></a>
        </div>
        <div className='header_right'>
            <a href="#proj" className='scaledclass'>Projects</a>
            <a href="#cont" className='scaledclass'>Contact me</a>
        </div>
    </div>
  )
}
