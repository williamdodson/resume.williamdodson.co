//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, subTitle }) => (
  <header className="banner">
    <img alt="" className="logo-icon" src={'./william-dodson-icon.svg'} role="presentation" />
    <h1 className="banner__title" data-byline={subTitle}>{siteTitle}</h1>
    <p className="banner__subtitle">{subTitle}</p>
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
