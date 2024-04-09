import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setLogin,setLogout} from './authSlice'

const baseQuery=fetchBaseQuery({
    baseUrl:"http://localhost:3001/api",
    credentials:"include",
    prepareHeaders:(headers,{getState})=>{
        const token=getState().auth.token
        if(token){
            headers.set("authorization",`Bearer ${token}`) 
        }
        return headers;
    }
})

const baseQueryWithReauth=async(args,api,extraOptions)=>{
    let result=await baseQuery(args,api,extraOptions)

    if(result?.error?.originalStatus===403){
        console.log('sending refresh token')

        //sending refresh token to get new access token
        const refreshResult=await baseQuery('/refresh',api,extraOptions)
        if (refreshResult?.data){
            const user=api.getState().auth.user
            api.dispatch(setLogin({...refreshResult.data,user}))
            //retry the original query with new access token
            result=await baseQuery(args,api,extraOptions)
        }
        else{
            api.dispatch(setLogout());
        }
    }
    return result;
}

export const apiSlice=createApi({
    baseQuery:baseQueryWithReauth,
    endpoints:builder=>({})
})