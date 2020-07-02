import React from "react"
import { graphql } from "gatsby"

import Layout from "../../../layouts/default/layout"

import "./pages.css"

import Days from "../../../components/programs/pages/days/days"
import Prices from "../../../components/programs/pages/prices/prices"
import Link from "../../../components/global/link"

const TagList = ({direction, category, seasons}) => {
  return(
    <div className="tag-list">
      <Link to={`/catalogue/filters/${direction.path}/tours/all/all/all`} className="tag-list-element">{direction.name}</Link>
      <Link to={`/catalogue/filters/all/tours/${category.path}/all/all`} className="tag-list-element">{category.name}</Link>
      <Link to={`/catalogue/filters/all/tours/all/${ seasons.length > 1 ? "all" : seasons[0].path }/all`} className="tag-list-element">{seasons.length > 1 ? "Круглый год" : seasons[0].name}</Link>
    </div>
  )
}

const ToursPage = (props) => {

  const data = props.data.strapiTours

  return (
    <Layout rightColumn={ true } directionName={ data.direction.name }>
      <div className="programm__img">
        <img src="https://21foto.ru/wp-content/uploads/2015/11/20120519-IMGP0657-06-Panorama-scaled.jpg" alt="" />
      </div>

      <div className="programm__info">
        <TagList direction={data.direction} category={data.category} seasons={data.seasons}/>
        <div className="programm__info-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aut repudiandae eaque provident quis excepturi sunt enim dolore debitis molestiae!
        </div>
        <div className="programm__info-tags">
          { data.types.map(type => (
            <div key={ type.id } className="programm__info-tags-item">
              <img
                src={ type.img.publicURL }
                title={ type.name }
                alt=""
              />
            </div>
          )) }
        </div>
      </div>

      <div className="programm__menu">
        <div className="programm__menu-item">Программа</div>
        <div className="programm__menu-item">Цена и условия</div>
        <div className="programm__menu-item">Дополнительная информация</div>
      </div>
      <Days days={ data.days } />
      { data.prices.length ? <Prices prices={ data.prices } /> : <h3>По запросу</h3> }
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
    direction {
      name
      path
    }
    category{
      name
      path
    }
    seasons{
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
    }
  }
`

export default ToursPage
