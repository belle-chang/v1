import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"


function About() {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>about</title>
            </Helmet>
            <h1>Hi,</h1>
            <h2 style={{lineHeight: `40px`}}>I'm Anabelle, a rising junior at Princeton University majoring in Computer Science. 
                I also play for <a href="https://goprincetontigers.com/index.aspx?path=wgolf" style={{textDecoration: `underline`, color: `#ed6700`}}>Princeton Women's Golf</a>.
            </h2>
            <p>YADDA YADDA YADDA. add more stuff. 
                My passions include experimenting with new recipes, perusing <a href="https://www.theverge.com/this-is-my-next/2018/10/5/17927798/best-music-streaming-service-price-comparison-features">Spotify</a> for the latest new hits, and _____.</p>
            <div style={{textDecoration: `underline`}}>Relevant Coursework:</div>
            <p >General Computer Science, Algorithms and Data Structures, Introduction to Programming Systems, Reasoning About Computation, Advanced Programming Techniques, Economics and Computation</p>
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