module.exports = async (args) => {
	const { graphql, createPage, reporter, components, path, direction, context } = args

	createPage({
		path: `${path.filterPage}/${path.excursion}/${direction.node.path}/all`,
		component: components.filtersExcursion,
		context,
	})
}
