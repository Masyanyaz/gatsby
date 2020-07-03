const createTours = require("./src/scripts/createPage/tours")
const createExcursions = require("./src/scripts/createPage/excursions/excursions")
const createDirections = require("./src/scripts/createPage/directions")

const path = {
  filterPage: "catalogue/filters",
  programsPath: "catalogue/programs",
  tours: "tours",
  excursion: "excursion",
}

const components = {
  filtersProgram: require.resolve(`./src/templates/programs/filters/filters`),
  PageProgram: require.resolve(`./src/templates/programs/pages/pages`),
  filtersExcursion: require.resolve(`./src/templates/excursions/filters/filters`),
  PageExcursion: require.resolve(`./src/templates/excursions/pages/pages`),
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Создание страниц направлений
  await createDirections({ graphql, path, createPage, components, reporter })

  // Создание страниц туров
  await createTours({ graphql, path, createPage, components, reporter })

  // Создание страниц экскурсий
  await createExcursions({ graphql, path, createPage, components, reporter })

}

exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig()
  if (stage.startsWith("develop") && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-dom": "@hot-loader/react-dom",
    }
  }
}
