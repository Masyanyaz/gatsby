const createExcursionsPages = require('./pages')
const createExcursionsFilters = require('./filters')

module.exports = async (args) => {
	// Создание страниц фильтров экскурсий
	await createExcursionsFilters(args)

	// Создание конечных страниц экскурсий
	await createExcursionsPages(args)
}
