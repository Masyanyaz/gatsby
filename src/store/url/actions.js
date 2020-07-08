export const CHANGE_DIRECTION = 'CHANGE_DIRECTION'
export const CHANGE_SERVICE = 'CHANGE_SERVICE'

export const changeDirection = (payload) => ({
	type: CHANGE_DIRECTION,
	payload,
})

export const changeService = (payload) => ({
	type: CHANGE_SERVICE,
	payload,
})
