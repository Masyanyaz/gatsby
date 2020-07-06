module.exports = async ({ graphql, reporter, createPage, path, components }) => {
  const result = await graphql(`
    {
      allStrapiExcursions {
        edges {
          node {
            path
            direction {
              path
            }
            category {
              path
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

  const { allStrapiExcursions } = result.data

  allStrapiExcursions.edges.forEach(({ node }) => {

    createPage({
      path: `${ path.filterPage }/${ path.excursion }/${ node.direction.path }/all`,
      component: components.filtersExcursion,
      context: {
        directionPath: node.direction.path,
      },
    })

  })
}
