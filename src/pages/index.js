import React from 'react'
import './index.css'

import DefaultLayout from '../layouts/default/default'
import SEO from '../components/global/seo'
import AdvantBlock from '../components/column/advant/advant'
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
		<DefaultLayout>
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
				<AdvantBlock />
			</div>

			<h2>Популярные направления</h2>
			<div className="dir__grid">
				{data.allStrapiDirections.edges.map((direction) => (
					<Link to={`/${direction.node.path}`} key={direction.node.id}>
						<div className="dir__grid-img"></div>
						<div className="dir__grid-name">{direction.node.name}</div>
					</Link>
				))}
			</div>
		</DefaultLayout>
	)
}

export default IndexPage
