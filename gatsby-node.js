function uniqueValueArray(array) {
  return array.group.map(items => {
    const unique = []
    return {
      fieldValue: items.fieldValue,
      edges: items.edges.filter((item) => {
        if (!unique.includes(item.node.id)) {
          unique.push(item.node.id)
          return item
        }
      })
    }
  })
}

function combine(a, min = 1) {
  let fn = function(n, src, got, all) {
    if (n === 0) {
      if (got.length > 0) {
        all[all.length] = got;
      }
      return;
    }
    for (let j = 0; j < src.length; j++) {
      fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
    }
  }
  let all = [];
  for (let i = min; i < a.length; i++) {
    fn(i, a, [], all);
  }
  all.push(a);
  return all;
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const filterPath = "catalogue/filters"
  const programmsPath = "catalogue/programms"

  const components = {
    filtersProgram: require.resolve(`./src/templates/programs/filters/filters`),
    PageProgram: require.resolve(`./src/templates/programs/pages/pages`),
  }

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
        allStrapiSeasons {
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

  const categories = uniqueValueArray(result.data.allStrapiCategories)
  const seasons = uniqueValueArray(result.data.allStrapiSeasons)
  const types = uniqueValueArray(result.data.allStrapiTypes)

  let typePath = ''

  result.data.allStrapiDirections.edges.forEach(({ node }) => {

    const path = node.path

    const categoriesInDirection = categories.find(({ fieldValue }) => +fieldValue === node.strapiId)
    const seasonsInDirection = seasons.find(({ fieldValue }) => +fieldValue === node.strapiId) ||
      { edges: [ { node: {id: 'all', path: 'all'} } ] }
    const typesInDirection = types.find(({ fieldValue }) => +fieldValue === node.strapiId)

    const typesURL = combine(typesInDirection.edges.map(type => type.node.path))
    typesURL.push(['all'])
    typesURL.forEach(type => {
      const typePath = type.join('/')

      createPage({
        path: `${ filterPath }/${ path }/tours/all/all/${ typePath }`,
        component: components.filtersProgram,
        context: {
          pagePath: path,
          pathPage: {
            direction: path,
            category: 'all',
            season: 'all',
            type: typePath,
          },
          types: typesInDirection.edges,
          categories: categoriesInDirection.edges,
          seasons: seasonsInDirection.edges
        }
      })

    })

    // Создание страниц типов /catalogue/filters/spb/tours/all/all/...


    // Создание страниц сезонов и типов /catalogue/filters/spb/tours/all/.../...
    seasonsInDirection.edges.forEach(season => {

      typePath = ''

      typesInDirection.edges.forEach(type => {

        typePath += `/${ type.node.path }`

        createPage({
          path: `${ filterPath }/${ path }/tours/all/${ season.node.path }${ typePath }`,
          component: components.filtersProgram,
          context: {
            pagePath: path,
            pathPage: {
              direction: path,
              category: 'all',
              season: season.node.path,
              type: typePath,
            },
            types: typesInDirection.edges,
            categories: categoriesInDirection.edges,
            seasons: seasonsInDirection.edges
          }
        })

      })

      createPage({
        path: `${ filterPath }/${ path }/tours/all/${ season.node.path }/all`,
        component: components.filtersProgram,
        context: {
          pagePath: path,
          pathPage: {
            direction: path,
            category: 'all',
            season: season.node.path,
            type: 'all',
          },
          types: typesInDirection.edges,
          categories: categoriesInDirection.edges,
          seasons: seasonsInDirection.edges
        }
      })

    })

    // Создание страниц категорий, сезонов и типов /catalogue/filters/spb/tours/.../.../...
    categoriesInDirection.edges.forEach(category => {

      typePath = ''
      typesInDirection.edges.forEach(type => {

        typePath += `/${ type.node.path }`

        createPage({
          path: `${ filterPath }/${ path }/tours/${ category.node.path }/all${ typePath }`,
          component: components.filtersProgram,
          context: {
            pagePath: path,
            pathPage: {
              direction: path,
              category: category.node.path,
              season: 'all',
              type: typePath,
            },
            catPath: category.node.path,
            types: typesInDirection.edges,
            categories: categoriesInDirection.edges,
            seasons: seasonsInDirection.edges
          }
        })

      })

      seasonsInDirection.edges.forEach(season => {

        typePath = ''

        typesInDirection.edges.forEach(type => {

          typePath += `/${ type.node.path }`

          createPage({
            path: `${ filterPath }/${ path }/tours/${ category.node.path }/${ season.node.path }${ typePath }`,
            component: components.filtersProgram,
            context: {
              pagePath: path,
              pathPage: {
                direction: path,
                category: category.node.path,
                season: season.node.path,
                type: typePath,
              },
              catPath: category.node.path,
              types: typesInDirection.edges,
              categories: categoriesInDirection.edges,
              seasons: seasonsInDirection.edges
            }
          })

        })

        createPage({
          path: `${ filterPath }/${ path }/tours/${ category.node.path }/${ season.node.path }/all`,
          component: components.filtersProgram,
          context: {
            pagePath: path,
            pathPage: {
              direction: path,
              category: category.node.path,
              season: season.node.path,
              type: 'all',
            },
            catPath: category.node.path,
            types: typesInDirection.edges,
            categories: categoriesInDirection.edges,
            seasons: seasonsInDirection.edges
          }
        })

      })

      createPage({
        path: `${ filterPath }/${ path }/tours/${ category.node.path }/all/all`,
        component: components.filtersProgram,
        context: {
          pagePath: path,
          pathPage: {
            direction: path,
            category: category.node.path,
            season: 'all',
            type: 'all',
          },
          catPath: category.node.path,
          types: typesInDirection.edges,
          categories: categoriesInDirection.edges,
          seasons: seasonsInDirection.edges
        }
      })

    })



  })

  result.data.allStrapiTours.edges.forEach(({ node }) => {
    const path = node.path
    const category = node.category ? node.category.path : "other"

    createPage({
      path: `${ programmsPath }/${ node.direction.path }/tours/${ category }/${ path }`,
      component: components.PageProgram,
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
