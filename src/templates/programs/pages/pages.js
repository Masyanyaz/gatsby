import React from "react"
import {graphql} from "gatsby"

import Layout from "../../../layouts/default/layout"
import "./pages.css"
import Days from "../../../components/programs/pages/days/days"
import Prices from "../../../components/programs/pages/prices/prices"


const ToursPage = (props) => {

  const data = props.data.strapiTours

  return (
    <Layout rightColumn={true}>
      {/*<h1>{data.name}</h1>*/}
      <div className="programm__img">
        <img src="https://21foto.ru/wp-content/uploads/2015/11/20120519-IMGP0657-06-Panorama-scaled.jpg" alt=""/>
      </div>

      <div className="programm__info">
        <div className="programm__info-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aut repudiandae eaque provident quis
          excepturi sunt enim dolore debitis molestiae!
        </div>
        <div className="programm__info-tags">
          {data.types.map(type => (
            <div key={type.id} className="programm__info-tags-item">
              <img
                src={type.img.publicURL}
                title={type.name}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>

      <div className="programm__menu">
        <div className="programm__menu-item">Программа</div>
        <div className="programm__menu-item">Цена и условия</div>
        <div className="programm__menu-item">Дополнительная информация</div>
      </div>
      <Days days={data.days}/>
      {data.prices.length ? <Prices prices={data.prices}/> : <h3>По запросу</h3>}
    </Layout>
  )
}

export const query = graphql`
  query($pagePath: String!) {
    strapiTours(
      path: {
        eq: $pagePath
      }
    ) {
    name
    days {
      id
      name
      text
      picture {
        publicURL
      }
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
    }
  }
`

export default ToursPage
