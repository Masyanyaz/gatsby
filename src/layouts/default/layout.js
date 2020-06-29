/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import Header from "../../components/header/header"
import RightColumn from "../../components/column/column"
import Footer from "../../components/footer/footer"


const Layout = ({children, rightColumn, directionName}) => {
  return (
    <>
      <Header siteTitle={'Voyage'}/>
      <div className="content">
        <div className="main-content">
          <main>{children}</main>
        </div>
        {
          rightColumn && <RightColumn directionName={directionName}/>
        }
      </div>
      <Footer/>
    </>
  )
}


Layout.defaultProps = {
  rightColumn: false
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  rightColumn: PropTypes.bool
}

export default Layout
