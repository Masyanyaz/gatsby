import React from "react"
import PropTypes from "prop-types"

import "../global.css"
import "../default.css"

import Header from "../../components/header/header"
import RightColumn from "../../components/column/column"
import Footer from "../../components/footer/footer"
import PopupForm from "../../components/forms/popup/popup"

const FiltersLayout = ({ children, directionName }) => {

  return (
    <>
      <Header />
      <div className="content">
        <div className="main-content">
          <main>{ children }</main>
        </div>
        <RightColumn directionName={ directionName } />
        <PopupForm />
      </div>
      <Footer />
    </>
  )
}

FiltersLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default FiltersLayout
