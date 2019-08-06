import {DASHBOARDDATA, ERROR} from '../action/actionTypes/actionTypes'
import {DashBoard} from '../state/dashboard'
export function dashBoardReducer (state :DashBoard,action){
    switch (action.type){
      case DASHBOARDDATA:
      return {...state,dashBoard:action.payload}
      case ERROR:
      return {...state, err :action.payload}
      default :
         return  {...state}
  }
   }