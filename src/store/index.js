
import { configureStore } from "@reduxjs/toolkit";
import { myListReducer } from "./mylist";

const store = configureStore({
    reducer:{
        myList:myListReducer
    }
})


export default store;