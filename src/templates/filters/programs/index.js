import React from 'react'
import { graphql } from 'gatsby'

import './index.css'

import LayoutsFilters from '../../../layouts/filters'
import PreviewTours from '../../../components/preview/tours'
import GeneralFilter from '../../../general/filter'
import PreviewToursSubDirections from '../../../components/preview/tours/filters/subDirections'
import PreviewToursThisDirection from '../../../components/preview/tours/filters/thisDirection'

const FiltersPage = ({ data, pageContext, path }) => {
	const { strapiDirections, allStrapiTours } = data
	const { directionPath, service } = pageContext

	const columnContext = {
		direction: strapiDirections,
		directionPath,
		service,
	}

	return (
		<LayoutsFilters columnContext={columnContext}>
			<h1>{directionPath ? strapiDirections.name : 'Все направления'}</h1>
			<div>Описание</div>
			<hr />
			<h2>Фильтры:</h2>
			<GeneralFilter {...pageContext} />
			<hr />
			<div className="preview__grid">
				{allStrapiTours.edges.length ? (
					allStrapiTours.edges
						.filter(({ node }) =>
							directionPath ? node.directions[0].path === directionPath : true,
						)
						.map(({ node }) => <PreviewTours key={node.id} node={node} backPath={path} />)
				) : (
					<PreviewToursThisDirection directionPath={directionPath} backPath={path} />
				)}
			</div>

			<PreviewToursSubDirections
				directionPath={directionPath}
				categoryPath={pageContext.categoryPath}
				guidePath={pageContext.guidePath}
				backPath={path}
			/>
		</LayoutsFilters>
	)
}

export const query = graphql`
	query($directionPath: String, $categoryPath: String, $guidePath: String) {
		strapiDirections(path: { eq: $directionPath }) {
			...directionMain
			...directionTours
			...directionExcursions
		}
		allStrapiTours(
			filter: {
				directions: { elemMatch: { path: { eq: $directionPath } } }
				categories: { elemMatch: { path: { eq: $categoryPath } } }
				guide: { path: { eq: $guidePath } }
			}
		) {
			edges {
				node {
					...toursMain
					...toursDirections
					...toursPrices
					...toursDays
					...toursCategories
					...toursTowns
					...toursPriceType
					...toursSeason
					preview_text
				}
			}
		}
	}
`

export default FiltersPage
