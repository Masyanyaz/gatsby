module.exports = async (args) => {
	const { graphql, createPage, reporter, components, path } = args

	const result = await graphql(`
		{
			allStrapiExcursions {
				edges {
					node {
						path
						direction {
							path
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

	const { allStrapiExcursions } = result.data

	allStrapiExcursions.edges.forEach(({ node }) => {
		createPage({
			path: `${path.programsPath}/${node.direction.path}/${path.excursion}/all/${node.path}`,
			component: components.PageExcursion,
			context: {
				pagePath: node.path,
			},
		})
	})
}
