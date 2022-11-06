import { ADD_LOADING, ADD_SUCCESS } from "./fakedata.actiontype"


export const fakedataApi = (data) => (dispatch) => {
   dispatch({type:ADD_LOADING})
dispatch({type:ADD_SUCCESS,payload:data})   
}