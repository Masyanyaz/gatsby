module.exports = async (args) => {
	const { graphql, createPage, reporter, components, path } = args

	createPage({
		path: `${path.filterPage}/${path.excursion}/all/all`,
		component: components.filtersExcursion,
	})
}
