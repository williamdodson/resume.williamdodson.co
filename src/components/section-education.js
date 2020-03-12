import React from "react"
import JSONResumeEducation from "../../content/resume-education.json"

const SectionEducation = () => (
  <section class="resume-section resume-section--education" id="section-education">
    <h2>Education <span class="ampersand-subtle">&amp;</span> Acknowledgements</h2>
    <ul class="hanging-indent">
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
