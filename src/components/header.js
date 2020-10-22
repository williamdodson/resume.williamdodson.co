//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, subTitle }) => (
  <header className="banner">
    <img alt="" className="logo-icon" src={'./william-dodson-icon.svg'} />
    <h1 className="banner__title" data-byline={subTitle}>{siteTitle}</h1>
    <p className="banner__subtitle">{subTitle}</p>

    {/*<nav className="menu-main" aria-label="Main menu">
      <ul className="menu-main__items">
        <li className="menu-main__item">
          <a className="menu-main__link" href="#section-profile">Profile</a>
        </li>
        <li className="menu-main__item">
          <a className="menu-main__link" href="#section-experience">Experience</a>
        </li>
        <li className="menu-main__item">
          <a className="menu-main__link" href="#section-education">Education</a>
        </li>
        <li className="menu-main__item">
          <a className="menu-main__link" href="#section-skills">Skills</a>
        </li>
      </ul>
</nav>*/}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  subTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  subTitle: ``,
}

export default Header
