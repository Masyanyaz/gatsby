import React from 'react'
import { graphql } from 'gatsby'

import LayoutsPages from '../../../layouts/pages'

import './pages.css'

import ColumnBlocksInfo from '../../../components/column/blocks/info'

const ExcursionsPage = (props) => {
	const data = props.data.strapiExcursions
	const pricesArray = data.prices.map((price) => price.value)

	const componentInfo = () => (
		<ColumnBlocksInfo prices={pricesArray} hours={data.hours} transports={data.transports} />
	)

	return (
		<LayoutsPages componentInfo={componentInfo}>
			<div className="programm__img">
				<img
					src="https://21foto.ru/wp-content/uploads/2015/11/20120519-IMGP0657-06-Panorama-scaled.jpg"
					alt=""
				/>
			</div>
			<h1>{data.name}</h1>
			<p>{data.direction.name}</p>
		</LayoutsPages>
	)
}

export const query = graphql`
	query($pagePath: String!) {
		strapiExcursions(path: { eq: $pagePath }) {
			name
			direction {
				name
			}
			hours
			transports {
				id
				name
				icon {
					publicURL
				}
			}
			prices {
				count
				value
			}
		}
	}
`

export default ExcursionsPage
