import React from "react"
import JSONResumeHistory from "../../content/resume-job-history.json"

const SectionExperience = () => (
  <section class="resume-section resume-section--experience" id="section-experience">
    <h2>Experience</h2>
    <ul class="no-bullet">
      {JSONResumeHistory.map((data, index) => {
        let startDate = data['Start Date'];
        let endDate = data['End Date'];
        let dateString = startDate === endDate ? startDate : `${startDate}–${endDate}`
        return (
          <li key={`content_item_${index}`}>
            <h3>{data.Title}, {data.Company}: <time datetime={startDate}>{dateString}</time></h3>
            <p>{data.Description}</p>
          </li>
        )
      })}
    </ul>
  </section>
)

export default SectionExperience
