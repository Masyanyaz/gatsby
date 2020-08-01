import React from 'react'
import { graphql } from 'gatsby'

import './index.css'

import LayoutsFilters from '../../../layouts/filters'
import PreviewTours from '../../../components/preview/tours'

const FiltersPage = ({ data, pageContext, path }) => {
	const { strapiInspirations, allStrapiTours } = data
	const { service } = pageContext

	const columnContext = {
		service,
	}

	return (
		<LayoutsFilters columnContext={columnContext}>
			<h1>{strapiInspirations.name}</h1>
			<div>Описание</div>
			<hr />
			<div className="preview__grid">
				{allStrapiTours.edges.map(({ node }) => (
					<PreviewTours key={node.id} node={node} backPath={path} />
				))}
			</div>
		</LayoutsFilters>
	)
}

export const query = graphql`
	query($inspirationPath: String) {
		strapiInspirations(path: { eq: $inspirationPath }) {
			...inspirationMain
		}
		allStrapiTours(filter: { inspirations: { elemMatch: { path: { eq: $inspirationPath } } } }) {
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
