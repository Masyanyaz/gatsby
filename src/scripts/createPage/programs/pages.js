module.exports = async (args) => {
	const { graphql, createPage, reporter, components, path } = args
	const result = await graphql(`
		{
			allStrapiTours {
				edges {
					node {
						path
						directions {
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
			path: `${path.programsPath}/${node.directions[0].path}/${path.tours}/${node.categories[0].path}/${node.path}`,
			component: components.pageProgram,
			context: {
				pagePath: node.path,
			},
		})
	})
}
