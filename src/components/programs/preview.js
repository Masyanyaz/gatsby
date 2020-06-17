import React from "react"
import { Link } from "gatsby"

const PreviewProgram = ({ node, pagePath }) => {

  return (
    <div
      style={ {
        height: "200px",
        width: "400px"
      } }
    >
      <div>{ node.category ? node.category.name : 'Остальные' }</div>
      <Link
        to={ `/catalogue/programms/${ pagePath }/tours/${ node.category ? node.category.path : 'other' }/${ node.path }/` }
      >
        Название: { node.name }
      </Link>
      <div>
        Пиктограммы:
        { node.types.map(type => (
        <span key={type.id} style={ { marginRight: "10px" } }>{ type.name }</span>
      )) }
      </div>
      <div dangerouslySetInnerHTML={{__html: '**asdasdas**'}} />
    </div>
  )
}

export default PreviewProgram
