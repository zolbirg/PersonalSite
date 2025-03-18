import { createSlice } from "@reduxjs/toolkit";

const homePagesSlice = createSlice({
  name: "homePagesSlice",
  initialState:{
    aboutPage:{

    },
    skillsBarPage:{
      isActive:'Developer', 
    },

  },
  reducers: {
   skillsContentType(state, action){
  state.skillsBarPage.isActive = action.payload.isActive

  }
   }
  },
);

export const {skillsContentType, } = homePagesSlice.actions;

export default homePagesSlice.reducer;