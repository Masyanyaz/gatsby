const createCategories = require('./categories')
const createGuides = require('./guides')
const createAllFilters = require('./allFilters')

const itemsInDirections = (array, id) => {
	return array.edges.filter((item) => {
		return item.node.tours.map((tour) => tour.direction).includes(id)
	})
}

module.exports = async (args) => {
	const { graphql, createPage, reporter, components } = args
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
							tours {
								direction
							}
						}
					}
				}
				allStrapiGuides(filter: { tours: { elemMatch: { id: { ne: null } } } }) {
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

	allStrapiDirections.edges.forEach((direction) => {
		const context = {
			directionPath: direction.node.path,
			...data,
			categories: itemsInDirections(allStrapiCategories, direction.node.strapiId),
			guides: itemsInDirections(allStrapiGuides, direction.node.strapiId),
		}

		const extendedArgs = {
			...args,
			data,
			direction,
			context,
		}

		createCategories(extendedArgs)

		createGuides(extendedArgs)

		createPage({
			path: `${direction.node.path}`,
			component: components.filtersProgram,
			context,
		})
	})

	await createAllFilters({ ...args, data })
}
