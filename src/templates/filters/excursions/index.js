import React from 'react'
import { graphql } from 'gatsby'

import './index.css'

import LayoutsFilters from '../../../layouts/filters'
import PreviewExcursions from '../../../components/preview/excursions'
import FiltersExcursionsProvider from './provider'

const FiltersPage = (props) => {
	const { strapiDirections, allStrapiExcursions } = props.data
	const context = props.pageContext
	const backPath = props.path
	const directionPath = context.directionPath

	return (
		<FiltersExcursionsProvider direction={strapiDirections} directionPath={directionPath}>
			<LayoutsFilters>
				<h1>{strapiDirections.name}</h1>
				<div>Описание</div>
				<hr />
				<div className="preview__grid">
					{allStrapiExcursions.edges.length
						? allStrapiExcursions.edges.map(({ node }) => (
								<PreviewExcursions key={node.id} node={node} backPath={backPath} />
						  ))
						: 'Экскурсий не найдено'}
				</div>
			</LayoutsFilters>
		</FiltersExcursionsProvider>
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
