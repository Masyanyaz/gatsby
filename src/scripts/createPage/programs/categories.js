const createSeasons = require('./seasons')
const createTypes = require('./types')

module.exports = async (args) => {
	const { graphql, createPage, reporter, components, path, direction, context } = args
	const result = await graphql(`
		{
			allStrapiCategories(filter: { tours: { elemMatch: { id: { ne: null } } } }) {
				edges {
					node {
						id
						name
						path
						tours {
							direction
						}
					}
				}
			}
		}
	`)

	if (result.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`)
		return
	}

	const { allStrapiCategories } = result.data

	allStrapiCategories.edges.forEach((category) => {
		const extendedArgs = { ...args, category }

		createSeasons(extendedArgs)

		// createTypes({ graphql, reporter, createPage, path, components, direction, context, category })

		createPage({
			path: `${path.filterPage}/${path.tours}/${direction ? direction.node.path : 'all'}/${
				category.node.path
			}/all/all`,
			component: components.filtersProgram,
			context: {
				categoryPath: category.node.path,
				...context,
			},
		})
	})
}
