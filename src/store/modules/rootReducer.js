import { combineReducers} from 'redux';

import reserve from './reserves/reducer';

export default combineReducers({
    reserve,
})