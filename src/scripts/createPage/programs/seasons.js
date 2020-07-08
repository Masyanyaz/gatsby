const createTypes = require('./types')

module.exports = async (args) => {
	const { graphql, createPage, reporter, components, path, direction, category, context } = args

	const result = await graphql(`
		{
			allStrapiSeasons(filter: { tours: { elemMatch: { id: { ne: null } } } }) {
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

	const { allStrapiSeasons } = result.data

	const copyContext = { ...context }

	if (category) {
		copyContext.categoryPath = category.node.path
	}

	allStrapiSeasons.edges.forEach((season) => {
		// createTypes({ graphql, reporter, createPage, path, components, direction, context, category, season })

		createPage({
			path: `${path.filterPage}/${path.tours}/${direction ? direction.node.path : 'all'}/${
				copyContext.categoryPath || 'all'
			}/${season.node.path}/all`,
			component: components.filtersProgram,
			context: {
				seasonPath: season.node.path,
				...copyContext,
			},
		})
	})
}
