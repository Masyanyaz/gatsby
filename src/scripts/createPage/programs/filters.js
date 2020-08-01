const createCategories = require('./categories')
const createGuides = require('./guides')
const createAllFilters = require('./allFilters')
const createInspirations = require('./inspirations')

module.exports = async (args) => {
	const { graphql, createPage, reporter, components, service } = args
	const result = await graphql(
		`
			{
				allStrapiDirections(filter: { tours: { elemMatch: { id: { ne: null } } } }) {
					edges {
						node {
							strapiId
							id
							name
							path
						}
					}
				}
				allStrapiCategories(filter: { tours: { elemMatch: { id: { ne: null } } } }) {
					edges {
						node {
							id
							name
							path
						}
					}
				}
				allStrapiGuides(filter: { tours: { elemMatch: { id: { ne: null } } } }) {
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

	const { allStrapiDirections, allStrapiCategories, allStrapiGuides } = result.data

	const data = {
		directions: allStrapiDirections.edges,
		categories: allStrapiCategories.edges,
		guides: allStrapiGuides.edges,
	}

	await Promise.all(
		allStrapiDirections.edges.map(async (direction) => {
			const context = {
				service: service.tours,
				directionPath: direction.node.path,
			}

			const extendedArgs = {
				...args,
				data,
				direction,
				context,
			}

			await createCategories(extendedArgs)

			await createGuides(extendedArgs)

			createPage({
				path: direction.node.path,
				component: components.filtersProgram,
				context,
			})
		}),
	)

	await createAllFilters({ ...args, data })

	// Создание страниц впечатлений
	await createInspirations(args)
}
