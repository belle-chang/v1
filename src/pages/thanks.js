import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"


export default function Thanks() {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>thank you!</title>
            </Helmet>
            <h1>Thanks for reaching out!</h1>
        </Layout>
    )
}