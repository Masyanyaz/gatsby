import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/default/layout"
import './tours.css'


const ToursPage = (props) => {

  const data = props.data.strapiTours

  return (
    <Layout>
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
                <div className="programm__info-tags-item"><img
                    src="https://media1.tenor.com/images/0f094357ce654616a98ab3607f8ee290/tenor.gif?itemid=12266242"
                    alt=""/></div>
                <div className="programm__info-tags-item"><img
                    src="https://media1.tenor.com/images/0f094357ce654616a98ab3607f8ee290/tenor.gif?itemid=12266242"
                    alt=""/></div>
                <div className="programm__info-tags-item"><img
                    src="https://media1.tenor.com/images/0f094357ce654616a98ab3607f8ee290/tenor.gif?itemid=12266242"
                    alt=""/></div>
                <div className="programm__info-tags-item"><img
                    src="https://media1.tenor.com/images/0f094357ce654616a98ab3607f8ee290/tenor.gif?itemid=12266242"
                    alt=""/></div>
                <div className="programm__info-tags-item"><img
                    src="https://media1.tenor.com/images/0f094357ce654616a98ab3607f8ee290/tenor.gif?itemid=12266242"
                    alt=""/></div>
            </div>
        </div>

        <div className="programm__menu">
            <div className="programm__menu-item">Программа</div>
            <div className="programm__menu-item">Цена и условия</div>
            <div className="programm__menu-item">Дополнительная информация</div>
        </div>

        <div className="programm__days">
            <div className="programm__days-left">
                <div className="programm__days-left-count">
                    <span>День 1</span> из 3
                </div>
                <div className="programm__days-left-name">
                    Arivee a Moscou
                </div>
                <div className="programm__days-left-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed architecto veritatis dolorum corrupti
                    quidem asperiores repellendus nostrum eos sint, ducimus quibusdam inventore, exercitationem vel nam
                    iure odit maiores iste eaque!
                </div>
            </div>
            <div className="programm__days-right">
                <img src="https://www.calliaweb.co.uk/wp-content/uploads/2015/10/600x400.jpg" alt=""/>
            </div>
        </div>
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
    }
  }
`

export default ToursPage
