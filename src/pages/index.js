import React from "react"
import Layout from "../components/layout"
import SectionExperience from "../components/section-experience"
import SectionEducation from "../components/section-education"
import SectionSkills from "../components/section-skills"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Resume" />
    <section className="resume-section resume-section--profile" id="section-profile" tabIndex="-1" aria-labelledby="heading-section-profile">
      <h2 id="heading-section-profile">Profile</h2>
      <p>I help the companies that I work with understand the benefits of an accessible, semantically-sound approach to their design and development efforts. I believe that the user experience extends beyond the browser to numerous devices and contexts and that accessible, inclusive design works everywhere.</p>
    </section>
    <SectionExperience/>
    <SectionEducation />
    <SectionSkills />
  </Layout>
)

export default IndexPage
