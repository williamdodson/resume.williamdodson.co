import React from "react"
import SocialLinks from "../../content/social-links.json"
import FeatherIcon from "../utils/feather";

const Sidebar = () => (
  <aside className="contact-info">
    <nav aria-label="Contact and social media menu">
      <ul className="social-links">
        {SocialLinks.map((data, index) => {
          let link = data.url;
          let title = data.title;
          let iconName = title.toLowerCase();

          if(data.title === 'Web') {
            iconName = 'globe';
          }

          if (data.title === 'GitHub Gists') {
            iconName = 'github';
          }

          if (data.title === 'Phone') {
            link = `tel:+1${data.url.split('-').join('')}`;
          }
          return (
            <li key={`content_item_${index}`}>
              <span className="contact-info__title sr-only">{data.title}: </span>
              <a href={link} aria-label={title}>
                <FeatherIcon
                  name={iconName}
                  color="#1C1A17"
                  cssClass="icon"
                  aria-hidden="true" />
                {data.url}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  </aside>
)

export default Sidebar
