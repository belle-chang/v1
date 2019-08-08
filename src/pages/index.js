import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
// import Img from "gatsby-image"
import "../styles/index.scss"

function IndexPage( { data } ) {
    // console.log("hi")
    console.log(data.allMarkdownRemark)
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>home</title>
            </Helmet>
            <h1>My projects!</h1>
            {/* {data.allMarkdownRemark.edges.map(({ node }) => 
            (
                <div className="img__wrap">
                    <Link to={`/projects/${node.fields.slug}`}>
                    <h3 className="img__description__name">{node.frontmatter.tile}</h3><br/>
                        <p className="img__description">{node.frontmatter.description}</p>
                        <img className="img__img" src={node.frontmatter.image} alt={node.frontmatter.tile} key={node.frontmatter.id}/>
                        
                    </Link>
                    
                </div> 
            ))} */}
            
            {data.allMarkdownRemark.edges.map(({ node }) => 
            (
                <Link to={`/projects/${node.fields.slug}`}>

                <div className="container">
                        <img className="image" src={node.frontmatter.image} alt={node.frontmatter.tile} key={node.frontmatter.id}/>

                    <div className="overlay">
                        <div className="text">
                        <div style={{fontSize: `25px`, fontWeight: `bold`}}>{node.frontmatter.tile}</div>
                        {node.frontmatter.description}
                        </div>
                    </div>
                </div>
                </Link>                
            ))}

            {/* <Img
                className="headshot"
                fluid={data.file.childImageSharp.fluid}
                alt=""
            /> */}
            <br />
            <br />

        </Layout>
    )
}
export const query = graphql`
    query {
        allMarkdownRemark (
            sort: {
                fields: [frontmatter___key]
                order: ASC
              }
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        date
                        image
                        tile
                        description
                        key
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`

// export const query = graphql`
//     query {
//         allTilesYaml {
//             edges {
//                 node {
//                     image
//                     name
//                     description
//                 }
//             }
//         }
//     }
// `

// export const query = graphql`
//     query {
//         allPhotosYaml {
//             edges {
//                 node {
//                     image {
//                         childImageSharp {
//                             fluid {
//                                 ...GatsbyImageSharpFluid
//                             }
//                         }
//                         name
//                     }
//                 }
//             }
//         }
//     }
// `

// query {
    //     file(relativePath: { eq: "projects/tigerride/yakult.jpg" }) {
    //         childImageSharp {
    //             fluid {
    //                 ...GatsbyImageSharpFluid
    //             }
    //         }
    //     }
    // }

export default IndexPage


// export 