import React from "react"
import { Link } from "gatsby"

import "./cards.css"

import CardImage from "./image"
import CardTypes from "./types"

const ProgramCards = ({ node, pagePath }) => {
  return (
    <div className="preview__block">

      <CardImage pagePath={ pagePath } path={ node.path } category={ node.category } />

      <div className="preview__block-center">
        <div className="preview__block-name">
          { node.name }
        </div>
        <div className="preview__block-center-row">
          <div className="preview__block-center-row-element">{ node.days.length } дней</div>
          <div className="preview__block-center-row-element">города</div>
        </div>
        <div className="preview__block-center-row">
          <div className="preview__block-center-row-element">
            <CardTypes pagePath={ pagePath } types={ node.types } />
          </div>
          <div className="preview__block-center-row-element">цена</div>
        </div>
      </div>

      <Link
        to={ `/catalogue/programms/${ pagePath }/tours/${ node.category ? node.category.path : "other" }/${ node.path }/` }
        className="preview__block-button"
      >
        ПОДРОБНЕЕ
      </Link>

    </div>
  )
}

export default ProgramCards
