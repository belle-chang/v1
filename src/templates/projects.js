import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import '../styles/all.scss'
import favicon from "../../static/favicon.ico"


export const query = graphql`
query ($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
        date
        imgname
        tile
        description
        key
      }
      html
    }
  }  
`

function Projects(props) {
    // console.log("hyi")
    let str = props.data.markdownRemark.html
    let new_str = str.replace("<a", "<a style={{color: `black`, text-decoration: `none`, border-bottom: `1px dotted black`,}} className='link'");
    // console.log(str)
    // console.log(new_str)


    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{props.data.markdownRemark.frontmatter.tile}</title>
                <link rel="icon" href={favicon} />
            </Helmet>
            <div style={{display:`inline`}}>
              <h1 style={{display:`inline`}}>
                  {props.data.markdownRemark.frontmatter.title}    </h1>
              <p style={{display:`inline`, 
                          fontSize: `17px`, 
                          color: `#555555`}}>
                  {props.data.markdownRemark.frontmatter.date}
              </p>
            </div>
            <br />
            <br />
            <div dangerouslySetInnerHTML={{
                __html: new_str
            }}></div>
            <br />
            <br />
            <br />
        </Layout>
    )
}

export default Projects