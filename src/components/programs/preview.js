import React from "react"
import { Link } from "gatsby"

import './preview.css'

const PreviewProgram = ({ node, pagePath }) => {

  console.log(node)
    node.types.length = 3
const types = node.types.map((type, i) => {
    if (i < 2){
        return (
            <Link key={type.id} to={`/catalogue/filters/${ pagePath }/tours/${ type.path }/`}>
                <img src={type.icon.publicURL} title={type.name} alt=""/>
            </Link>
        )
    }
    })
  return (
    <div className="preview__block">

        <div className="preview__block-top">
            <Link to={`/catalogue/programms/${ pagePath }/tours/${ node.category ? node.category.path : 'other' }/${ node.path }/`} className="preview__block-top-picture">
                    <img src="https://www.calliaweb.co.uk/wp-content/uploads/2015/10/600x400.jpg" alt=""/>
            </Link>
            <Link to={`../${node.category.path}`} className="preview__block-top-type">
                {node.category.name}
            </Link>
        </div>


      <div className="preview__block-center">
        <div className="preview__block-name">
          {node.name}
        </div>
        <div className="preview__block-center-row">
          <div className="preview__block-center-row-element">{node.days.length} дней</div>
          <div className="preview__block-center-row-element">города</div>
        </div>
        <div className="preview__block-center-row">
          <div className="preview__block-center-row-element">
              {types}
              <Link to={`/catalogue/filters/${ pagePath }/tours/konserj/`}>
                  <img src="http://localhost:8000/static/2c56b025f02b3b5e781809830ccf172e/edcca08cbe9e34a0ed89f62867a93bb4.png" />
              </Link>
          </div>
          <div className="preview__block-center-row-element">цена</div>
        </div>
      </div>


      <Link to={`/catalogue/programms/${ pagePath }/tours/${ node.category ? node.category.path : 'other' }/${ node.path }/`} className="preview__block-button">
        ПОДРОБНЕЕ
      </Link>

    </div>
  )
}

export default PreviewProgram
