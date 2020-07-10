import React from 'react'
import './index.css'

import LayoutsDefault from '../layouts/default'
import SEO from '../components/global/seo'
import ColumnBlocksAdvant from '../components/column/blocks/advant'
import Link from '../components/global/link'
import { graphql, useStaticQuery } from 'gatsby'

const IndexPage = (props) => {
	const data = useStaticQuery(graphql`
		{
			allStrapiDirections {
				edges {
					node {
						id
						name
						path
					}
				}
			}
		}
	`)

	return (
		<LayoutsDefault>
			<SEO title="Home" />
			<h1>Туры по России и странам СНГ</h1>
			<div className="first">
				<div className="first-p">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut consequuntur in iusto
					laborum necessitatibus quas. Ab aut, dolorum eaque excepturi illo impedit libero nulla
					perferendis sapiente suscipit veniam voluptates. Assumenda dolorem eum eveniet expedita id
					laboriosam officiis optio perspiciatis quis, reprehenderit tempore veritatis voluptatum?
					Beatae error exercitationem fuga laudantium repellat sequi ullam. Architecto at dolorum
					ducimus error esse facilis nobis quam quo recusandae. Aliquid aperiam at aut consequatur
					eius eos harum, impedit obcaecati, odio officia perferendis saepe suscipit temporibus. At
					consequuntur culpa dicta eius eum laboriosam modi odit quas quod unde! Asperiores
					aspernatur autem facilis natus non quia quisquam sunt? Corporis cumque deserunt excepturi
					expedita harum hic illo nemo placeat reprehenderit sint. Accusantium aliquid aut
					consectetur cum debitis dicta doloribus enim est et excepturi expedita explicabo illo
					incidunt ipsam ipsum iure labore laudantium, libero magnam molestiae natus nostrum
					obcaecati odio omnis, optio praesentium quasi quo repellat reprehenderit sequi sint totam
					veniam vitae voluptate voluptatem voluptates voluptatibus? Autem hic incidunt ipsum,
					itaque, laudantium nesciunt nostrum possimus qui tempora tenetur vel veritatis vero vitae!
					Aspernatur ipsam nihil saepe voluptas. Beatae corporis expedita, fuga magnam maxime minima
					molestiae numquam rerum temporibus veritatis. Asperiores beatae deleniti distinctio
					dolorum nulla obcaecati, recusandae temporibus voluptatem.
				</div>
				<ColumnBlocksAdvant />
			</div>
			<div style={{ margin: '100px' }}></div>
			<h2>Популярные направления</h2>
			<div className="dir__grid">
				{data.allStrapiDirections.edges.map((direction) => (
					<Link to={`/${direction.node.path}`} key={direction.node.id}>
						<div className="dir__grid-img" />
						<div className="dir__grid-name">{direction.node.name}</div>
					</Link>
				))}
			</div>
			<div style={{ margin: '100px' }}></div>
			<h2>Порулярые отдельные услуги</h2>
			<div className="mainserv">
				<div className="mainserv__item">
					<div className="mainserv__item-img"></div>
					<div className="mainserv__item-name">Составление программы</div>
				</div>
				<div className="mainserv__item">
					<div className="mainserv__item-img"></div>
					<div className="mainserv__item-name">Консьерж</div>
				</div>
				<div className="mainserv__item">
					<div className="mainserv__item-img"></div>
					<div className="mainserv__item-name">Приглашение и виза</div>
				</div>
				<div className="mainserv__item">
					<div className="mainserv__item-img"></div>
					<div className="mainserv__item-name">Страховка</div>
				</div>
				<div className="mainserv__item">
					<div className="mainserv__item-img"></div>
					<div className="mainserv__item-name">Авиабилеты</div>
				</div>
				<div className="mainserv__item">
					<div className="mainserv__item-img"></div>
					<div className="mainserv__item-name">Билеты на поезда</div>
				</div>
			</div>
			<div style={{ margin: '100px' }}></div>
			<h2>Отзывы наших клиентов</h2>
			<div className="mainReview">
				<div className="mainReview__text">
					Over9000 пололжительных отзывов, средня оценка 147/100
				</div>
				<div className="mainReview__video">Я видео</div>
				<div className="mainReview__review-preview">
					<div className="mainReview__review-preview-img"></div>
					<div className="mainReview__review-preview-text">
						<div className="frase">Я просто в восторге от тура</div>
						<div className="frase-p">Лухари тур за миллион евро</div>
						<div className="frase-a">Читать целиком > > ></div>
					</div>
				</div>
				<div className="mainReview__review-preview">
					<div className="mainReview__review-preview-img"></div>
					<div className="mainReview__review-preview-text">
						<div className="frase">Лучшая поездка в моей жизни</div>
						<div className="frase-p">Тур по Чебоксарам</div>
						<div className="frase-a">Читать целиком > > ></div>
					</div>
				</div>
			</div>
		</LayoutsDefault>
	)
}

export default IndexPage
