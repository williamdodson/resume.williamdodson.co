import React from "react"
import JSONResumeEducation from "../../content/resume-education.json"

const SectionEducation = () => (
  <section className="resume-section resume-section--education" id="section-education">
    <h2>Education <span className="ampersand-subtle">&amp;</span> Acknowledgements</h2>
    <ul className="hanging-indent">
      {JSONResumeEducation.map((data, index) => {
        return (
          <li key={`content_item_${index}`}>
            {data.Description}, {data.Date}
          </li>
        )
      })}
    </ul>
  </section>
)

export default SectionEducation
