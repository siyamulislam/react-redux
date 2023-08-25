import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export const getAllTodos = createAsyncThunk("posts/getAllTodos", async () => {
    const res = await axios.get(API_URL);
    return res.data;
})

const todosSlice = createSlice({
    name: "todos",
    initialState: {
        isLoading: false,
        todos: [],
        error: null
    }, reducer: {

    },
    extraReducers: (builder) => {
        builder.addCase(getAllTodos.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getAllTodos.fulfilled, (state, action) => {
            state.isLoading = false; state.todos = action.payload; state.error = null;
        });
        builder.addCase(getAllTodos.rejected, (state, action) => {
            state.isLoading = false; state.todos = action.null; state.error = action.error.message;
        });
    }
});
export default todosSlice.reducer;