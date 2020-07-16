const createPrograms = require('./src/scripts/createPage/programs')
const createExcursions = require('./src/scripts/createPage/excursions')

const path = {
	filterPage: 'catalogue/filters',
	programsPath: 'catalogue/programs',
	tours: 'tours',
	excursion: 'excursion',
}

const components = {
	filtersProgram: require.resolve(`./src/templates/programs/filters/filters`),
	PageProgram: require.resolve(`./src/templates/programs/pages/pages`),
	filtersExcursion: require.resolve(`./src/templates/excursions/filters/filters`),
	PageExcursion: require.resolve(`./src/templates/excursions/pages/pages`),
}

exports.createPages = async ({ graphql, actions, reporter }) => {
	const { createPage } = actions

	const args = {
		graphql,
		createPage,
		reporter,
		components,
		path,
	}

	// Создание страниц туров
	await createPrograms(args)

	// Создание страниц экскурсий
	await createExcursions(args)
}

exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
	const config = getConfig()
	if (stage.startsWith('develop') && config.resolve) {
		config.resolve.alias = {
			...config.resolve.alias,
			'react-dom': '@hot-loader/react-dom',
		}
	}
}
