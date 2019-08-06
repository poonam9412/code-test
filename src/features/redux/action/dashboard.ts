import {ERROR,DASHBOARDDATA} from './actionTypes/actionTypes'
import * as DashBoardData from '../data/dashboard.json'
import {dashboard} from './basePath'
export const dashBoardAction = () => dispatch=>{
     fetch(dashboard)
    .then(res=> 
        dispatch({
            type:DASHBOARDDATA,
            payload:DashBoardData
        })
    )
    .catch(err=> dispatch( { type:ERROR, payload:err.response.data }))
}