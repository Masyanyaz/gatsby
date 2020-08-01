import React from 'react'
import { graphql } from 'gatsby'

import './index.css'

import LayoutsFilters from '../../../layouts/filters'
import PreviewExcursions from '../../../components/preview/excursions'

const FiltersPage = ({ data, pageContext, path }) => {
	const { strapiDirections, allStrapiExcursions } = data
	const { directionPath, service } = pageContext

	const columnContext = {
		direction: strapiDirections,
		directionPath,
		service,
	}

	return (
		<LayoutsFilters columnContext={columnContext}>
			<h1>{strapiDirections.name}</h1>
			<div>Описание</div>
			<hr />
			<div className="preview__grid">
				{allStrapiExcursions.edges.length
					? allStrapiExcursions.edges.map(({ node }) => (
							<PreviewExcursions key={node.id} node={node} backPath={path} />
					  ))
					: 'Экскурсий не найдено'}
			</div>
		</LayoutsFilters>
	)
}

export const query = graphql`
	query($directionPath: String) {
		strapiDirections(path: { eq: $directionPath }) {
			...directionMain
			...directionTours
			...directionExcursions
		}
		allStrapiExcursions(filter: { direction: { path: { eq: $directionPath } } }) {
			edges {
				node {
					...excursionMain
					...excursionDirection
					...excursionTransports
					...excursionPrices
					hours
				}
			}
		}
	}
`

export default FiltersPage
