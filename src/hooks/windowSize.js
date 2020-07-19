/*
const useWindowSize = () => {
	const getSize = () => {
		return {
			width: isClient ? window.innerWidth : undefined,
			height: isClient ? window.innerHeight : undefined,
		}
	}

	const [windowSize, setWindowSize] = useState(getSize)

	useEffect(() => {
		if (!isClient) {
			return false
		}
		const handleResize = () => {
			setWindowSize(getSize())
		}

		document.addEventListener('resize', handleResize)

		return () => document.removeEventListener('resize', handleResize)
	}, [])

	return windowSize
}
*/

import { useEffect, useState } from 'react'

// Хук для отслеживания ширины экрана при ресайзе
const isClient = typeof window === 'object'

const useWindowSize = () => {
	const [width, setWidth] = useState(isClient ? window.innerWidth : undefined)

	useEffect(() => {
		if (!isClient) {
			return false
		}

		const handleResize = () => setTimeout(() => setWidth(window.innerWidth), 1000)

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return width
}

export default useWindowSize
