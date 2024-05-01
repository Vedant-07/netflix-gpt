import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:'user',
    initialState:null,
    reducers:{
        addUser:(state,action)=>{
            return action.payload
            //whatever payload is here ,that is going to be your nre state,that why ere return it to the store
        },
        removeUser:(state,action)=>{
            return null
        }
    }
}) 

export const {addUser,removeUser}=userSlice.actions
//see this is reducer not reducers
export default userSlice.reducer