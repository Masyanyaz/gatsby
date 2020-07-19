import { useLayoutEffect } from 'react'

// Хук для блокировки скрола страницы
const isClient = typeof window === 'object'

function useLockBodyScroll() {
	useLayoutEffect(() => {
		if (!isClient) {
			return false
		}

		const originalStyle = window.getComputedStyle(document.body).overflow

		document.body.style.overflow = 'hidden'
		return () => (document.body.style.overflow = originalStyle)
	}, [])
}

export default useLockBodyScroll
