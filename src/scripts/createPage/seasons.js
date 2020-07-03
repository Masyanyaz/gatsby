const createTypes = require("./types")

module.exports = async ({ graphql, reporter, createPage, path, components, direction, category, context }) => {
  const copyContext = { ...context }

  const result = await graphql(`
    {
      allStrapiSeasons {
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

  const { allStrapiSeasons } = result.data

  if (category) {
    copyContext.categoryPath = category.node.path
  }

  allStrapiSeasons.edges.forEach(season => {

    // createTypes({ graphql, reporter, createPage, path, components, direction, context, category, season })

    createPage({
      path: `${ path.filterPage }/${ path.tours }/${ direction.node.path }/${ copyContext.categoryPath || 'all' }/${ season.node.path }/all`,
      component: components.filtersProgram,
      context: {
        seasonPath: season.node.path,
        ...copyContext
      },
    })

  })
}
