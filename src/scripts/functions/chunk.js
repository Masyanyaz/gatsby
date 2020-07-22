const chunk = (array, chunkSize) => {
	const result = []
	const copyArray = [...array]

	while (copyArray.length) {
		result.push(copyArray.splice(0, chunkSize))
	}

	return result
}

export default chunk
