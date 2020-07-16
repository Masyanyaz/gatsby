// const groupQuery = require('./groupQuery')
// const createExcursionsFilters = require('./excursions/filters')
// const createProgramsFilters = require('./programs/filters')
//
// module.exports = async (args) => {
// 	const { graphql, createPage, reporter, components, path } = args
// 	const result = await graphql(
// 		`
// 			{
// 				allStrapiDirections {
// 					edges {
// 						node {
// 							strapiId
// 							path
// 							tours {
// 								id
// 							}
// 							excursions {
// 								id
// 							}
// 						}
// 					}
// 				}
// 			}
// 		`,
// 	)
//
// 	// Handle errors
// 	if (result.errors) {
// 		reporter.panicOnBuild(`Error while running GraphQL query.`)
// 		return
// 	}
//
// 	const { allStrapiDirections } = result.data
//
// 	const groupResult = await groupQuery({ graphql, reporter })
//
// 	allStrapiDirections.edges.forEach((direction) => {
// 		const categoriesInDirection = groupResult.allStrapiCategories.find(
// 			({ fieldValue }) => +fieldValue === direction.node.strapiId,
// 		)
// 		const seasonsInDirection = groupResult.allStrapiSeasons.find(
// 			({ fieldValue }) => +fieldValue === direction.node.strapiId,
// 		)
// 		const typesInDirection = groupResult.allStrapiTypes.find(
// 			({ fieldValue }) => +fieldValue === direction.node.strapiId,
// 		)
//
// 		const context = {
// 			directionPath: direction.node.path,
// 			categories: categoriesInDirection.edges,
// 			seasons: seasonsInDirection.edges,
// 			types: typesInDirection.edges,
// 		}
//
// 		const extendedArgs = {
// 			...args,
// 			direction,
// 			context,
// 		}
//
// 		if (direction.node.tours.length) {
// 			createProgramsFilters(extendedArgs)
// 		}
//
// 		if (direction.node.excursions.length) {
// 			createExcursionsFilters(extendedArgs)
// 		}
// 	})
// }
