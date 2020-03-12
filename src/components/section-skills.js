import React from "react"
import ReactHtmlParser from 'react-html-parser'
import JSONResumeSkills from "../../content/resume-skills.json"

const SectionSkills = () => (
  <section class="resume-section resume-section--skills" id="section-skills">
    <h2>Skills</h2>
    <ul class="hanging-indent">
      {JSONResumeSkills.map((data, index) => {
        let descriptions = data.Description.split('\n');
        let descList = `<ul>`;
        descriptions.forEach((item) => {
          descList += `<li>${item}</li>`;
        });
        descList += `</ul>`;
        return (
          <li key={`content_item_${index}`}>
            <h3>{data.Type}:</h3>
            {ReactHtmlParser (descList)}
          </li>
        )
      })}
    </ul>
  </section>
)

export default SectionSkills
