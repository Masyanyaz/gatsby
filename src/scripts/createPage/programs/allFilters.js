const createCategories = require('./categories')
const createSeasons = require('./seasons')

module.exports = async (args) => {
	const { graphql, createPage, reporter, components, path } = args

	const result = await graphql(`
		{
			allStrapiCategories(filter: { tours: { elemMatch: { id: { ne: null } } } }) {
				edges {
					node {
						id
						name
						path
					}
				}
			}
			allStrapiSeasons(filter: { tours: { elemMatch: { id: { ne: null } } } }) {
				edges {
					node {
						id
						name
						path
					}
				}
			}
			allStrapiTypes(filter: { tours: { elemMatch: { id: { ne: null } } } }) {
				edges {
					node {
						id
						name
						path
					}
				}
			}
		}
	`)

	if (result.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`)
		return
	}

	const { allStrapiCategories, allStrapiSeasons, allStrapiTypes } = result.data

	const context = {
		categories: allStrapiCategories.edges,
		seasons: allStrapiSeasons.edges,
		types: allStrapiTypes.edges,
	}

	const extendedArgs = {
		...args,
		context,
	}

	await createCategories(extendedArgs)

	await createSeasons(extendedArgs)

	createPage({
		path: `${path.filterPage}/${path.tours}/all/all/all/all`,
		component: components.filtersProgram,
		context,
	})
}
