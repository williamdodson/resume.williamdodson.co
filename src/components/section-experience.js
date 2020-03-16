import React from "react"
import JSONResumeHistory from "../../content/resume-job-history.json"

const SectionExperience = () => (
  <section class="resume-section resume-section--experience" id="section-experience">
    <h2>Experience</h2>
    <ul class="no-bullet experience-list">
      {JSONResumeHistory.map((data, index) => {
        let startDate = data['Start Date'];
        let endDate = data['End Date'];
        let dateString = startDate === endDate ? startDate : `${startDate}–${endDate}`
        return (
          <li class="experience-list__item" key={`content_item_${index}`}>
            <h3 class="experience-list__title">{data.Title}, {data.Company}: <time datetime={startDate}>{dateString}</time></h3>
            <p class="experience-list__description">{data.Description}</p>
          </li>
        )
      })}
    </ul>
  </section>
)

export default SectionExperience
