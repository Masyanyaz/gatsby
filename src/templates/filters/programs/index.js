import React from 'react'
import { graphql } from 'gatsby'

import './index.css'

import LayoutsFilters from '../../../layouts/filters'
import PreviewTours from '../../../components/preview/tours'
import GeneralFilter from '../../../general/filter'
import FiltersProgramsProvider from './provider'
import PreviewToursSubDirections from '../../../components/preview/tours/filters/subDirections'
import PreviewToursThisDirection from '../../../components/preview/tours/filters/thisDirection'

const FiltersPage = ({ data, pageContext, path, ...other }) => {
	const { strapiDirections, allStrapiTours } = data
	const context = pageContext
	const backPath = path
	const directionPath = context.directionPath

	return (
		<FiltersProgramsProvider direction={strapiDirections} directionPath={directionPath}>
			<LayoutsFilters>
				<h1>{directionPath ? strapiDirections.name : 'Все направления'}</h1>
				<div>Описание</div>
				<hr />
				<h2>Фильтры:</h2>
				<GeneralFilter {...context} />
				<hr />
				<div className="preview__grid">
					{allStrapiTours.edges.length ? (
						allStrapiTours.edges
							.filter(({ node }) =>
								directionPath ? node.directions[0].path === directionPath : true,
							)
							.map(({ node }) => <PreviewTours key={node.id} node={node} backPath={backPath} />)
					) : (
						<PreviewToursThisDirection directionPath={directionPath} backPath={backPath} />
					)}
				</div>

				<PreviewToursSubDirections
					directionPath={directionPath}
					categoryPath={context.categoryPath}
					guidePath={context.guidePath}
					backPath={backPath}
				/>
			</LayoutsFilters>
		</FiltersProgramsProvider>
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
