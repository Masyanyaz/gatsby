import { useEffect } from 'react'

// Хук для отлавливания клика вне объекта блока
const isClient = typeof window === 'object'

const useOnClickOutside = (ref, handler) => {
	useEffect(() => {
		if (!isClient) {
			return false
		}

		const listener = (event) => {
			if (!ref.current || ref.current.contains(event.target)) {
				return
			}
			handler(event)
		}

		document.addEventListener('mousedown', listener)
		document.addEventListener('touchstart', listener)
		return () => {
			document.removeEventListener('mousedown', listener)
			document.removeEventListener('touchstart', listener)
		}
	}, [ref, handler])
}

export default useOnClickOutside
