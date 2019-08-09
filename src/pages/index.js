import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
// import Img from "gatsby-image"
import "../styles/index.scss"

function IndexPage( { data } ) {
    // console.log("hi")
    // console.log(data.allMarkdownRemark)
    // console.log(Object.keys(data.allMarkdownRemark.edges).length);
    let length = Object.keys(data.allMarkdownRemark.edges).length
    if (length % 2 == 1) length = length + 1
    let col1 = data.allMarkdownRemark.edges.filter(({ node }) =>  {
        if (node.frontmatter.key <= length/2) {
            return node
        }
    })
    let col2 = data.allMarkdownRemark.edges.filter(({ node }) =>  {
        if (node.frontmatter.key > length/2) {
            return node
        }
    })

    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>home</title>
            </Helmet>
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

            <div class="row"> 
                    <div class="column">
                        {col1.map(({ node }) => 
                        (
                            <Link to={`/projects/${node.fields.slug}`}>
                            <div className="container">
                                    <img className="image" src={node.frontmatter.image} alt={node.frontmatter.tile} key={node.frontmatter.key}/>

                                <div className="overlay">
                                    <div className="text">
                                    <div style={{fontSize: `1.9vw`, fontWeight: `bold`}}>{node.frontmatter.tile}</div>
                                    <div style={{fontSize: `1.3vw`}}>{node.frontmatter.description}</div>
                                    </div>
                                </div>
                            </div>
                            </Link>                
                        ))}
                    </div>
                    <div class="column">
                        {col2.map(({ node }) => 
                        (
                            <Link to={`/projects/${node.fields.slug}`}>

                            <div className="container">
                                    <img className="image" src={node.frontmatter.image} alt={node.frontmatter.tile} key={node.frontmatter.key}/>

                                <div className="overlay">
                                    <div className="text">
                                    <div className="tile-head" style={{fontSize: `1.9vw`, fontWeight: `bold`}}>{node.frontmatter.tile}</div>
                                    <div style={{fontSize: `1.3vw`}}>{node.frontmatter.description}</div>
                                    </div>
                                </div>
                            </div>
                            </Link>                
                        ))}
                    </div>
                </div>
            
            {length >= 6 &&
                <div class="row"> 
                    <div class="column">
                        
                    {data.allMarkdownRemark.edges.map(({ node }) => 
                    (
                        <Link to={`/projects/${node.fields.slug}`}>

                        <div className="container">
                                <img className="image" src={node.frontmatter.image} alt={node.frontmatter.tile} key={node.frontmatter.key}/>

                            <div className="overlay">
                                <div className="text">
                                <div style={{fontSize: `25px`, fontWeight: `bold`}}>{node.frontmatter.tile}</div>
                                {node.frontmatter.description}
                                </div>
                            </div>
                        </div>
                        </Link>                
                    ))}
                        {/* <img src={`tigerride.jpg`} style={{width:`100%`}}/>
                        <img src={`test.jpg`}style={{width:`100%`}}/>
                        <img src={`test1.jpg`} style={{width:`100%`}}/>
                        <img src={`surfrider.jpg`} style={{width:`100%`}}/>
                        <img src={`tigerride.jpg`} style={{width:`100%`}}/>
                        <img src={`tigerride.jpg`} style={{width:`100%`}}/>
                        <img src={`tigerride.jpg`} style={{width:`100%`}}/> */}
                    </div>
                    <div class="column">
                        <img src={`tigerride.jpg`} style={{width:`100%`}}/>
                        <img src={`test.jpg`}style={{width:`100%`}}/>
                        <img src={`test1.jpg`} style={{width:`100%`}}/>
                        <img src={`surfrider.jpg`} style={{width:`100%`}}/>
                        <img src={`tigerride.jpg`} style={{width:`100%`}}/>
                        <img src={`tigerride.jpg`} style={{width:`100%`}}/>
                        <img src={`tigerride.jpg`} style={{width:`100%`}}/>
                    </div>
                </div>
            }
            
            {/* {data.allMarkdownRemark.edges.map(({ node }) => 
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
            ))} */}

        

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