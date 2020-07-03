import React from "react"
import "./about.css"

const AboutTour = ({ days, towns, groupCount, priceType, prices }) => {

  const pricesArray = prices.reduce((res, price) => {
    const prices = price.types.map(type => type.value)
    return [...res, ...prices]
  }, [])

  return(
    <div className="aboutTour">
      <div className="aboutTour__item">
        <span>Длительность</span>: {days.length ? days.length+" дней": "слыш, добавь дни"}
      </div>
      <div className="aboutTour__item">
        <span>Количество городов</span>: {towns.length ? towns.length+" города": "слыш, добавь города"}
      </div>
      <div className="aboutTour__item">
        <span>Тип тура</span>: {groupCount ? groupCount : "слыш, добавь 1й тип тура"} , {priceType ? priceType : "слыш, добавь 2й тип тура"}
      </div>
      <div className="aboutTour__item">
        <span>Цена</span>: {
          prices.length ?
            `a ${ Math.min(...pricesArray) } - de ${ Math.max(...pricesArray) }` :
            `слыш, добавь цену`
        }
      </div>
    </div>
  )
}

export default AboutTour
