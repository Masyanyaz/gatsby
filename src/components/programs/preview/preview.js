import React from "react"
import "./preview.css"

import PreviewImage from "./image"
import PreviewTypes from "./types"
import Link from "../../global/link"


const PreviewProgram = ({ node, directionPath }) => {
  return (
    <div className="preview__block">

      <PreviewImage directionPath={ directionPath } path={ node.path } category={ node.category } prices={ node.prices } />

      <div className="preview__block-center">
        <div className="preview__block-name">
          { node.name }
        </div>
        <div className="preview__block-center-row">
          <div className="preview__block-center-row-element">{ node.days.length } дней</div>
          <div className="preview__block-center-row-element">города</div>
          <div className="preview__block-center-row-element">
            <PreviewTypes directionPath={ directionPath } types={ node.types } />
          </div>
        </div>
      </div>

      <Link
        to={ `/catalogue/programs/${ directionPath }/tours/${ node.category.path }/${ node.path }/` }
        className="preview__block-button"
      > ПОДРОБНЕЕ </Link>

    </div>
  )
}

export default PreviewProgram
