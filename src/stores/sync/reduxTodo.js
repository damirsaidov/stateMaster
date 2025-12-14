import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [{ name: "Ali", status: false, id: 1 }],
};
export const todoSlice = createSlice({
  name: "syncTodo",
  initialState,
  reducers: {
    deleteData: (state, action) => {
      state.data = state.data.filter((e) => e.id != action.payload);
    },
    addData: (state, action) => {
      state.data = [
        ...state.data,
        { id: Date.now(), status: false, name: action.payload },
      ];
    },
    statusData: (state, action) => {
      state.data = state.data.map((e) =>
        e.id == action.payload ? { ...e, status: !e.status } : e
      );
    },
    editData: (state, action) => {
      state.data = state.data.map((e) =>
        e.id == action.payload.id ? { ...e, name: action.payload.name } : e
      );
    },
  },
});

export const { deleteData, statusData, editData, addData } = todoSlice.actions;
export default todoSlice.reducer;
