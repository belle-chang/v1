import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
// import Img from "gatsby-image"
import "../styles/index.scss"

function IndexPage( { data } ) {
    console.log("hi")
    console.log(data.allMarkdownRemark)
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>home</title>
            </Helmet>
            <h1>My projects!</h1>
        
            {data.allMarkdownRemark.edges.map(({ node }) => 
            (
                <div className="img__wrap">
                    <h3 className="img__description__name">{node.frontmatter.tile}</h3><br/>
                    <p className="img__description">{node.frontmatter.description}</p>
                    <img className="img__img" src={node.frontmatter.image} alt={node.frontmatter.tile} key={node.frontmatter.id}/>
                </div> 
            ))}
            

            {/* <Img
                className="headshot"
                fluid={data.file.childImageSharp.fluid}
                alt=""
            /> */}
            {/* <ol style={{listStyleType: `none`}}> */}
                {/* <li>
                    {data.allPhotosYaml.edges.map(({ node }) => (
                        <div>
                            <p>{node.image.name}</p>
                            <Img 
                                fluid={node.image.childImageSharp.fluid} 
                                alt={node.alt} 
                            />
                            <br />
                        </div>
                        
                    ))}
                </li> */}
            {/* </ol> */}
        </Layout>
    )
}
export const query = graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        title
                        date
                        image
                        tile
                        description
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