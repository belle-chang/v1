import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"


function Error() {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>404 page not found</title>
            </Helmet>
            <h1>404</h1>
        </Layout>
    )
}

export default Error