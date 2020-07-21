import React, { createContext } from 'react'

export const ExcursionInfo = createContext(false)

const EndPagesExcursionsProvider = ({ children, prices, hours, transports }) => {
	const context = {
		prices,
		hours,
		transports,
	}

	return <ExcursionInfo.Provider value={context}>{children}</ExcursionInfo.Provider>
}

export default EndPagesExcursionsProvider
