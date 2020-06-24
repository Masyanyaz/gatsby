exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const filterPath = "catalogue/filters"
  const programmsPath = "catalogue/programms"

  // Query for markdown nodes to use in creating pages.
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
            }
          }
        }
        allStrapiTours {
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
        allStrapiTypes {
          group(
            field: tours___direction
          ) {
            fieldValue
            edges {
              node {
                id
                name
                path
              }
            }
          }
        }
        allStrapiCategories {
          group(
            field: tours___direction
          ) {
            fieldValue
            edges {
              node {
                id
                name
                path
              }
            }
          }
        }
      }
    `
  )
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const types = result.data.allStrapiTypes.group.map(group => {
    const unique = []
    return {
      fieldValue: group.fieldValue,
      edges: group.edges.filter((type) => {
        if (!unique.includes(type.node.id)) {
          unique.push(type.node.id)
          return type
        }
      })
    }
  })

  const categories = result.data.allStrapiCategories.group.map(group => {
    const unique = []
    return {
      fieldValue: group.fieldValue,
      edges: group.edges.filter((type) => {
        if (!unique.includes(type.node.id)) {
          unique.push(type.node.id)
          return type
        }
      })
    }
  })

  // Create pages for each markdown file.
  result.data.allStrapiDirections.edges.forEach(({ node }) => {

    const path = node.path
    const typesInDirection = types.find(({ fieldValue }) => +fieldValue === node.strapiId)
    const categoriesInDirection = categories.find(({ fieldValue }) => +fieldValue === node.strapiId)

    typesInDirection.edges.forEach(edge => {
      createPage({
        path: `${ filterPath }/${ path }/tours/${ edge.node.path }/`,
        component: require.resolve(`./src/templates/programs/filters/filters`),
        // In your blog post template's graphql query, you can use pagePath
        // as a GraphQL variable to query for data from the markdown file.
        context: {
          pagePath: path,
          typePath: edge.node.path,
          types: typesInDirection.edges,
          categories: categoriesInDirection.edges
        }
      })
    })

    categoriesInDirection.edges.forEach(edge => {
      createPage({
        path: `${ filterPath }/${ path }/tours/${ edge.node.path }/`,
        component: require.resolve(`./src/templates/programs/filters/filters`),
        // In your blog post template's graphql query, you can use pagePath
        // as a GraphQL variable to query for data from the markdown file.
        context: {
          pagePath: path,
          catPath: edge.node.path,
          types: typesInDirection.edges,
          categories: categoriesInDirection.edges
        }
      })
    })

    createPage({
      path: `${ filterPath }/${ path }/tours/all/`,
      component: require.resolve(`./src/templates/programs/filters/filters`),
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        pagePath: path,
        types: typesInDirection.edges,
        categories: categoriesInDirection.edges
      }
    })
  })
  result.data.allStrapiTours.edges.forEach(({ node }) => {
    const path = node.path
    const category = node.category ? node.category.path : "other"

    createPage({
      path: `${ programmsPath }/${ node.direction.path }/tours/${ category }/${ path }`,
      component: require.resolve(`./src/templates/programs/pages/pages`),
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        pagePath: path
      }
    })
  })
}

exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig()
  if (stage.startsWith("develop") && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-dom": "@hot-loader/react-dom"
    }
  }
}
