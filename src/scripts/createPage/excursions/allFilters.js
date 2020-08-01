module.exports = async (args) => {
	const { createPage, components, path, service } = args

	const context = {
		service: service.excursions,
	}

	createPage({
		path: `${path.filterPage}/${path.excursion}/all/all`,
		component: components.filtersExcursion,
		context,
	})
}
