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
                <div className={navBarStyles.tooltip}>
                    <a href="https://github.com/belle-chang"
                            target="_blank"
                            className={navBarStyles.reg}
                            style={{fontSize: `25px`, textAlign: `center`}}>
                                <FontAwesomeIcon icon={faGithub}/>
                        </a>
                    <span className={navBarStyles.tooltiptext}>
                        check out my latest work!
                    </span>
                </div>                
            </li>
            <li>
            <div className={navBarStyles.tooltip}>
                    <a href="https://www.linkedin.com/in/anabelle-chang-620362102"
                        target="_blank"
                        className={navBarStyles.reg}
                        style={{fontSize: `25px`}}>
                            <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                    <span className={navBarStyles.tooltiptext}>
                        connect with me
                    </span>
                </div>
            </li>
            
            </ul>
        </div>
       
    )
}

export default NavBar