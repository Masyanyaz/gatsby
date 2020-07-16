const createProgramsPages = require('./pages')
const createProgramsFilters = require('./filters')

module.exports = async (args) => {
	// Создание страниц фильтров туров
	await createProgramsFilters(args)

	// Создание конечных страниц туров
	await createProgramsPages(args)
}
