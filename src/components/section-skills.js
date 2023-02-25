import React from "react"
import ReactHtmlParser from 'react-html-parser'
import JSONResumeSkills from "../../content/resume-skills.json"

const SectionSkills = () => (
  <section className="resume-section resume-section--skills" id="section-skills" tabIndex="-1"  aria-labelledby="heading-section-skills">
    <h2 id="heading-section-skills">Skills</h2>
    <ul className="hanging-indent">
      {JSONResumeSkills.map((data, index) => {
        let descriptions = data.description.split('\n');
        let descList = `<ul>`;
        descriptions.forEach((item) => {
          descList += `<li>${item}</li>`;
        });
        descList += `</ul>`;
        return (
          <li key={`content_item_${index}`}>
            <h3>{data.type}:</h3>
            {ReactHtmlParser (descList)}
          </li>
        )
      })}
    </ul>
  </section>
)

export default SectionSkills
