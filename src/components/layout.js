import React from "react"
import NavBar from "./navbar"
import layoutStyles from "./layout.module.scss"
// import '../styles/index.scss'

function Layout(props) {
    return (
        <div className={layoutStyles.all}>
            <NavBar />
            <div className={layoutStyles.body}>
                <br />
                <br />

            {props.children}
            </div>
                
        </div>
    )
}
export default Layout