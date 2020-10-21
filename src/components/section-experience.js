import React from "react"
import JSONResumeHistory from "../../content/resume-job-history.json"

const SectionExperience = () => (
  <section className="resume-section resume-section--experience" id="section-experience" tabIndex="-1" aria-labelledby="heading-section-experience">
    <h2 id="heading-section-experience">Experience</h2>
    <ul className="no-bullet experience-list">
      {JSONResumeHistory.map((data, index) => {
        let startDate = data['Start Date'];
        let endDate = data['End Date'];
        let dateString = startDate === endDate ? startDate : `${startDate}–${endDate}`
        return (
          <li className="experience-list__item" key={`content_item_${index}`}>
            <h3 className="experience-list__title">{data.Title}, {data.Company}: <time dateTime={startDate}>{dateString}</time></h3>
            <p className="experience-list__description">{data.Description}</p>
          </li>
        )
      })}
    </ul>
  </section>
)

export default SectionExperience
