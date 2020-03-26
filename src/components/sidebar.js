import React from "react"
import SocialLinks from "../../content/social-links.json"
import FeatherIcon from "../utils/feather";

// const iconStyles = css`
//   opacity: 0.5;
//   transition: opacity 0.15s ease-in;
//   transition: color 0.15s ease-in;
//   &:hover {
//     text-decoration: none;
//     box-shadow: none;
//     opacity: 1;
//     transition: opacity 0.15s ease-in;
//   }
// `;

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
            <a href={link}>
              <FeatherIcon
                name={iconName}
                color="#1C1A17"
                cssClass="icon" />
              {data.URL}
            </a>
          </li>
        )
      })}
    </ul>
  </aside>
)

export default Sidebar
