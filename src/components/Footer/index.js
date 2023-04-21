import github from "./assets/github.png"
import linkedin from "./assets/linkedin.png"
import React from 'react'
import "./style.css"

export const Footer = () => {
  return (
    <footer>
        <div id="footer-icons">
            <img src={github} alt=''></img>
            <img src={linkedin} alt=''></img>
        </div>
    </footer>
  )
}

export default Footer;