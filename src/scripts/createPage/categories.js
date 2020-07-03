const createSeasons = require("./seasons")
const createTypes = require("./types")

module.exports = async ({ graphql, reporter, createPage, path, components, direction, context }) => {
  const result = await graphql(`
    {
      allStrapiCategories {
        edges {
          node {
            id
            name
            path
            tours {
              direction
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const { allStrapiCategories } = result.data

  allStrapiCategories.edges.forEach(category => {

    createSeasons({ graphql, reporter, createPage, path, components, direction, context, category })

    // createTypes({ graphql, reporter, createPage, path, components, direction, context, category })

    createPage({
      path: `${ path.filterPage }/${ path.tours }/${ direction.node.path }/${ category.node.path }/all/all`,
      component: components.filtersProgram,
      context: {
        categoryPath: category.node.path,
        ...context,
      },
    })

  })
}
