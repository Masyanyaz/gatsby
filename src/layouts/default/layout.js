/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle={'Voyage'} />
      <div className="content">
          <div className="main-content"
              // style={{
              //     margin: `0 auto`,
              //     maxWidth: 960,
              //     padding: `0 1.0875rem 1.45rem`,
              // }}
          >
              <main>{children}</main>
          </div>
          <div className="right-column">
              я <br/>
              есмь <br/>
              боковая <br/>
              колонка <br/>
          </div>
      </div>
        <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
