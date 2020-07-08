const { uniqueValueArray } = require('./functions')

module.exports = async ({ graphql, reporter }) => {
	const result = await graphql(
		`
			{
				allStrapiTypes {
					group(field: tours___direction) {
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
					group(field: tours___direction) {
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
					group(field: tours___direction) {
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
		`,
	)

	if (result.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`)
		return
	}

	const { allStrapiCategories, allStrapiSeasons, allStrapiTypes } = result.data

	return {
		allStrapiCategories: uniqueValueArray(allStrapiCategories),
		allStrapiSeasons: uniqueValueArray(allStrapiSeasons),
		allStrapiTypes: uniqueValueArray(allStrapiTypes),
	}
}
