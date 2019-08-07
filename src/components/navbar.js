import React from "react"
import { Link } from "gatsby"
// import "./navbar.css"
import navBarStyles from "./navbar.module.scss"


function NavBar() {
    return (
        <ul>
            <br />
            <br />
            <li ><Link to="/" className={navBarStyles.name}>anabelle chang</Link></li>
            {/* <li style={{ fontSize: `23px`}}><Link to="/">anabelle chang</Link></li> */}
            <li ><Link to="/about" className={navBarStyles.reg}>about</Link></li>
            <li ><Link to="/contact" className={navBarStyles.reg}>contact me</Link></li>

        </ul>
    )
}

export default NavBar