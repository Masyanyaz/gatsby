module.exports = async (args) => {
	const { graphql, createPage, reporter, components, path } = args
	const result = await graphql(`
		{
			allStrapiTours {
				edges {
					node {
						path
						direction {
							path
						}
						categories {
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

	const { allStrapiTours } = result.data

	allStrapiTours.edges.forEach(({ node }) => {
		createPage({
			path: `${path.programsPath}/${node.direction.path}/${path.tours}/${node.categories[0].path}/${node.path}`,
			component: components.PageProgram,
			context: {
				pagePath: node.path,
			},
		})
	})
}
