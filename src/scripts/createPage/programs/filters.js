const createCategories = require('./categories')
const createSeasons = require('./seasons')

module.exports = async (args) => {
	const { graphql, createPage, reporter, components, path, direction, context } = args

	await createCategories(args)

	await createSeasons(args)

	// createTypes({ graphql, reporter, createPage, path, components, direction, context })

	createPage({
		path: `${direction.node.path}`,
		component: components.filtersProgram,
		context,
	})
}
