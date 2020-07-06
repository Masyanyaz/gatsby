import { CHANGE_DIRECTION, CHANGE_SERVICE } from "./actions"

const defaultState = {
  direction: '',
  service: ''
}

export const urlReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_DIRECTION:
      return {
        ...state,
        direction: action.payload,
      }
    case CHANGE_SERVICE:
      return {
        ...state,
        service: action.payload,
      }
    default:
      return state
  }
}
