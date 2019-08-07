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

            <form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
           
        </Layout>
    )
}

export default Contact