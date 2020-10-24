import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const FourOhFourPage = () => (
  <Layout>
    <SEO title="404: Page Not Found" />
    <section className="resume-section">
      <h2 id="heading-section-profile">404: Page Not Found</h2>
      <p>That page does not exist. Please return to the <a href="/">main page</a>.</p>
    </section>
  </Layout>
)

export default FourOhFourPage
