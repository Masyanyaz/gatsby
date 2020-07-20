const combine = (a, min = 1) => {
	let fn = function (n, src, got, all) {
		if (n === 0) {
			if (got.length > 0) {
				all[all.length] = got
			}
			return
		}
		for (let j = 0; j < src.length; j++) {
			fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all)
		}
	}
	let all = []
	for (let i = min; i < a.length; i++) {
		fn(i, a, [], all)
	}
	all.push(a)
	return all
}

const itemsInDirections = (array, id) => {
	return array.edges.filter(({ node: { tours } }) => {
		return tours.map(({ direction }) => direction).includes(id)
	})
}

const setDisabledNullItems = (array, id) => {
	const idItems = itemsInDirections(array, id).map(({ node: { id } }) => id)

	const copyArray = JSON.parse(JSON.stringify(array))

	return copyArray.edges.map((item) => {
		item.node.disabled = !idItems.includes(item.node.id)
		return item
	})
}

const getLengthToursWithFilter = (array, directionId = null, categoryId = null, guideId = null) => {
	return array.edges.filter((tour) => {
		const categories = tour.node.categories.map(({ id }) => id)
		let direction = directionId ? tour.node.direction.id === directionId : true
		let category = categoryId ? categories.includes(categoryId) : true
		let guide = guideId ? tour.node.guide.id === guideId : true

		return direction && category && guide
	}).length
}

module.exports = {
	combine,
	itemsInDirections,
	setDisabledNullItems,
}
