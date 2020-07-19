module.exports = async (args) => {
	const { graphql, createPage, reporter, components } = args

	const result = await graphql(
		`
			{
				allStrapiInspirations(filter: { tours: { elemMatch: { id: { ne: null } } } }) {
					edges {
						node {
							id
							name
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

	const { allStrapiInspirations } = result.data

	allStrapiInspirations.edges.forEach((inspiration) => {
		const context = {
			inspirationsPath: inspiration.node.path,
		}

		createPage({
			path: inspiration.node.path,
			component: components.filtersInspirations,
			context,
		})
	})
}
