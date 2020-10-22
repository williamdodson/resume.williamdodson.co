/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Sidebar from "./sidebar"
import "./main.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          subtitle
        }
      }
    }
  `)

  return (
    <div className="container">
      <Header siteTitle={data.site.siteMetadata.title} subTitle={data.site.siteMetadata.subtitle} />
      <main className="content">{children}</main>
      <Sidebar />
      <footer className="copyright">
        <p>©{new Date().getFullYear()} William Dodson</p>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
