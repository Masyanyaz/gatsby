import React, { createContext } from 'react'

export const TourInfo = createContext(false)

const EndPagesProgramsProvider = ({ children, prices, days, towns, priceType, groupCount }) => {
	const context = {
		prices,
		days,
		towns,
		priceType,
		groupCount,
	}

	return <TourInfo.Provider value={context}>{children}</TourInfo.Provider>
}

export default EndPagesProgramsProvider
