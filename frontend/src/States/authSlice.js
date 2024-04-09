import { createSlice } from "@reduxjs/toolkit";

 const  authSlice=createSlice({
    name:'auth',
    initialState:{
        token:null,
    },
    reducers:{
        setLogin:(state,action)=>{
            const { accessToken } = action.payload;
            state.token = accessToken;
        },
        setLogout:(state,action)=>{
            state.token=null
        },
      
    }
 })

 export const {setLogin,setLogout}=authSlice.actions
 export default authSlice.reducer;

 export const selectCurrentToken=(state)=>state.auth.token
