import React from "react"
import "./preview.css"

import PreviewImage from "./image"
import PreviewTypes from "./types"
import Link from "../../global/link"

const TownsList = ({towns}) => {
  return(
    <div className="town-list">
      <ul>
        {
          towns.map(town => (
            <li key={town.id}>{town.name}</li>
          ))
        }
      </ul>
    </div>
  )
}

const PreviewProgram = ({ node, directionPath }) => {
  const [hover, setHover] = useState(false)

  const openTowns = () => {
    setHover(hover => !hover)
  }

  return (
    <div className="preview__block">

      <PreviewImage directionPath={ directionPath } path={ node.path } category={ node.category } prices={ node.prices } />

      <div className="preview__block-center">
        <div className="preview__block-name">
          { node.name }
        </div>
        <div className="preview__block-center-row">
          <div className="preview__block-center-row-element">{ node.days.length } дней</div>
          <div className="preview__block-center-row-element" onMouseEnter={openTowns} onMouseLeave={openTowns}>
            { node.towns.length } города
            { hover && <TownsList towns={ node.towns }/> }
          </div>
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
