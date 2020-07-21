import React, { createContext } from 'react'

export const ExcursionFilterInfo = createContext(false)

const FiltersExcursionsProvider = ({ children, direction, directionPath }) => {
	const context = {
		direction,
		directionPath,
	}

	return <ExcursionFilterInfo.Provider value={context}>{children}</ExcursionFilterInfo.Provider>
}

export default FiltersExcursionsProvider
