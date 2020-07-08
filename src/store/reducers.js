import { combineReducers } from 'redux'

import { formReducer } from './form/reducers'
import { urlReducer } from './url/reducers'

export default combineReducers({
	form: formReducer,
	url: urlReducer,
})
