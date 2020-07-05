import React from "react"
import PropTypes from "prop-types"

import "../global.css"
import "../default.css"

import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import PopupForm from "../../components/forms/popup/popup"

const DefaultLayout = ({ children }) => {

  return (
    <>
      <Header />
      <div className="content">
        <div className="main-content">
          <main>{ children }</main>
        </div>
        <PopupForm />
      </div>
      <Footer />

    </>
  )
}

DefaultLayout.defaultProps = {
  rightColumn: false,
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default DefaultLayout
