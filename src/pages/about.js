import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import "../styles/all.scss"
import { Link } from "gatsby";
import favicon from "../../static/favicon.ico"


function About() {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>ABOUT</title>
                <link rel="icon" href={favicon} />
                
            </Helmet>
            <h1>Hi,</h1>
            <h2 style={{lineHeight: `40px`}}>I'm Anabelle, a rising junior at Princeton University majoring in Computer Science. 
                I also play for <a href="https://goprincetontigers.com/index.aspx?path=wgolf" style={{textDecoration: `underline`, color: `#ed6700`}}>Princeton Women's Golf</a>.
            </h2>
            <p>
                {/* My passions include experimenting with new recipes, perusing <a className="link" href="https://www.theverge.com/this-is-my-next/2018/10/5/17927798/best-music-streaming-service-price-comparison-features">Spotify</a> for the latest new hits, and _____. */}
                My primary interest is exploring how computer science can be intertwined with other fields, such as medicine or sports, to evolve or create innovative technologies. I would love to work in software development/engineering or project management. Other passions of mine include experimenting with new recipes, 
                perusing Spotify for the latest new hits, and hitting up my local hiking trails. 
                {/* <a className="link" href="https://www.theverge.com/this-is-my-next/2018/10/5/17927798/best-music-streaming-service-price-comparison-features">
                    Spotify
                    </a> 
                    for the latest new hits, and hitting up my local hiking trails.  */}
                {/* I'm most interested in seeing how computer science can intertwine with other fields, such as medicine and sports, to evolve or create innovative techologies.  */}
                <br/>
                <br/>
                I'm currently seeking internship opportunities for the summer of 2020 – you can reach me <Link to="/contact" className="link">here</Link> or email me at: <div style={{display: `inline`}} className="link">anabelle[at]princeton[dot]edu</div>.
                <br/>
                <br/>
            </p>
            
            <div style={{textDecoration: `underline`,fontWeight: `700`}}>Here are a few technologies I've been working with recently:</div>
            <p>Java, Python, Django, React, PostGres, HTML & CSS</p>
            

            <div style={{textDecoration: `underline`,fontWeight: `700`}}>Relevant Coursework:</div>
            <p >General Computer Science, Algorithms and Data Structures, Introduction to Programming Systems, Reasoning About Computation, Advanced Programming Techniques, Economics and Computation, Computer Vision (in progress), Contemporary Logic Design (in progress), Mobile/Wearable Design for Medical Technology (in progress)</p>
            {/* <ul>
                <li>General Computer Science</li>
                <li>Algorithms and Data Structures,</li>
                <li>Introduction to Programming Systems</li>
                <li>Reasoning About Computation</li>
                <li>Advanced Programming Techniques</li>
                <li>Economics and Computation</li>
            </ul>
            <p></p> */}
            {/* <p> need a dev?<a href="/blog">contact me bro.</a></p> */}
            {/* <p> need a dev?<Link to="/blog">contact me bro.</Link></p> */}
            
        </Layout>
    )
}

export default About
