import React from "react"
import SocialLinks from "../../content/social-links.json"

const Sidebar = () => (
  <aside class="contact-info">
    <ul class="social-links">
      {SocialLinks.map((data, index) => {
        let link = data.URL;
        if (data.Title === 'Phone') {
          link = `tel:+1${data.URL.split('-').join('')}`;
        }
        return (
          <li key={`content_item_${index}`}>
            <strong>{data.Title}: <a href={link}>{data.URL}</a></strong>
          </li>
        )
      })}
    </ul>
  </aside>
)

export default Sidebar
