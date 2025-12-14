import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./src/stores/sync/reduxTodo";
import todoSlice from "./src/stores/async/reduxAsync";
export const store = configureStore({
  reducer: {
    todoSync: todoReducer,
    todoAsync: todoSlice,
  },
});
