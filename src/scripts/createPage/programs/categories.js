const createGuides = require('./guides')

module.exports = async (args) => {
	const { createPage, components, path, direction, context, data } = args

	data.categories.forEach((category) => {
		const extendedArgs = { ...args, category }

		createGuides(extendedArgs)

		createPage({
			path: `${path.filterPage}/${path.tours}/${direction ? direction.node.path : 'all'}/${
				category.node.path
			}/all/all`,
			component: components.filtersProgram,
			context: {
				categoryPath: category.node.path,
				...context,
			},
		})
	})
}
