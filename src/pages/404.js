import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import favicon from "../../static/favicon.ico"



function Error() {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>404</title>
                <link rel="icon" href={favicon} />

            </Helmet>
            <h1>404 page not found :/</h1>
        </Layout>
    )
}

export default Error