import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

function Contact() {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>contact me</title>
            </Helmet>
            <h1>Contact me below!</h1>
            <p>the goal is to make a mail form.</p>
        </Layout>
    )
}

export default Contact