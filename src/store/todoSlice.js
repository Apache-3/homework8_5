import { createAsyncThunk, createSlice, isAction } from "@reduxjs/toolkit";
import axios from "axios";

export const todoQuery = createAsyncThunk(
    'todo/todoQuery',
    async () => {
        const response = await axios.post('https://dummyjson.com/auth/todos/add', {
            token: localStorage.getItem('token')
        })
        return response.data
    }
)

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(todoQuery.fulfilled, (state, action) => {
            state.todos = action.payload
        })
    }
})

export const todoReducer = todoSlice.reducer