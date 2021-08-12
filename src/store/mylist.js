import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    items:[]
}

const myListSlice = createSlice({
    name:'mylist',
    initialState:initialState,
    reducers:{
        addItemToMyList(state,action){
            state.items.push(action.payload)
        },
        removeitemFromMyList(state,action){
           state.items = state.items.filter((value)=>{
               return value.id === action.payload
           })
        }

    }

})

export const myListActions = myListSlice.actions;

export const myListReducer = myListSlice.reducer