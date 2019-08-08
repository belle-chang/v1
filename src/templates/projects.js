import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
export const query = graphql`
query ($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
        date
        image
        tile
        description
        key
      }
      html
    }
  }  
`

function Projects(props) {
    console.log("hyi")
    console.log(props.data)

    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{props.data.markdownRemark.frontmatter.tile}</title>
            </Helmet>
            
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{
                __html: props.data.markdownRemark.html
            }}></div>
        </Layout>
    )
}

export default Projects