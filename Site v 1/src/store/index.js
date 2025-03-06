import { configureStore } from "@reduxjs/toolkit";
import homePagesReducer from './homePagesSlice'

export default configureStore({
    reducer: {
       homePages: homePagesReducer,
    }
})