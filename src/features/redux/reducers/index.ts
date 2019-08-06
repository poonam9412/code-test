import { combineReducers } from 'redux'
import {dashBoardReducer} from './dashboard'
export default combineReducers({
    dashboardDATA:dashBoardReducer
})