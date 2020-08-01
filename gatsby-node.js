const createPrograms = require('./src/scripts/createPage/programs')
const createExcursions = require('./src/scripts/createPage/excursions')

const service = {
	tours: 'TOURS',
	excursions: 'EXCURSIONS',
}

const path = {
	filterPage: 'catalogue/filters',
	programsPath: 'catalogue/programs',
	tours: 'tours',
	excursion: 'excursion',
}

const components = {
	filtersProgram: require.resolve(`./src/templates/filters/programs`),
	pageProgram: require.resolve(`./src/templates/endPages/programs`),
	filtersExcursion: require.resolve(`./src/templates/filters/excursions`),
	pageExcursion: require.resolve(`./src/templates/endPages/excursions`),
	filtersInspirations: require.resolve(`./src/templates/filters/inspirations`),
}

exports.createPages = async ({ graphql, actions, reporter }) => {
	const { createPage } = actions

	const args = {
		graphql,
		createPage,
		reporter,
		components,
		path,
		service,
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
