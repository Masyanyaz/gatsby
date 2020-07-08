// const { combine } = require('../functions')
//
// module.exports = async ({
// 	graphql,
// 	reporter,
// 	createPage,
// 	path,
// 	components,
// 	direction,
// 	category,
// 	context,
// 	season,
// }) => {
// 	const result = await graphql(`
// 		{
// 			allStrapiTypes(filter: { tours: { elemMatch: { id: { ne: null } } } }) {
// 				edges {
// 					node {
// 						id
// 						name
// 						path
// 						tours {
// 							direction
// 						}
// 					}
// 				}
// 			}
// 		}
// 	`)
//
// 	if (result.errors) {
// 		reporter.panicOnBuild(`Error while running GraphQL query.`)
// 		return
// 	}
//
// 	const { allStrapiTypes } = result.data
//
// 	if (category) {
// 		context.categoryPath = category.node.path
// 	}
//
// 	if (season) {
// 		context.seasonPath = season.node.path
// 	}
//
// 	const types = combine(allStrapiTypes.edges.map((type) => type.node.path))
//
// 	types.forEach((type) => {
// 		const typePath = type.join('/')
//
// 		createPage({
// 			path: `${path.filterPage}/${direction.node.path}/${path.tours}/${
// 				context.categoryPath || 'all'
// 			}/${context.seasonPath || 'all'}/${typePath}`,
// 			component: components.filtersProgram,
// 			context: {
// 				typePath: typePath,
// 				...context,
// 			},
// 		})
// 	})
// }
