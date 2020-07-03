const groupQuery = require("./groupQuery")
const createCategories = require("./categories")
const createSeasons = require("./seasons")
const createTypes = require("./types")

module.exports = async ({ graphql, reporter, createPage, path, components }) => {
  const result = await graphql(
    `
      {
        allStrapiDirections(filter: {
          tours: {
            elemMatch: {
              id: {
                ne: null
              }
            }
          }
        }) {
          edges {
            node {
              strapiId
              path
              tours {
                id
              }
              excursions {
                id
              }
            }
          }
        }
        
      }
    `,
  )

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const { allStrapiDirections } = result.data

  const groupResult = await groupQuery({ graphql, reporter })

  allStrapiDirections.edges.forEach(direction => {

    const categoriesInDirection = groupResult.allStrapiCategories.find(({ fieldValue }) => +fieldValue === direction.node.strapiId)
    const seasonsInDirection = groupResult.allStrapiSeasons.find(({ fieldValue }) => +fieldValue === direction.node.strapiId)
    const typesInDirection = groupResult.allStrapiTypes.find(({ fieldValue }) => +fieldValue === direction.node.strapiId)

    const context = {
      directionPath: direction.node.path,
      types: typesInDirection.edges,
      categories: categoriesInDirection.edges,
      seasons: seasonsInDirection.edges,
    }

    createCategories({ graphql, reporter, createPage, path, components, direction, context })

    createSeasons({ graphql, reporter, createPage, path, components, direction, context })

    // createTypes({ graphql, reporter, createPage, path, components, direction, context })

    createPage({
      path: `${ path.filterPage }/${ path.tours }/${ direction.node.path }/all/all/all`,
      component: components.filtersProgram,
      context,
    })

  })
}
