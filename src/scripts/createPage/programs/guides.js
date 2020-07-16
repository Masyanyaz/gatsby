module.exports = async (args) => {
	const { createPage, components, path, direction, category, context, data } = args

	const copyContext = { ...context }

	if (category) {
		copyContext.categoryPath = category.node.path
	}

	data.guides.forEach((guide) => {
		createPage({
			path: `${path.filterPage}/${path.tours}/${direction ? direction.node.path : 'all'}/${
				copyContext.categoryPath || 'all'
			}/${guide.node.path}/all`,
			component: components.filtersProgram,
			context: {
				guidePath: guide.node.path,
				...copyContext,
			},
		})
	})
}
