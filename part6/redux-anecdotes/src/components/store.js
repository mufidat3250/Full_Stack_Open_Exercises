import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducers/anecdoteReducer";
import notificationSlice, {
  notificationReducer,
} from "../reducers/notificationReducers";
import { createStore, combineReducers } from "redux";

// const reducers = {
//   reducer: reducer,
//   notification:notificationSlice,
// };
// const reducerss = combineReducers({
//   anecdote: reducer,
//   notification: notificationSlice,
// });
// export const store = createStore(reducerss);
console.log(reducer);

export const store = configureStore({
  reducer: {
    anecdote: reducer,
    notification: notificationSlice,
  },
});
