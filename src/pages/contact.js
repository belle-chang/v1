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
            <form 
                name="contact_me"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
            >
                <label for="name">Your name:**</label>
                <br />
                <input name="name" type="text" required="true" />
                <br />
                <label for="email">Your email:**</label>
                <br />
                <input name="email" type="text" required="true" />
                <br />
                <label for="message">Your message:**</label>
                <br />
                <input name="message" type="textarea" required="true" />
                <br />
                <button type="submit">Send!</button>

            </form>
        </Layout>
    )
}

export default Contact