const createAllFilters = require('./allFilters')

module.exports = async (args) => {
	const { graphql, createPage, reporter, components, path, service } = args

	const result = await graphql(
		`
			{
				allStrapiDirections(filter: { excursions: { elemMatch: { id: { ne: null } } } }) {
					edges {
						node {
							strapiId
							path
						}
					}
				}
			}
		`,
	)

	// Handle errors
	if (result.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`)
		return
	}

	const { allStrapiDirections } = result.data

	allStrapiDirections.edges.forEach((direction) => {
		const context = {
			service: service.excursions,
			directionPath: direction.node.path,
		}

		createPage({
			path: `${path.filterPage}/${path.excursion}/${direction.node.path}/all`,
			component: components.filtersExcursion,
			context,
		})
	})

	await createAllFilters(args)
}
