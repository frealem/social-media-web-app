import { apiSlice } from "./Api";

export const apiAuthSlice=apiSlice.injectEndpoints({
    endpoints:builder=>({
        login:builder.mutation({
            query:credentials=>({
                url:'/login',
                method:'POST',
                body:{...credentials},
            })
        }),
        register:builder.mutation({
            query:register=>({
                url:'/register',
                method:'POST',
                body:{...register},
            })
        })
    })
})

export const {useLoginMutation,useRegisterMutation}=apiAuthSlice;