import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import coffeeReducer from "./coffeeSlice";

const store = configureStore({
  reducer: {
    coffee: coffeeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
