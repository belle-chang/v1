import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyles from "./header.module.scss"


function Header() {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <div>
            <h1>{data.site.siteMetadata.title}</h1>
            <ul>
                <li><Link className={headerStyles.link} to="/blog">Blog</Link></li>
            </ul>
        </div>
    )
}

export default Header