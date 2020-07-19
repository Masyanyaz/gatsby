import React, { createContext } from 'react'
import { graphql } from 'gatsby'

import './index.css'

import LayoutsFilters from '../../../layouts/filters'
import PreviewExcursions from '../../../components/preview/excursions'

export const ExcursionFilterInfo = createContext(false)

const FiltersPage = (props) => {
	const { strapiDirections, allStrapiExcursions } = props.data
	const context = props.pageContext
	const backPath = props.path
	const directionPath = context.directionPath

	const excursionFilterInfoContext = {
		direction: strapiDirections,
		directionPath: directionPath,
	}

	return (
		<ExcursionFilterInfo.Provider value={excursionFilterInfoContext}>
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
		</ExcursionFilterInfo.Provider>
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
