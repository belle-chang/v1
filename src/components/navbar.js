import React from "react"
import { Link } from "gatsby"
// import "./navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGithub,
    faInstagram,
    faLinkedin,
    faMediumM,
    faTwitter,
    faYoutube
  } from '@fortawesome/free-brands-svg-icons'
import navBarStyles from "./navbar.module.scss"


function NavBar() {
    return (
        <div>
            <ul>
            <br />
            <br />
            <li ><Link to="/" className={navBarStyles.name}>anabelle chang</Link></li>
            {/* <li style={{ fontSize: `23px`}}><Link to="/">anabelle chang</Link></li> */}
            <li ><Link to="/about" className={navBarStyles.reg}>about</Link></li>
            <li ><Link to="/contact" className={navBarStyles.reg}>contact me</Link></li>
            <li>
                <a href="https://github.com/belle-chang"
                    className={navBarStyles.reg}
                    style={{fontSize: `25px`}}>
                        <FontAwesomeIcon icon={faGithub}/>
                </a>
                <a href="/"
                    className={navBarStyles.reg}
                    style={{fontSize: `25px`}}>
                        <FontAwesomeIcon icon={faLinkedin}/>
                </a>
            </li>
            
            </ul>
        </div>
       
    )
}

export default NavBar