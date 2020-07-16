import React from 'react'
import { graphql } from 'gatsby'

import './filters.css'

import LayoutsFilters from '../../../layouts/filters'
import PreviewTours from '../../../components/preview/tours'
import GeneralFilter from '../../../general/filter'
// TODO: Переименовать!
import Combine from './asd'

const FiltersPage = (props) => {
	const { strapiDirections, allStrapiTours } = props.data
	const context = props.pageContext
	const backPath = props.path

	return (
		<LayoutsFilters direction={strapiDirections} service="tour">
			<h1>{strapiDirections.name}</h1>
			<div>Описание</div>
			<hr />
			<h2>Фильтры:</h2>
			<GeneralFilter {...context} />
			<hr />
			<div className="preview__grid">
				{allStrapiTours.edges.length
					? allStrapiTours.edges.map(({ node }) => (
							<PreviewTours
								key={node.id}
								node={node}
								directionPath={context.directionPath}
								backPath={backPath}
							/>
					  ))
					: 'Туров с данными фильтрами не найдено'}
			</div>
			{/*<Combine
				towns={strapiDirections.towns}
				directionPath={context.directionPath}
				backPath={backPath}
			/>*/}
		</LayoutsFilters>
	)
}

export const query = graphql`
	query($directionPath: String, $categoryPath: String) {
		strapiDirections(path: { eq: $directionPath }) {
			name
			path
			excursions {
				id
			}
			towns {
				id
			}
		}
		allStrapiTours(
			filter: {
				direction: { path: { eq: $directionPath } }
				categories: { elemMatch: { path: { eq: $categoryPath } } }
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
						count {
							value
						}
					}
					days {
						id
					}
					categories {
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
