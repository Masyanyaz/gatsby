import { OPEN_POPUP_FORM, CLOSE_POPUP_FORM } from './actions'

const defaultState = {
	openForm: false,
}

export const formReducer = (state = defaultState, action) => {
	switch (action.type) {
		case OPEN_POPUP_FORM:
			return {
				...state,
				openForm: true,
			}
		case CLOSE_POPUP_FORM:
			return {
				...state,
				openForm: false,
			}
		default:
			return state
	}
}
