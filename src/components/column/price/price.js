import React from "react"
import MinMaxPriceBlock from "../../programs/pages/prices/minMaxPrice"
import {graphql, useStaticQuery} from "gatsby"
import { useSelector } from 'react-redux'
import ExcursionInfo from "../excursion_info/excursion_info";


const ColumnPrice = (props) => {
  const service = useSelector((state) => state.url.service)
  const data = useStaticQuery(graphql`
  query{
    strapiTours{
      prices {
				id
				count
				types {
					id
					name
					value
				}
			}
    }
  }
`)

  return(
    <div className="excursionInfo__block-element">
      <span>Prix: </span>
      {service === 'excursion'
        ?
        ( <div>тут будет цена</div> )
        :
        ( <div><MinMaxPriceBlock prices={data.strapiTours.prices} /></div> )
      }
    </div>
  )
}

export default ColumnPrice