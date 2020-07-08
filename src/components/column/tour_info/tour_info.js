import React from "react"
import "./tour_info.css"
import {graphql, useStaticQuery} from "gatsby"


const TourInfo = (props) => {

  const data = useStaticQuery(graphql`
		query{
      strapiTours{
			name
			days {
				id
				name
				text
				picture {
					publicURL
				}
			}
			direction {
				name
				path
			}
			category {
				name
				path
			}
			seasons {
				name
				path
			}
			types {
				id
				img {
					publicURL
				}
				name
			}
			prices {
				id
				count
				types {
					id
					name
					value
				}
			}
			towns {
				name
				id
			}
			groupCount
			priceType
		}
  }
	`)


  return(
    <div className="tourInfo">
      <div className="tourInfo__item">
        <div className="tourInfo__item-name">Jours:</div>
        <div className="tourInfo__item-info">
          {data.strapiTours.days.length ? data.strapiTours.days.length + ' дней' : 'слыш, добавь дни'}
        </div>
      </div>
      <div className="tourInfo__item">
        <div className="tourInfo__item-name">Villes:</div>
        <div className="tourInfo__item-info">
          {data.strapiTours.towns.length ? data.strapiTours.towns.length + ' города' : 'слыш, добавь города'}
        </div>
      </div>
      <div className="tourInfo__item">
        <div className="tourInfo__item-name">Тип тура:</div>
        <div className="tourInfo__item-info">
          {data.strapiTours.groupCount ? data.strapiTours.groupCount : 'слыш, добавь 1й тип тура'},{' '}
          {data.strapiTours.priceType ? data.strapiTours.priceType : 'слыш, добавь 2й тип тура'}
        </div>
      </div>
    </div>
  )
}

export default TourInfo