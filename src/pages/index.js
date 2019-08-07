import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

function IndexPage() {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>home</title>
            </Helmet>
            <h1>this is the index page.</h1>
            
        </Layout>
    )
}

export default IndexPage
