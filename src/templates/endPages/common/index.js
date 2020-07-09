import React from 'react'
import SEO from '../../../components/global/seo'
import Link from '../../../components/global/link'
import './index.css'
import { graphql, useStaticQuery } from 'gatsby'
import DefaultLayout from '../../../layouts/default/default'

const TemplatesEndPagesCommon = ({ h1, url }) => {
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
			<SEO title={'программы'} />
			<h1>{h1}</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci consequuntur,
				cum dignissimos ea exercitationem fugiat incidunt molestiae possimus praesentium voluptate
				voluptatibus? Consequatur, dolorem doloremque enim, excepturi harum, hic ipsum iste modi
				nihil nulla quis quod voluptas. Adipisci amet animi architecto atque blanditiis debitis
				delectus, deserunt dolor ducimus eaque eligendi impedit ipsum iste magnam magni, maiores nam
				neque non nulla odio quas, rerum sapiente sed tempora totam unde vitae voluptatem. Animi
				aperiam deserunt dicta esse iure modi nesciunt odit, quaerat repellat unde velit veniam.
				Aliquid aspernatur beatae culpa deleniti dolores incidunt itaque, laudantium minus modi
				perferendis possimus quas qui quis temporibus vel voluptas voluptate. Adipisci alias
				architecto at cumque ea minus nemo possimus quae quasi repellat! Accusantium aliquid
				architecto at consectetur consequatur cumque fuga id laborum mollitia officia perferendis
				perspiciatis quod, repellat, sunt suscipit ullam ut veritatis voluptate. Accusantium
				assumenda molestias odio quidem. Accusamus dicta et molestiae odit officiis pariatur
				quisquam quos sapiente totam, voluptatibus! Blanditiis consequatur cum, delectus dolore
				dolorem earum eos excepturi impedit nisi non quos rem unde? Dolore ducimus earum quia
				quisquam sit! Alias aperiam commodi consequuntur dolorum facilis iure laboriosam modi
				sapiente tempore voluptates. Adipisci amet animi atque commodi cupiditate delectus deserunt
				dolore doloremque, eaque earum error expedita fugiat illo impedit laborum magnam magni,
				molestias neque nobis non nulla obcaecati, officia officiis perferendis quas qui quia
				quibusdam quis quo recusandae reiciendis repellendus repudiandae rerum sequi similique sint
				vero! Aliquam atque autem dignissimos eligendi error eveniet illum nesciunt pariatur
				provident reiciendis soluta suscipit, ut voluptas. Eaque non praesentium quod velit! Alias
				animi, at cum cupiditate deleniti eos est expedita harum in obcaecati odit sed voluptatum.
				Ad aliquid assumenda consequuntur delectus, enim, explicabo illum maxime nostrum nulla odio,
				praesentium repellendus similique. Cum dolorem facilis, incidunt iure iusto nihil
				perferendis provident rem tempore ut velit voluptatem! Enim, odit quam.
			</p>

			<p>
				<b>Смотрите какие у нас клёвые туры:</b>
			</p>

			<div className="dir__grid">
				{data.allStrapiDirections.edges.map((direction) => (
					<Link
						to={
							url === 'tours'
								? `/${direction.node.path}`
								: `/catalogue/filters/excursion/${direction.node.path}/all`
						}
						key={direction.node.id}
					>
						<div className="dir__grid-img"></div>
						<div className="dir__grid-name">{direction.node.name}</div>
					</Link>
				))}
			</div>
		</DefaultLayout>
	)
}

export default TemplatesEndPagesCommon
