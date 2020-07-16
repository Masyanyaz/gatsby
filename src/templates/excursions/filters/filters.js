import React from 'react'
import { graphql } from 'gatsby'

import './filters.css'

import LayoutsFilters from '../../../layouts/filters'
import PreviewExcursions from '../../../components/preview/excursions'

const FiltersPage = (props) => {
	const { strapiDirections, allStrapiExcursions } = props.data
	const backPath = props.path

	return (
		<LayoutsFilters direction={strapiDirections} service="excursion">
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
	)
}

export const query = graphql`
	query($directionPath: String) {
		strapiDirections(path: { eq: $directionPath }) {
			name
			path
			tours {
				id
			}
		}
		allStrapiExcursions(filter: { direction: { path: { eq: $directionPath } } }) {
			edges {
				node {
					id
					name
					hours
					path
					direction {
						path
					}
					transports {
						id
						name
						image {
							publicURL
						}
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
