import { configureStore } from "@reduxjs/toolkit";
import skillReducer from "../slices/skillSlice/skillSlice.js";

const store = configureStore({
  reducer: {
    skills: skillReducer,
  },
});

export default store;