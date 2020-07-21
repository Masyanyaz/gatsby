import React from 'react'
import { graphql } from 'gatsby'

import './index.css'

import LayoutsPages from '../../../layouts/pages'
import PricesExcursion from '../../../general/prices/excursions'
import Link from '../../../components/global/link'
import EndPagesExcursionsProvider from './provider'

const ExcursionsPage = (props) => {
	const data = props.data.strapiExcursions
	const pricesArray = data.prices.map((price) => price.value)

	const locationState = props.location.state

	return (
		<EndPagesExcursionsProvider
			prices={pricesArray}
			transports={data.transports}
			hours={data.hours}
		>
			<LayoutsPages>
				<div className="programm__img">
					<img
						src="https://21foto.ru/wp-content/uploads/2015/11/20120519-IMGP0657-06-Panorama-scaled.jpg"
						alt=""
					/>
				</div>
				<div>
					<Link
						to={(locationState && locationState.back) || `/catalogue/filters/excursion/all/all`}
					>
						Back
					</Link>
				</div>
				<h1>{data.name}</h1>
				<p>{data.direction.name}</p>
				<div className="otstup" />
				<p>Сделаем вид, что это заготовка для тура одним взглядом</p>
				<div className="programm__info-tags">
					{data.transports.map((type) => (
						<div key={type.id} className="programm__info-tags-item">
							<img src={type.image.publicURL} alt="" />
							<span>{type.name}</span>
						</div>
					))}
				</div>
				<h2>Описание экскурсии</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab, aliquam amet blanditiis
					consequatur est eum fugiat harum labore, laboriosam laborum modi nam nulla quaerat quas
					rem repellat sapiente sequi! Amet delectus eaque fugit laborum maiores nobis, quas
					recusandae repellendus suscipit! Ab aperiam architecto asperiores esse laudantium quas
					reprehenderit saepe sed voluptatum! Ad adipisci aliquid omnis quaerat. Eos error nisi
					nulla quod reprehenderit tempora ut voluptatibus? Adipisci delectus dolorum nobis?
					Adipisci aut autem corporis debitis delectus eaque enim esse eveniet exercitationem in,
					libero maiores minima minus necessitatibus neque nulla perferendis placeat porro
					praesentium quam quis reiciendis sunt suscipit totam unde! A amet animi asperiores cum,
					dolorem dolores fugit hic illo illum ipsa iure laborum magni nesciunt praesentium quasi
					suscipit temporibus tenetur vel velit vero voluptate voluptatem voluptatibus. Atque,
					dolore eaque eligendi ipsa laudantium quae reprehenderit sint tempore! Aliquid asperiores,
					commodi, culpa dolore dolorem mollitia nulla, omnis quos sint unde voluptatem voluptatum.
					Nam, reprehenderit, vel. Accusantium aliquid amet architecto, asperiores at blanditiis cum
					deserunt dolore esse est iste iure necessitatibus, nobis nulla officia, optio perspiciatis
					possimus quasi saepe sed sit soluta ullam voluptas. Accusamus ad aliquam aperiam
					architecto cum delectus dolore dolorem ea eaque eius hic, impedit ipsam iure laborum magni
					nesciunt numquam odit omnis perferendis praesentium quia quidem quos reiciendis repellat
					repellendus sed sequi tenetur totam unde voluptatibus? Cum, debitis excepturi
					exercitationem maxime nihil sunt. Atque aut deserunt esse impedit ipsam ipsum itaque iure
					nobis nulla pariatur! Ad debitis nam omnis qui quo repudiandae voluptates! Earum harum
					incidunt inventore minus nihil! Aliquid consequatur earum eius in modi nemo nobis, odit
					optio quisquam similique, sit, voluptas. Aliquam atque autem cumque cupiditate dignissimos
					enim eos eum explicabo fugiat ipsum itaque magni natus necessitatibus nemo nihil nulla
					officia perferendis porro quasi quo reiciendis similique totam unde, ut vel. Facere neque
					quae reiciendis sit.
				</p>
				<div className="otstup" />
				<h2>Tarifs</h2>
				<PricesExcursion prices={data.prices} />
			</LayoutsPages>
		</EndPagesExcursionsProvider>
	)
}

export const query = graphql`
	query($pagePath: String!) {
		strapiExcursions(path: { eq: $pagePath }) {
			...excursionMain
			...excursionDirection
			...excursionTransports
			...excursionPrices
			hours
		}
	}
`

export default ExcursionsPage
