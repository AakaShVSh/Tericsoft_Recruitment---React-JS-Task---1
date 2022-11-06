import { ADD_LOADING, ADD_SUCCESS } from "./fakedata.actiontype"

const init = {
    isloading:false,
    data:null
}

export const fakedatareducer = (state = init,{type,payload}) => {
    switch(type){
        case ADD_LOADING:
            return {
                ...state,
                isloading:true,
            }
            case ADD_SUCCESS:
                return {
                    ...state,
                    data:payload,
                    isloading:false,
                }
                default:
                    return state
    }
}