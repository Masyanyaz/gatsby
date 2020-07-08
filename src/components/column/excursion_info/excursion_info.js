import React from "react"
import "./excursion_info.css"
import {graphql, useStaticQuery} from "gatsby";

const ExcursionInfo = (props) => {

  const data = useStaticQuery(graphql`
		query{
      strapiExcursions{
        name
        hours
        transports{
          name
          icon{
            publicURL
          }
        }
      }
    }
	`)

  return(
    <div className="excursionInfo__block">
      <div className="excursionInfo__block-element">
        <span>Durée: </span>
        <div><span>{data.strapiExcursions.hours}</span> часов</div>
      </div>
      <div className="excursionInfo__block-element">
        <span>{ data.strapiExcursions.transports.length > 1 ? `Types de transport: ` : `Type de transport: ` }</span>
        <div>{
          data.strapiExcursions.transports.map(transport => (
            <img key={transport.id} src={transport.icon.publicURL} alt="" title={transport.name}/>
          ))
        }</div>
      </div>
    </div>
  )

}

export default ExcursionInfo