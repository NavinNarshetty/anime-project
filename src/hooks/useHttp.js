import { useCallback } from "react";
import { useReducer } from "react";

const initalHttpState = {
    loading:false,
    error:null,
    data:null,
}

const httpReducer = (currentHttpState, action)=>{
    switch (action.type) {
        case 'SEND':
            return {
                ...currentHttpState,
                loading:true
            }
        case 'RESPONSE':
            return {
                ...currentHttpState,
                loading:false,
                data:action.responseData
            }
        case 'ERROR':
            return {
                ...currentHttpState,
                loading:false,
                error:action.error
            }
        default:
            return {
                ...currentHttpState
            }
    }

}



const useHttp = ()=>{

    const [httpState , dispatchHttp]= useReducer(httpReducer , initalHttpState);

    const sendRequest = useCallback((requestConfig)=>{
        dispatchHttp({type:'SEND'});
        fetch(requestConfig.url ,{
            method:requestConfig.method,
            body:JSON.stringify(requestConfig.body),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((resp)=>{
            return resp.json()
        })
        .then((data)=>{
            dispatchHttp({
                type:'RESPONSE',
                responseData:data
            })
        })
        .catch((error)=>{
            dispatchHttp({
                type:'ERROR',
                error:error
            })
        })
    },[])

    return {
        isLoading:httpState.loading,
        error:httpState.error,
        response:httpState.data,
        fetchReq:sendRequest
    }

}

export default useHttp;