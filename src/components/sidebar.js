import React from "react"
import SocialLinks from "../../content/social-links.json"

const Sidebar = () => (
  <aside class="contact-info">
    <img alt="" class="logo-icon" src={'./william-dodson-icon.svg'} role="presentation" />
    <ul class="social-links">
      {SocialLinks.map((data, index) => {
        let link = data.URL;
        if (data.Title === 'Phone') {
          link = `tel:+1${data.URL.split('-').join('')}`;
        }
        return (
          <li key={`content_item_${index}`}>
            <strong>{data.Title}:</strong> <a href={link}>{data.URL}</a>
          </li>
        )
      })}
    </ul>
  </aside>
)

export default Sidebar
