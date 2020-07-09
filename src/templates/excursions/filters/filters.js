import React from 'react'
import { graphql } from 'gatsby'

import './filters.css'

import LayoutsFilters from '../../../layouts/filters'
import PreviewExcursions from '../../../components/preview/excursions'

const FiltersPage = (props) => {
	const data = props.data

	return (
		<LayoutsFilters direction={data.strapiDirections} service="excursion">
			<h1>{data.strapiDirections.name}</h1>
			<div>Описание</div>
			<hr />
			<div className="preview__grid">
				{data.allStrapiExcursions.edges.length
					? data.allStrapiExcursions.edges.map(({ node }) => (
							<PreviewExcursions key={node.id} node={node} />
					  ))
					: 'Экскурсий не найдено'}
			</div>
		</LayoutsFilters>
	)
}

export const query = graphql`
	query($directionPath: String) {
		strapiDirections(path: { eq: $directionPath }) {
			name
			path
		}
		allStrapiExcursions(filter: { direction: { path: { eq: $directionPath } } }) {
			edges {
				node {
					id
					name
					hours
					path
					transports {
						id
						name
						icon {
							id
							name
							publicURL
						}
					}
					direction {
						path
					}
					prices {
						count
						value
					}
				}
			}
		}
	}
`

export default FiltersPage
