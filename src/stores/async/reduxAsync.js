import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const getData = createAsyncThunk("asyncTodo/getData", async () => {
  try {
    let res = await fetch("http://localhost:3000/data");
    let data = await res.json();
    return data;
  } catch (e) {
    console.error(e);
  }
});
export const sortData = createAsyncThunk(
  "asyncTodo/sortData",
  async (sort, { dispatch }) => {
    if (sort != "All") {
      try {
        let res = await fetch(`http://localhost:3000/data?status=${sort}`);
        let data = await res.json();
        return data;
      } catch (e) {
        console.error(e);
      }
    } else {
      dispatch(getData());
    }
  }
);
export const searchData = createAsyncThunk(
  "asyncTodo/searchData",
  async (search, { dispatch }) => {
    if (search.trim()) {
      try {
        let res = await fetch(`http://localhost:3000/data?name=${search}`);
        let data = await res.json();
        return data;
      } catch (e) {
        console.error(e);
      }
    } else {
      dispatch(getData());
    }
  }
);
export const deleteData = createAsyncThunk(
  "asyncTodo/deleteData",
  async (id, { dispatch }) => {
    try {
      await fetch(`http://localhost:3000/data/${id}`, { method: "DELETE" });
      dispatch(getData());
    } catch (e) {
      console.error(e);
    }
  }
);
export const statusData = createAsyncThunk(
  "asyncTodo/deleteData",
  async (e, { dispatch }) => {
    try {
      await fetch(`http://localhost:3000/data/${e.id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ ...e, status: !e.status }),
      });
      dispatch(getData());
    } catch (e) {
      console.error(e);
    }
  }
);
export const editData = createAsyncThunk(
  "asyncTodo/deleteData",
  async (e, { dispatch }) => {
    try {
      await fetch(`http://localhost:3000/data/${e.id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ ...e, name: e.name }),
      });
      dispatch(getData());
    } catch (e) {
      console.error(e);
    }
  }
);
export const addData = createAsyncThunk(
  "asyncTodo/deleteData",
  async (a, { dispatch }) => {
    try {
      await fetch(`http://localhost:3000/data`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ status: false, name: a }),
      });
      dispatch(getData());
    } catch (e) {
      console.error(e);
    }
  }
);
const initialState = {
  data: [],
};
export const todoSlice = createSlice({
  name: "asyncTodo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(sortData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(searchData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default todoSlice.reducer;
