const createCategories = require('./categories')
const createGuides = require('./guides')

module.exports = async (args) => {
	const { createPage, components, path, data, service } = args

	const context = {
		service: service.tours,
	}

	const extendedArgs = {
		...args,
		context,
		data,
	}

	await createCategories(extendedArgs)

	await createGuides(extendedArgs)

	createPage({
		path: `${path.filterPage}/${path.tours}/all/all/all/all`,
		component: components.filtersProgram,
		context,
	})
}
