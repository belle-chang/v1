import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import "../styles/index.scss"

function IndexPage( { data } ) {
    console.log("hi")
    console.log(data.allTestsYaml)
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>home</title>
            </Helmet>
            {/* <h1>this is the index page.</h1> */}
            {/* /* <div class="img__wrap">
                <p className="img__description">hi testing 123</p>
                <img className="img__img" src={'tigerride.jpg'} alt="hi"/>
            </div> */}
        
            {data.allTestsYaml.edges.map(({ node }) => 
            (
                <div class="img__wrap">
                    <p className="img__description">{node.name}</p>
                    <img className="img__img" src={node.image} alt={node.name}/>
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
        allTestsYaml {
            edges {
                node {
                    image
                    name
                }
            }
        }
    }
`

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