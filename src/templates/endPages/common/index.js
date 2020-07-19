import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

import SEO from '../../../components/global/seo'
import Link from '../../../components/global/link'
import LayoutsDefault from '../../../layouts/default'

const TemplatesEndPagesCommon = ({ h1, title, description, url, directions }) => {
	return (
		<LayoutsDefault>
			<SEO title={title} description={description} />
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

			<h3>Смотрите какие у нас клёвые туры:</h3>

			<div className="dir__grid">
				{directions.edges.map(({ node: { id, name, path } }) => (
					<Link
						key={id}
						to={url === 'tours' ? `/${path}` : `/catalogue/filters/excursion/${path}/all`}
					>
						<div className="dir__grid-img" />
						<div className="dir__grid-name">{name}</div>
					</Link>
				))}
			</div>
		</LayoutsDefault>
	)
}

TemplatesEndPagesCommon.propTypes = {
	directions: PropTypes.shape({
		edges: PropTypes.array,
	}).isRequired,
	h1: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
}

export default TemplatesEndPagesCommon
