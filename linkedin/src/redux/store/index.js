/** @format */

import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers/reducer";

const store = configureStore({
  reducer: mainReducer,
});

export default store;
