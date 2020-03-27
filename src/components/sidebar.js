import React from "react"
import SocialLinks from "../../content/social-links.json"
import FeatherIcon from "../utils/feather";

const Sidebar = () => (
  <aside className="contact-info">
    <ul className="social-links">
      {SocialLinks.map((data, index) => {
        let link = data.URL;
        let iconName = data.Title.toLowerCase();

        if(data.Title === 'Web') {
          iconName = 'globe';
        }

        if (data.Title === 'GitHub Gists') {
          iconName = 'github';
        }

        if (data.Title === 'Phone') {
          link = `tel:+1${data.URL.split('-').join('')}`;
        }
        return (
          <li key={`content_item_${index}`}>
            <strong className="sr-only">{data.Title}: </strong>
            <a href={link} aria-label={data.Title}>
              <FeatherIcon
                name={iconName}
                color="#1C1A17"
                cssClass="icon"
                aria-hidden="true" />
              {data.URL}
            </a>
          </li>
        )
      })}
    </ul>
  </aside>
)

export default Sidebar
