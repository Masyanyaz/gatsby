import React, { createContext } from 'react'

export const TourFilterInfo = createContext(false)

const FiltersProgramsProvider = ({ children, direction, directionPath }) => {
	const context = {
		direction,
		directionPath,
	}

	return <TourFilterInfo.Provider value={context}>{children}</TourFilterInfo.Provider>
}

export default FiltersProgramsProvider
