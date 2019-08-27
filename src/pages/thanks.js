import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import favicon from "../../static/favicon.ico"


export default function Thanks() {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>THANK YOU!</title>
                
            </Helmet>
            <h1>Thanks for reaching out!</h1>
        </Layout>
    )
}