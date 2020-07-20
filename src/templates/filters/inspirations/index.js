import React from 'react'
import { graphql } from 'gatsby'

import './index.css'

import LayoutsFilters from '../../../layouts/filters'
import PreviewTours from '../../../components/preview/tours'

const FiltersPage = (props) => {
	const { strapiInspirations, allStrapiTours } = props.data
	const backPath = props.path

	return (
		<LayoutsFilters>
			<h1>{strapiInspirations.name}</h1>
			<div>Описание</div>
			<hr />
			<div className="preview__grid">
				{allStrapiTours.edges.map(({ node }) => (
					<PreviewTours key={node.id} node={node} backPath={backPath} />
				))}
			</div>
		</LayoutsFilters>
	)
}

export const query = graphql`
	query($inspirationsPath: String) {
		strapiInspirations(path: { eq: $inspirationsPath }) {
			id
			name
			path
		}
		allStrapiTours(filter: { inspirations: { elemMatch: { path: { eq: $inspirationsPath } } } }) {
			edges {
				node {
					...toursMain
					...toursDirections
					...toursPrices
					...toursDays
					...toursCategories
					...toursTowns
					...toursSeason
					...toursPriceType
					preview_text
				}
			}
		}
	}
`

export default FiltersPage
