import React from 'react'
import { graphql } from 'gatsby'

import './filters.css'

import FiltersLayout from '../../../layouts/filters/filters'
import PreviewProgram from '../../../components/programs/preview/preview'
import Filters from '../../../components/programs/filters/filters'

import Combi from './asd'

const FiltersPage = (props) => {
	const data = props.data
	const context = props.pageContext

	return (
		<FiltersLayout direction={data.strapiDirections} service="tour">
			<h1>{data.strapiDirections.name}</h1>
			<div>Описание</div>
			<hr />
			<h2>Фильтры:</h2>
			<Filters {...context} />
			<hr />
			<div className="preview__grid">
				{data.allStrapiTours.edges.length
					? data.allStrapiTours.edges.map(({ node }) => (
							<PreviewProgram key={node.id} node={node} directionPath={context.directionPath} />
					  ))
					: 'Туров с данными фильтрами не найдено'}
			</div>
			<Combi
				towns={data.strapiDirections.towns}
				directionPath={context.directionPath}
				context={context}
			/>
		</FiltersLayout>
	)
}

export const query = graphql`
	query($directionPath: String, $categoryPath: String, $seasonPath: String, $typePath: String) {
		strapiDirections(path: { eq: $directionPath }) {
			name
			path
			towns {
				id
			}
		}
		allStrapiTours(
			filter: {
				direction: { path: { eq: $directionPath } }
				category: { path: { eq: $categoryPath } }
				seasons: { elemMatch: { path: { eq: $seasonPath } } }
				types: { elemMatch: { path: { eq: $typePath } } }
			}
		) {
			edges {
				node {
					direction {
						path
					}
					id
					name
					path
					preview_text
					prices {
						types {
							value
						}
					}
					days {
						id
					}
					types {
						id
						name
						path
						img {
							publicURL
						}
					}
					category {
						id
						name
						path
					}
					towns {
						id
						name
					}
				}
			}
		}
	}
`

export default FiltersPage
